import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { ethers } from 'ethers';
import { useWallet } from '../wallet/WalletContext';
import { fetchTransactionHistory } from '../wallet/utils';

export default function TransactionsScreen() {
    const { address, chainId } = useWallet();
    const [transactions, setTransactions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchTransactions() {
        if (!address || !chainId) {
            setError("Wallet not connected");
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const history = await fetchTransactionHistory(address, chainId);
            setTransactions(history);
        } catch (e: any) {
            setError(e.message || "Failed to fetch transactions");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (address && chainId) {
            fetchTransactions();
        }
    }, [address, chainId]);

    const renderItem = ({ item }: { item: any }) => {
        const date = item.blockNumber ? "Confirmed" : "Pending";
        const value = item.value ? ethers.formatEther(item.value) : "0";

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
                keyExtractor={(item) => item.hash}
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
