import React, { useState } from 'react';
import ConnectWalletModal from '../components/ConnectWalletModal';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useWallet } from '../wallet/WalletContext';

export default function WalletScreen() {
  const { connected, address, chainId, pairingUri, initError, connect, disconnect, signMessage, sendTransaction, signTypedData } = useWallet();
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

  async function onSendTx() {
    try {
      const tx = {
        from: address,
        to: address, // send to self
        data: '0x',
        value: '0x0', // 0 ETH
      };
      const hash = await sendTransaction(tx);
      Alert.alert('Tx Sent', hash);
    } catch (e: any) {
      Alert.alert('Tx failed', e?.message || 'Unknown error');
    }
  }

  async function onSignTyped() {
    try {
      // EIP-712 Example
      const domain = {
        name: 'Furo Mobile',
        version: '1',
        chainId: chainId || 1,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
      };
      const types = {
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' }
        ]
      };
      const value = {
        name: 'Furo User',
        wallet: address
      };
      const sig = await signTypedData(domain, types, value);
      Alert.alert('Typed Signed', sig);
    } catch (e: any) {
      Alert.alert('Typed Sign failed', e?.message || 'Unknown error');
    }
  }

  const [modalVisible, setModalVisible] = useState(false);

  async function onConnectPress() {
    setModalVisible(true);
    // Connect will be triggered by the modal or manual if needed
    if (!pairingUri) {
      try { await connect(); } catch { }
    }
  }

  // .. existing event handlers but we don't display pairingUri directly anymore (or minimal) 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>

      <ConnectWalletModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        pairingUri={pairingUri}
        connect={connect}
      />

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
          <Button title="Sign Typed Data" onPress={onSignTyped} />
          <View style={{ height: 12 }} />
          <Button title="Send Transaction (0 ETH)" onPress={onSendTx} />
          <View style={{ height: 12 }} />
          <Button title="Disconnect" onPress={disconnect} />
        </>
      ) : (
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', marginBottom: 20, color: '#666' }}>
            Connect your wallet to access Furo.
          </Text>
          <Button title={loading ? 'Connecting...' : 'Connect Wallet'} onPress={onConnectPress} disabled={loading} />

          {/* Debug: still show URI if strictly needed, or hide it. 
              User wants POPUP, so hiding URI is cleaner. 
              But let's keep a small "Copy Link" button just in case underneath? 
          */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 12 },
  uri: { fontSize: 12, color: '#555' }
});
