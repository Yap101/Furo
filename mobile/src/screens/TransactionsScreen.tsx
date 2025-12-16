```
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native';
import { useWallet } from '../wallet/WalletContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateRangeFilter from '../components/DateRangeFilter';

export default function TransactionsScreen({ navigation }: any) {
    const { address } = useWallet();
    const [loading, setLoading] = useState(false);
    
    // Default range: Last 90 days
    const [startDate, setStartDate] = useState(new Date('2023-01-01'));
    const [endDate, setEndDate] = useState(new Date('2024-12-31'));

    const [filteredData, setFilteredData] = useState<any[]>([]);

    // Comprehensive Mock Data (2023 & 2024)
    const MOCK_TXS = [
        // 2024
        { id: '1', date: '2024-01-15', calls: '300 calls', amount: 0.00372, sub: 0.00013 },
        { id: '2', date: '2024-01-14', calls: '120 calls', amount: 0.00402, sub: 0.00011 },
        { id: '3', date: '2024-01-13', calls: '250 calls', amount: 0.03748, sub: 0.00004 },
        { id: '4', date: '2024-01-12', calls: '200 calls', amount: 0.00510, sub: 0.00013 },
        { id: '5', date: '2024-01-11', calls: '180 calls', amount: 0.00450, sub: 0.00016 },
        
        // 2023
        { id: '6', date: '2023-12-25', calls: '500 calls', amount: 0.01250, sub: 0.00040 },
        { id: '7', date: '2023-11-10', calls: '100 calls', amount: 0.00100, sub: 0.00003 },
        { id: '8', date: '2023-08-15', calls: '450 calls', amount: 0.12000, sub: 0.00400 },
        { id: '9', date: '2023-05-20', calls: '50 calls',  amount: 0.00050, sub: 0.00001 },
    ];

    useEffect(() => {
        filterData(startDate, endDate);
    }, [startDate, endDate]);

    const filterData = (start: Date, end: Date) => {
        setLoading(true);
        // Simulate API delay
        setTimeout(() => {
            const filtered = MOCK_TXS.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate >= start && itemDate <= end;
            });
            setFilteredData(filtered);
            setLoading(false);
        }, 500);
    };

    const handleDateApply = (start: Date, end: Date) => {
        setStartDate(start);
        setEndDate(end);
    };

    // Calculate totals dynamically
    const totalNet = filteredData.reduce((acc, item) => acc + item.amount, 0).toFixed(5);
    const totalPlatform = filteredData.reduce((acc, item) => acc + item.sub, 0).toFixed(5);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.row}>
                <View>
                    <Text style={styles.rowDate}>{item.date}</Text>
                    <Text style={styles.rowCalls}>{item.calls}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.rowAmount}>{item.amount.toFixed(5)} ETH</Text>
                    <Text style={styles.rowSub}>+{item.sub.toFixed(5)} ETH</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>{'< Home'}</Text>
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>FURO</Text>
                    <Text style={styles.headerWallet}>0xdf0B...81e64</Text> 
                    <View style={styles.boltIcon}>
                        <MaterialCommunityIcons name="lightning-bolt" size={16} color="#FFD166" />
                    </View>
                </View>
            </View>

            <Text style={styles.screenTitle}>Transactions</Text>
            <View style={styles.titleUnderline} />

            <View style={styles.content}>
                
                {/* Date Filter */}
                <DateRangeFilter startDate={startDate} endDate={endDate} onApply={handleDateApply} />

                {/* Summary */}
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryTitle}>Revenue Breakdown:</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Net (97%):</Text>
                        <Text style={styles.summaryValue}>{totalNet} ETH</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Platform (3%):</Text>
                        <Text style={styles.summaryValue}>{totalPlatform} ETH</Text>
                    </View>
                </View>

                {loading ? (
                    <ActivityIndicator color="#FFF" style={{ marginTop: 20 }} />
                ) : (
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        ListFooterComponent={<Text style={styles.footerText}>END</Text>}
                        ListEmptyComponent={<Text style={styles.emptyText}>No records found in range.</Text>}
                    />
                )}

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    backText: {
        color: '#FFF',
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '900',
        marginRight: 10,
    },
    headerWallet: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'monospace',
    },
    boltIcon: {
        backgroundColor: '#2D2CBA',
        borderRadius: 4,
        marginLeft: 6,
        padding: 2,
    },
    screenTitle: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    },
    titleUnderline: {
        height: 1,
        backgroundColor: '#555',
        width: '60%',
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 5,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    summaryContainer: {
        marginBottom: 20,
    },
    summaryTitle: {
        color: '#666',
        fontSize: 16,
        marginBottom: 4,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    summaryLabel: {
        color: '#666', // "Net (97%)" seems grey in image
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'monospace',
    },
    summaryValue: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'monospace',
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
        color: '#666', // grey for +0.00013 ETH
        fontSize: 12,
    },
    footerText: {
        color: '#444',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    emptyText: {
        color: '#666',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16
    }
});
```
