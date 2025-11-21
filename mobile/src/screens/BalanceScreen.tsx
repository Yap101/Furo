import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, Alert, Linking, Modal } from 'react-native';
import { BASE_URL, rpcUrlForChain } from '../config';
import { fetchProfile, fetchBackendBalance as getBackendBal } from '../api/client';
import { useWallet } from '../wallet/WalletContext';
import { ethers } from 'ethers';

export default function BalanceScreen() {
  const [busy, setBusy] = useState(false);
  const [timeoutHit, setTimeoutHit] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const { connected, address, chainId, connect, initError, pairingUri, cancelPending } = useWallet();
  const [username, setUsername] = useState<string | null>(null);
  const [backendBalance, setBackendBalance] = useState<string | null>(null);
  const [onchainBalance, setOnchainBalance] = useState<string | null>(null);
  const [accountError, setAccountError] = useState<string | null>(null);
  // Diagnostics
  const [profileRaw, setProfileRaw] = useState<any>(null);
  const [balanceRaw, setBalanceRaw] = useState<any>(null);
  const [fetchStatus, setFetchStatus] = useState<string | null>(null);
  const fetchedRef = useRef(false);

  async function fetchBackendBalance(): Promise<string> {
    try {
      const value = await getBackendBal();
      setBalanceRaw(value);
      return value;
    } catch (err: any) {
      setBalanceRaw({ error: err?.message });
      return `Error: ${err.message || 'Failed to fetch backend balance'}`;
    }
  }

  async function fetchUsername(): Promise<string> {
    try {
      const profile = await fetchProfile();
      setProfileRaw(profile);
      const val = profile?.username || profile?.name;
      return val || 'Unknown';
    } catch (err: any) {
      setProfileRaw({ error: err?.message });
      return 'Unknown';
    }
  }

  async function fetchOnchainBalance(): Promise<string> {
    if (!connected || !address) return 'Not connected';
    try {
      const rpc = rpcUrlForChain(chainId);
      const provider = new ethers.JsonRpcProvider(rpc);
      const bal = await provider.getBalance(address);
      return `${ethers.formatEther(bal)} ETH`;
    } catch (e: any) {
      return `Error: ${e?.message || 'Failed to load on-chain balance'}`;
    }
  }

  async function onWalletPress() {
    if (initError) {
      Alert.alert('Wallet', initError + '\n\nSet EXPO_PUBLIC_WC_PROJECT_ID and restart.');
      return;
    }
    if (connected) {
      // Manual refresh
      fetchedRef.current = false; // allow refetch
      await loadAccountData();
      return;
    }
    // Not connected: show 4 wallet choices, do not default-open
    setPickerVisible(true);
    // Start pairing if not already started
    try { if (!pairingUri) await connect(); } catch { }
  }

  async function connectVia(target: 'metamask' | 'rainbow' | 'coinbase' | 'walletconnect') {
    try {
      // Start pairing if not already started
      if (!pairingUri) await connect();
      const uri = await waitForPairingUri(20000);
      if (!uri) {
        Alert.alert('Wallet', 'Failed to get pairing link. Please try again.');
        return;
      }
      const link = walletLinkFor(target, uri);
      await Linking.openURL(link);
      setPickerVisible(false);
      // After user approves in wallet, we'll rely on effect below to auto-load balances.
    } catch (e: any) {
      Alert.alert('Wallet', e?.message || 'Unable to start connection');
    }
  }

  function walletLinkFor(target: 'metamask' | 'rainbow' | 'coinbase' | 'walletconnect', uri: string) {
    switch (target) {
      case 'metamask':
        return `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;
      case 'rainbow':
        return `https://rnbwapp.com/wc?uri=${encodeURIComponent(uri)}`;
      case 'coinbase':
        return `https://go.cb-w.com/wc?uri=${encodeURIComponent(uri)}`;
      case 'walletconnect':
      default:
        return `walletconnect://wc?uri=${encodeURIComponent(uri)}`;
    }
  }

  async function waitForPairingUri(ms: number): Promise<string | null> {
    const start = Date.now();
    while (Date.now() - start < ms) {
      if (pairingUri) return pairingUri;
      await new Promise(r => setTimeout(r, 100));
    }
    return pairingUri ?? null;
  }

  function promiseWithTimeout<T>(promise: Promise<T>, ms: number): Promise<{ result?: T; timedOut: boolean }> {
    return new Promise(resolve => {
      let settled = false;
      const timer = setTimeout(() => {
        if (!settled) resolve({ timedOut: true });
      }, ms);
      promise.then(r => {
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          resolve({ result: r, timedOut: false });
        }
      }).catch(() => {
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          resolve({ timedOut: false });
        }
      });
    });
  }

  async function loadAccountData() {
    if (!connected || !address) return;
    // Allow manual retry even if previously fetched when values look wrong
    setBusy(true);
    setAccountError(null);
    setFetchStatus(null);
    try {
      const [u, b, o] = await Promise.all([
        fetchUsername(),
        fetchBackendBalance(),
        fetchOnchainBalance()
      ]);
      setUsername(u);
      setBackendBalance(b);
      setOnchainBalance(o);
      fetchedRef.current = true;
    } catch (e: any) {
      setAccountError(e?.message || 'Failed to load account');
    } finally {
      setBusy(false);
    }
  }

  // Auto-fetch once connected & validated (button press not required)
  useEffect(() => { if (connected) loadAccountData(); }, [connected]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balances</Text>
      {busy ? <ActivityIndicator /> : null}
      <Modal visible={pickerVisible} animationType="slide" transparent onRequestClose={() => setPickerVisible(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Connect Wallet</Text>
            <Text style={styles.hint}>Choose a wallet to continue</Text>
            <View style={{ height: 12 }} />
            <View style={styles.rowWrap}>
              <Button title="MetaMask" onPress={() => connectVia('metamask')} />
              <View style={{ width: 8 }} />
              <Button title="Rainbow" onPress={() => connectVia('rainbow')} />
              <View style={{ width: 8 }} />
              <Button title="Coinbase" onPress={() => connectVia('coinbase')} />
              <View style={{ width: 8 }} />
              <Button title="WalletConnect" onPress={() => connectVia('walletconnect')} />
            </View>
            <View style={{ height: 16 }} />
            <Button title="Cancel" color="#cc3333" onPress={() => { cancelPending(); setPickerVisible(false); }} />
          </View>
        </View>
      </Modal>
      {timeoutHit && !connected ? (
        <Text style={styles.hint}>Approve the connection in your wallet app after selecting it.</Text>
      ) : null}
      <View style={{ height: 12 }} />
      <Button title={connected ? 'Refresh Account' : 'Connect Wallet'} onPress={onWalletPress} disabled={busy || pickerVisible} />
      {connected ? (
        <View style={{ marginTop: 16, width: '100%' }}>
          <Text style={styles.sectionTitle}>Account Info</Text>
          {!fetchedRef.current && busy ? <ActivityIndicator /> : null}
          {accountError ? <Text style={styles.error}>{accountError}</Text> : (
            <>
              <Text style={styles.label}>Username: <Text style={styles.value}>{username ?? '...'}</Text></Text>
              <View style={{ height: 12 }} />
              <Text style={styles.balanceLabel}>Total Balance</Text>
              <Text style={styles.balanceValue}>
                {(() => {
                  const backendVal = parseFloat(backendBalance || '0') || 0;
                  const onchainVal = parseFloat((onchainBalance || '0').split(' ')[0]) || 0;
                  const total = backendVal + onchainVal;
                  return `${total.toFixed(4)} ETH`; // Assuming backend is also ETH-denominated or compatible
                })()}
              </Text>
              <View style={{ height: 12 }} />
              <Text style={styles.label}>Address: <Text style={styles.value}>{address?.slice(0, 6)}...{address?.slice(-4)}</Text></Text>
              <View style={{ height: 12 }} />
              {/* Diagnostics hidden by default or removed as per request for simplicity, 
                  but keeping them commented out or minimal if needed for debugging */}
              {/* 
              <Text style={styles.diag}>BASE_URL: {BASE_URL}</Text>
              <Text style={styles.diag}>Fetch Status: {fetchStatus ?? 'n/a'}</Text> 

          async function onWalletPress() {
    if (initError) {
            Alert.alert('Wallet', initError + '\n\nSet EXPO_PUBLIC_WC_PROJECT_ID and restart.');
          return;
    }
          if (connected) {
            // Manual refresh
            fetchedRef.current = false; // allow refetch
          await loadAccountData();
          return;
    }
          // Not connected: show 4 wallet choices, do not default-open
          setPickerVisible(true);
          // Start pairing if not already started
          try { if (!pairingUri) await connect(); } catch { }
  }

          async function connectVia(target: 'metamask' | 'rainbow' | 'coinbase' | 'walletconnect') {
    try {
      // Start pairing if not already started
      if (!pairingUri) await connect();
          const uri = await waitForPairingUri(20000);
          if (!uri) {
            Alert.alert('Wallet', 'Failed to get pairing link. Please try again.');
          return;
      }
          const link = walletLinkFor(target, uri);
          await Linking.openURL(link);
          setPickerVisible(false);
      // After user approves in wallet, we'll rely on effect below to auto-load balances.
    } catch (e: any) {
            Alert.alert('Wallet', e?.message || 'Unable to start connection');
    }
  }

          function walletLinkFor(target: 'metamask' | 'rainbow' | 'coinbase' | 'walletconnect', uri: string) {
    switch (target) {
      case 'metamask':
          return `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;
          case 'rainbow':
          return `https://rnbwapp.com/wc?uri=${encodeURIComponent(uri)}`;
          case 'coinbase':
          return `https://go.cb-w.com/wc?uri=${encodeURIComponent(uri)}`;
          case 'walletconnect':
          default:
          return `walletconnect://wc?uri=${encodeURIComponent(uri)}`;
    }
  }

          async function waitForPairingUri(ms: number): Promise<string | null> {
    const start = Date.now();
          while (Date.now() - start < ms) {
      if (pairingUri) return pairingUri;
      await new Promise(r => setTimeout(r, 100));
    }
          return pairingUri ?? null;
  }

          function promiseWithTimeout<T>(promise: Promise<T>, ms: number): Promise<{ result ?: T; timedOut: boolean }> {
    return new Promise(resolve => {
              let settled = false;
      const timer = setTimeout(() => {
        if (!settled) resolve({timedOut: true });
      }, ms);
      promise.then(r => {
        if (!settled) {
              settled = true;
            clearTimeout(timer);
            resolve({result: r, timedOut: false });
        }
      }).catch(() => {
        if (!settled) {
              settled = true;
            clearTimeout(timer);
            resolve({timedOut: false });
        }
      });
    });
  }

            async function loadAccountData() {
    if (!connected || !address) return;
            // Allow manual retry even if previously fetched when values look wrong
            setBusy(true);
            setAccountError(null);
            setFetchStatus(null);
            try {
      const [u, b, o] = await Promise.all([
            fetchUsername(),
            fetchBackendBalance(),
            fetchOnchainBalance()
            ]);
            setUsername(u);
            setBackendBalance(b);
            setOnchainBalance(o);
            fetchedRef.current = true;
    } catch (e: any) {
              setAccountError(e?.message || 'Failed to load account');
    } finally {
              setBusy(false);
    }
  }

  // Auto-fetch once connected & validated (button press not required)
  useEffect(() => { if (connected) loadAccountData(); }, [connected]);

            return (
            <View style={styles.container}>
              <Text style={styles.title}>Balances</Text>
              {busy ? <ActivityIndicator /> : null}
              <Modal visible={pickerVisible} animationType="slide" transparent onRequestClose={() => setPickerVisible(false)}>
                <View style={styles.modalBackdrop}>
                  <View style={styles.modalCard}>
                    <Text style={styles.modalTitle}>Connect Wallet</Text>
                    <Text style={styles.hint}>Choose a wallet to continue</Text>
                    <View style={{ height: 12 }} />
                    <View style={styles.rowWrap}>
                      <Button title="MetaMask" onPress={() => connectVia('metamask')} />
                      <View style={{ width: 8 }} />
                      <Button title="Rainbow" onPress={() => connectVia('rainbow')} />
                      <View style={{ width: 8 }} />
                      <Button title="Coinbase" onPress={() => connectVia('coinbase')} />
                      <View style={{ width: 8 }} />
                      <Button title="WalletConnect" onPress={() => connectVia('walletconnect')} />
                    </View>
                    <View style={{ height: 16 }} />
                    <Button title="Cancel" color="#cc3333" onPress={() => { cancelPending(); setPickerVisible(false); }} />
                  </View>
                </View>
              </Modal>
              {timeoutHit && !connected ? (
                <Text style={styles.hint}>Approve the connection in your wallet app after selecting it.</Text>
              ) : null}
              <View style={{ height: 12 }} />
              <Button title={connected ? 'Refresh Account' : 'Connect Wallet'} onPress={onWalletPress} disabled={busy || pickerVisible} />
              {connected ? (
                <View style={{ marginTop: 16, width: '100%' }}>
                  <Text style={styles.sectionTitle}>Account Info</Text>
                  {!fetchedRef.current && busy ? <ActivityIndicator /> : null}
                  {accountError ? <Text style={styles.error}>{accountError}</Text> : (
                    <>
                      <Text style={styles.label}>Username: <Text style={styles.value}>{username ?? '...'}</Text></Text>
                      <View style={{ height: 12 }} />
                      <Text style={styles.balanceLabel}>Total Balance</Text>
                      <Text style={styles.balanceValue}>
                        {(() => {
                          const backendVal = parseFloat(backendBalance || '0') || 0;
                          const onchainVal = parseFloat((onchainBalance || '0').split(' ')[0]) || 0;
                          const total = backendVal + onchainVal;
                          return `${total.toFixed(4)} ETH`; // Assuming backend is also ETH-denominated or compatible
                        })()}
                      </Text>
                      <View style={{ height: 12 }} />
                      <Text style={styles.label}>Address: <Text style={styles.value}>{address?.slice(0, 6)}...{address?.slice(-4)}</Text></Text>
                      <View style={{ height: 12 }} />
                      {/* Diagnostics hidden by default or removed as per request for simplicity, 
                  but keeping them commented out or minimal if needed for debugging */}
              {/* 
              <Text style={styles.diag}>BASE_URL: {BASE_URL}</Text>
              <Text style={styles.diag}>Fetch Status: {fetchStatus ?? 'n/a'}</Text> 
              */}
            </>
          )}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, marginTop: 20 },
  balance: { fontSize: 28, marginTop: 12, fontWeight: '600' },
  error: { color: 'red', marginTop: 12 },
  hint: { fontSize: 12, color: '#666', marginTop: 12, textAlign: 'center', paddingHorizontal: 16 },
  row: { flexDirection: 'row', marginTop: 10, alignItems: 'center' },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, alignItems: 'center' },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: '#fff', padding: 16, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  modalTitle: { fontSize: 18, fontWeight: '600' }
  , sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8 }
  , label: { fontSize: 14, marginTop: 4 }
  , value: { fontWeight: '600' }
  , diag: { fontSize: 10, color: '#444', marginTop: 2 }
  , balanceLabel: { fontSize: 16, color: '#666', fontWeight: '500' }
  , balanceValue: { fontSize: 32, fontWeight: '700', color: '#000', marginTop: 4 }
});
