import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useWallet } from '../wallet/WalletContext';

export default function WalletScreen() {
  const { connected, address, chainId, pairingUri, initError, connect, disconnect, signMessage } = useWallet();
  const [loading, setLoading] = useState(false);

  async function onConnect() {
    setLoading(true);
    try {
      await connect();
    } catch (e: any) {
      Alert.alert('Connect failed', e?.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  async function onCopyUri() {
    if (pairingUri) {
      await Clipboard.setStringAsync(pairingUri);
      Alert.alert('Copied', 'Pairing URI copied to clipboard');
    }
  }

  async function onSign() {
    try {
      const sig = await signMessage('Hello from Furo');
      Alert.alert('Signed', sig);
    } catch (e: any) {
      Alert.alert('Sign failed', e?.message || 'Unknown error');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      {initError ? (
        <>
          <Text style={{ color: 'red' }}>{initError}</Text>
          <View style={{ height: 12 }} />
          <Text>Set EXPO_PUBLIC_WC_PROJECT_ID in mobile/.env and restart.</Text>
        </>
      ) : connected ? (
        <>
          <Text>Address: {address}</Text>
          <Text>Chain ID: {chainId}</Text>
          <View style={{ height: 12 }} />
          <Button title="Sign message" onPress={onSign} />
          <View style={{ height: 12 }} />
          <Button title="Disconnect" onPress={disconnect} />
        </>
      ) : (
        <>
          <Button title={loading ? 'Connecting...' : 'Connect Wallet'} onPress={onConnect} disabled={loading} />
          {pairingUri ? (
            <>
              <View style={{ height: 12 }} />
              <Text selectable numberOfLines={2} style={styles.uri}>{pairingUri}</Text>
              <View style={{ height: 8 }} />
              <Button title="Copy URI" onPress={onCopyUri} />
            </>
          ) : null}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 12 },
  uri: { fontSize: 12, color: '#555' }
});
