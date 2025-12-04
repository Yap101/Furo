import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { ethers } from 'ethers';
import { useWallet } from '../wallet/WalletContext';
import { apiGet } from '../api/client';

export default function TransactionsScreen() {
    const { address } = useWallet();
    const [transactions, setTransactions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchTransactions() {
        if (!address) {
            setError("Wallet not connected");
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const res = await apiGet(`/api/transactions?address=${address}`);

            if (!res.ok) {
                throw new Error(res.error || "Failed to fetch transactions");
            }

            setTransactions(res.data);
        } catch (e: any) {
            console.error(e);
            setError(e.message || "Failed to fetch transactions");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (address) {
            fetchTransactions();
        }
    }, [address]);

    const renderItem = ({ item }: { item: any }) => {
        const date = item.blockNumber ? "Confirmed" : "Pending";
        const value = item.value ? item.value : "0"; // Already formatted as string in seed/DB?

        return (
            <View style={styles.item}>
                <View style={styles.row}>
                    <Text style={styles.hash} numberOfLines={1}>{item.hash}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>{item.from.toLowerCase() === address?.toLowerCase() ? "Sent" : "Received"}</Text>
                    <Text style={styles.value}>{value} ETH</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.date}>{new Date(item.timeStamp * 1000).toLocaleString()}</Text>
                    <Text style={[styles.date, { color: item.status === 'ACTIVE' ? 'green' : 'red' }]}>{item.status}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions</Text>
            {!address && <Text style={styles.error}>Please connect your wallet first</Text>}

            {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            {error ? <Text style={styles.error}>{error}</Text> : null}

            <FlatList
                data={transactions}
                keyExtractor={(item, index) => item.hash ? `${item.hash}-${index}` : `tx-${index}`}
                renderItem={renderItem}
                ListEmptyComponent={!loading && address ? <Text style={styles.empty}>No transactions found</Text> : null}
                refreshing={loading}
                onRefresh={fetchTransactions}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
    error: { color: 'red', marginBottom: 12, textAlign: 'center' },
    empty: { textAlign: 'center', marginTop: 20, color: '#666' },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 8
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
    },
    hash: { flex: 1, fontSize: 14, color: '#333', marginRight: 10 },
    date: { fontSize: 12, color: '#888' },
    label: { fontSize: 14, fontWeight: '600', color: '#555' },
    value: { fontSize: 14, fontWeight: 'bold', color: '#000' }
});
