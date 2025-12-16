import React, { useState } from 'react';
import ConnectWalletModal from '../components/ConnectWalletModal';
import { View, Text, TouchableOpacity, StyleSheet, Alert, StatusBar } from 'react-native';
import { useWallet } from '../wallet/WalletContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';

export default function WalletScreen({ navigation }: any) {
  const { connected, address, pairingUri, connect, disconnect } = useWallet();
  const [modalVisible, setModalVisible] = useState(false);
  const headerHeight = useHeaderHeight();

  async function onReturn() {
    // Navigate to Home or whatever flow is next
    // Usually replacing current screen or navigating
    // Using replace to prevent going back to "Success" screen easily?
    // Or just simple navigate.
    navigation.navigate('Home');
  }

  // If connected, show Success Screen (Image 5)
  // Else show Landing Screen (Image 1)

  if (connected) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <StatusBar barStyle="light-content" />

        <View style={styles.successIconContainer}>
          <MaterialCommunityIcons name="lightning-bolt" size={40} color="#FFD166" />
          {/* Placeholder for the purple/orange logo in Image 5 */}
        </View>

        <Text style={styles.addressText}>
          {address ? `${address.substring(0, 6)}.....${address.substring(address.length - 5)}` : ''}
        </Text>

        <Text style={styles.successTitle}>Connect Successfully</Text>

        {/* Faint background text pattern could go here if implemented, skipping for simplicity unless requested */}

        <View style={{ flex: 1 }} />

        <TouchableOpacity style={styles.actionButton} onPress={onReturn}>
          <Text style={styles.actionButtonText}>Return</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.landingContent}>
        <Text style={styles.brandTitle}>FURO</Text>
        <Text style={styles.brandTagline}>
          The First API Marketplace with{'\n'}Crypto Micropayments
        </Text>
      </View>

      <TouchableOpacity style={styles.connectButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.connectButtonText}>Connect your Wallet</Text>
      </TouchableOpacity>

      <ConnectWalletModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        pairingUri={pairingUri}
        connect={connect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20
  },
  centerContent: {
    alignItems: 'center',
    paddingTop: 100,
  },
  landingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40, // Visual adjustment to center slightly higher
  },
  brandTitle: {
    fontSize: 64,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: 'center',
  },
  brandTagline: {
    fontSize: 18,
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 300,
  },
  connectButton: {
    backgroundColor: '#1E1BCC', // Approximately #2D2CBA or similar blue
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 30, // "Pill" shape
    marginBottom: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 24, // Matches "Connect your Wallet" size appearance (Images 1)
    fontFamily: 'monospace', // Or a serif/bold font if available. 'monospace' gives a techy feel.
    fontWeight: 'bold',
  },
  successIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#1A1860', // Dark purple/blue bg
    borderRadius: 0, // Square as per image? No, image 5 shows a square logo.
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  addressText: {
    color: '#E0E0E0',
    fontSize: 18,
    marginBottom: 20,
  },
  successTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    fontFamily: 'monospace',
  },
  actionButton: {
    backgroundColor: '#3534D1',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 16,
    marginBottom: 20,
    minWidth: 200,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '500',
  }
});
