import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { ethers } from 'ethers';
import { useWallet } from '../wallet/WalletContext';
// import { fetchTransactionHistory } from '../wallet/utils'; // Replaced by Prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
            // Fetch from Prisma
            // Note: In a real mobile app, this would be an API call. 
            // Direct DB access via Prisma Client works in Node.js environments (e.g. testing, local scripts), 
            // but not directly in Expo Go/Native. Assuming this is for a specific local setup or prototype.
            const history = await prisma.purchasedApi.findMany({
                where: {
                    OR: [
                        { developerAddress: address },
                        { providerId: address } // Assuming providerId might be an address or mapped to one
                    ]
                },
                include: {
                    Provider: true,
                    Api: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            const formattedHistory = history.map(tx => ({
                hash: tx.transactionHash,
                from: tx.developerAddress,
                to: tx.Provider.walletAddress, // Using Provider's wallet address as 'to'
                value: tx.paymentAmount,
                timeStamp: Math.floor(new Date(tx.createdAt).getTime() / 1000),
                blockNumber: 1, // Fake block number for "Confirmed" status
                status: tx.status
            }));

            setTransactions(formattedHistory);
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
