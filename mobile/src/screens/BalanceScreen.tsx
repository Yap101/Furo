import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { BASE_URL, rpcUrlForChain } from '../config';
import { useWallet } from '../wallet/WalletContext';
import { ethers } from 'ethers';

export default function BalanceScreen() {
  const [busy, setBusy] = useState(false);
  const [timeoutHit, setTimeoutHit] = useState(false);
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
    setBusy(true);
    setTimeoutHit(false);
    try {
      if (!connected) {
        // Wrap connect in a timeout so UI does not spin forever when user must approve externally.
        const connectPromise = (async () => {
          await connect();
        })();
        const { result, timedOut } = await promiseWithTimeout(connectPromise, 15000);
        if (timedOut) {
          setTimeoutHit(true);
        }
      }
      const [backend, onchain] = await Promise.all([
        fetchBackendBalance(),
        fetchOnchainBalance()
      ]);
      const addrLine = address ? `\nAddress: ${address}` : '';
      const chainLine = chainId ? `\nChain ID: ${chainId}` : '';
      Alert.alert('Balances', `Backend: ${backend}\nWallet: ${onchain}${addrLine}${chainLine}`);
    } catch (e: any) {
      Alert.alert('Wallet', e?.message || 'Operation failed');
    } finally {
      setBusy(false);
    }
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
      {pairingUri ? (
        <View style={styles.pairingBox}>
          <Text style={styles.pairingTitle}>WalletConnect Link</Text>
          <Text selectable style={styles.pairingUri}>{pairingUri}</Text>
          <View style={styles.row}>
            <Button title="Copy link" onPress={() => Clipboard.setStringAsync(pairingUri)} />
            <View style={{ width: 12 }} />
            <Button title="Cancel" color="#cc3333" onPress={() => { cancelPending(); Alert.alert('Wallet', 'Connection cancelled'); }} />
          </View>
        </View>
      ) : null}
      {timeoutHit && !connected ? (
        <Text style={styles.hint}>Approve the connection in your wallet app. If not opened, copy the pairing link from the earlier screen or reopen the app.</Text>
      ) : null}
      <View style={{ height: 12 }} />
      <Button title={connected ? 'Wallet' : 'Connect Wallet'} onPress={onWalletPress} disabled={busy || !!pairingUri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, marginTop: 20 },
  balance: { fontSize: 28, marginTop: 12, fontWeight: '600' },
  error: { color: 'red', marginTop: 12 },
  hint: { fontSize: 12, color: '#666', marginTop: 12, textAlign: 'center', paddingHorizontal: 16 },
  pairingBox: { marginTop: 16, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, width: '100%' },
  pairingTitle: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  pairingUri: { fontSize: 12, color: '#333' },
  row: { flexDirection: 'row', marginTop: 10, alignItems: 'center' }
});
