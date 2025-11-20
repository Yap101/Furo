import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, Alert, Linking, Modal } from 'react-native';
import { BASE_URL, rpcUrlForChain } from '../config';
import { useWallet } from '../wallet/WalletContext';
import { ethers } from 'ethers';

export default function BalanceScreen() {
  const [busy, setBusy] = useState(false);
  const [timeoutHit, setTimeoutHit] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const { connected, address, chainId, connect, initError, pairingUri, cancelPending } = useWallet();

  async function fetchBackendBalance(): Promise<string> {
    try {
      // Example API: GET /api/providers/me/balance or similar - replace with your endpoint
      const res = await fetch(`${BASE_URL}/api/providers/me/balance`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      // Expect json { success: true, data: { balance: '123' }}
      return json?.data?.balance?.toString() ?? '0';
    } catch (err: any) {
      return `Error: ${err.message || 'Failed to fetch backend balance'}`;
    }
  }

  async function fetchUsername(): Promise<string> {
    try {
      // Example profile endpoint; adjust if your backend differs
      const res = await fetch(`${BASE_URL}/api/providers/me`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      // Expect json { success: true, data: { username: 'alice' }} or similar
      return json?.data?.username || json?.data?.name || 'Unknown';
    } catch (err: any) {
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
      setBusy(true);
      try {
        const [username, backend, onchain] = await Promise.all([
          fetchUsername(),
          fetchBackendBalance(),
          fetchOnchainBalance()
        ]);
        const addrLine = address ? `\nAddress: ${address}` : '';
        const chainLine = chainId ? `\nChain ID: ${chainId}` : '';
        Alert.alert('Account', `User: ${username}\nBackend Balance: ${backend}\nOn-chain: ${onchain}${addrLine}${chainLine}`);
      } catch (e: any) {
        Alert.alert('Wallet', e?.message || 'Operation failed');
      } finally {
        setBusy(false);
      }
      return;
    }
    // Not connected: show 4 wallet choices, do not default-open
    setPickerVisible(true);
    // Start pairing if not already started
    try { if (!pairingUri) await connect(); } catch {}
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
      <Button title={connected ? 'Show Account' : 'Connect Wallet'} onPress={onWalletPress} disabled={busy || pickerVisible} />
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
});
