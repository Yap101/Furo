import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { rpcUrlForChain } from '../config';
import { fetchBackendBalance as getBackendBal } from '../api/client';
import { useWallet } from '../wallet/WalletContext';
import { ethers } from 'ethers';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BalanceScreen({ navigation }: any) {
  const { connected, address, chainId } = useWallet();
  const [busy, setBusy] = useState(false);

  const [backendBalance, setBackendBalance] = useState<string | null>(null);
  const [onchainBalance, setOnchainBalance] = useState<string | null>(null);
  const [accountError, setAccountError] = useState<string | null>(null);

  // Mock Transactions
  const TRANSACTIONS = [
    { id: 1, date: '2024-01-15', calls: '300 calls', amount: '0.00372 ETH', sub: '+0.00013 ETH' },
    { id: 2, date: '2024-01-14', calls: '120 calls', amount: '0.00402 ETH', sub: '+0.00011 ETH' },
    { id: 3, date: '2024-01-13', calls: '250 calls', amount: '0.03748 ETH', sub: '+0.00004 ETH' },
    { id: 4, date: '2024-01-15', calls: '200 calls', amount: '0.00510 ETH', sub: '+0.00013 ETH' },
    { id: 5, date: '2024-01-15', calls: '180 calls', amount: '0.00450 ETH', sub: '+0.00016 ETH' },
  ];

  async function fetchBackendBalance(): Promise<string> {
    try {
      const value = await getBackendBal();
      return value;
    } catch (err: any) {
      return '0';
    }
  }

  async function fetchOnchainBalance(): Promise<string> {
    if (!connected || !address) return '0';
    try {
      const rpc = rpcUrlForChain(chainId);
      const provider = new ethers.JsonRpcProvider(rpc);
      const bal = await provider.getBalance(address);
      return `${ethers.formatEther(bal)} ETH`;
    } catch (e: any) {
      return '0';
    }
  }

  async function loadAccountData() {
    if (!connected || !address) return;
    setBusy(true);
    setAccountError(null);
    try {
      const [b, o] = await Promise.all([
        fetchBackendBalance(),
        fetchOnchainBalance()
      ]);
      setBackendBalance(b);
      setOnchainBalance(o);
    } catch (e: any) {
      setAccountError(e?.message || 'Failed to load account');
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadAccountData();
  }, [connected, address]);

  const totalBalance = (() => {
    const backendVal = parseFloat(backendBalance || '0') || 0;
    const onchainVal = parseFloat((onchainBalance || '0').split(' ')[0]) || 0;
    return (backendVal + onchainVal).toFixed(4); // Keep it clean
  })();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>{'< Home'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FURO</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Profile / Balance Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarBox}>
            <MaterialCommunityIcons name="lightning-bolt" size={32} color="#FFD166" />
          </View>

          <Text style={styles.addressText}>
            {address ? `${address.substring(0, 6)}.....${address.substring(address.length - 5)}` : 'No Wallet'}
          </Text>

          <Text style={styles.balanceLabel}>Balance:</Text>

          {busy ? (
            <ActivityIndicator color="#FFF" style={{ marginTop: 10 }} />
          ) : (
            <Text style={styles.balanceValue}>{totalBalance} ETH</Text>
          )}
        </View>

        {/* Transactions List */}
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Recent transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See More {'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />

        <View style={styles.list}>
          {TRANSACTIONS.map((tx) => (
            <View key={tx.id} style={styles.row}>
              <View>
                <Text style={styles.rowDate}>{tx.date}</Text>
                <Text style={styles.rowCalls}>{tx.calls}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.rowAmount}>{tx.amount}</Text>
                <Text style={styles.rowSub}>{tx.sub}</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
  },
  content: {
    paddingBottom: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  avatarBox: {
    width: 64,
    height: 64,
    backgroundColor: '#2D2CBA',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  addressText: {
    color: '#E0E0E0',
    fontSize: 16,
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#A0A0A0',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  balanceValue: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  listTitle: {
    color: '#A0A0A0',
    fontSize: 18,
    fontWeight: '600',
  },
  seeMore: {
    color: '#3B99FC',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    alignItems: 'center',
  },
  rowDate: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rowCalls: {
    color: '#666',
    fontSize: 14,
  },
  rowAmount: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rowSub: {
    color: '#666',
    fontSize: 12,
  },
});
