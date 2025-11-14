import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { BASE_URL } from '../config';

export default function BalanceScreen() {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBalance();
  }, []);

  async function fetchBalance() {
    setLoading(true);
    setError(null);
    try {
      // Example API: GET /api/providers/me/balance or similar - replace with your endpoint
      const res = await fetch(`${BASE_URL}/api/providers/me/balance`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      // Expect json { success: true, data: { balance: '123' }}
      setBalance(json?.data?.balance?.toString() ?? '0');
    } catch (err: any) {
      setError(err.message || 'Failed to fetch balance');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balance</Text>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text style={styles.balance}>{balance} (in smallest unit)</Text>
      )}
      <View style={{ height: 12 }} />
      <Button title="Refresh" onPress={fetchBalance} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, marginTop: 20 },
  balance: { fontSize: 28, marginTop: 12, fontWeight: '600' },
  error: { color: 'red', marginTop: 12 }
});
