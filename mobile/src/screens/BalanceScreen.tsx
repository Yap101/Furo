import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, Alert } from 'react-native';
import { BASE_URL, rpcUrlForChain } from '../config';
import { useWallet } from '../wallet/WalletContext';
import { ethers } from 'ethers';

export default function BalanceScreen() {
  const [busy, setBusy] = useState(false);
  const { connected, address, chainId, connect, initError } = useWallet();

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
    try {
      if (!connected) {
        await connect();
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balances</Text>
      {busy ? <ActivityIndicator /> : null}
      <View style={{ height: 12 }} />
      <Button title={connected ? 'Wallet' : 'Connect Wallet'} onPress={onWalletPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, marginTop: 20 },
  balance: { fontSize: 28, marginTop: 12, fontWeight: '600' },
  error: { color: 'red', marginTop: 12 }
});
