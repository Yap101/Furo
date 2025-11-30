import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { apiGet } from '../api/client';

export default function TransactionsScreen() {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchTransactions() {
        setLoading(true);
        setError(null);
        try {
            // Assuming endpoint, can be adjusted later
            const res = await apiGet('/api/transactions');
            if (res.ok) {
                setTransactions(Array.isArray(res.data) ? res.data : []);
            } else {
                setError(res.error || 'Failed to fetch transactions');
            }
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions</Text>
            {loading ? <ActivityIndicator /> : null}
            {error ? <Text style={styles.error}>{error}</Text> : null}

            <FlatList
                data={transactions}
                keyExtractor={(item, index) => item.id || String(index)}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{JSON.stringify(item)}</Text>
                    </View>
                )}
                ListEmptyComponent={!loading ? <Text>No transactions found</Text> : null}
            />
            <Button title="Refresh" onPress={fetchTransactions} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, marginBottom: 12, fontWeight: 'bold' },
    error: { color: 'red', marginBottom: 12 },
    item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ccc' }
});
