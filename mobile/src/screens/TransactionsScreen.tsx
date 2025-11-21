import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { apiGet } from '../api/client';

export default function TransactionsScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = useCallback(async () => {
    setError(null);
    try {
      const res = await apiGet('/api/providers/me/transactions');
      if (!res.ok) {
        setError(res.error || 'Failed to fetch transactions');
      } else {
        setTransactions(res.data || []);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch transactions');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchTransactions();
  };

  const renderItem = ({ item }: { item: any }) => {
    // Attempt to extract buyer and API info. Adjust keys based on actual API response.
    const buyer = item.consumer?.username || item.consumer?.address || item.consumerAddress || 'Unknown Buyer';
    const apiName = item.api?.name || item.apiName || 'Unknown API';
    const amount = item.amount ? `${parseFloat(item.amount).toFixed(6)} ETH` : '0 ETH';
    const date = item.createdAt ? new Date(item.createdAt).toLocaleString() : 'Unknown Date';
    const status = item.status || 'Completed';

    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.apiName}>{apiName}</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
        <View style={{ height: 8 }} />
        <Text style={styles.label}>Buyer: <Text style={styles.value}>{buyer}</Text></Text>
        <Text style={styles.label}>Date: <Text style={styles.value}>{date}</Text></Text>
        <View style={{ height: 8 }} />
        <View style={styles.footer}>
          <Text style={[styles.status, { color: status === 'Failed' ? 'red' : 'green' }]}>{status}</Text>
          <Text style={styles.hash} numberOfLines={1} ellipsizeMode="middle">{item.transactionHash}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      {loading && !refreshing ? (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => String(item?.id ?? item?.transactionHash ?? index)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          ListEmptyComponent={<Text style={styles.empty}>No transactions found.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16, paddingTop: 20 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 16, color: '#333' },
  listContent: { paddingBottom: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  apiName: { fontSize: 18, fontWeight: '600', color: '#000' },
  amount: { fontSize: 16, fontWeight: '700', color: '#2e7d32' },
  label: { fontSize: 14, color: '#666', marginTop: 4 },
  value: { color: '#333', fontWeight: '500' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: '#eee' },
  status: { fontSize: 12, fontWeight: '600', textTransform: 'uppercase' },
  hash: { fontSize: 12, color: '#999', maxWidth: 150 },
  error: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 20 },
  empty: { textAlign: 'center', color: '#888', marginTop: 40, fontSize: 16 },
});
