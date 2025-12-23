import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useWallet } from '../wallet/WalletContext';
import { PieChart } from 'react-native-gifted-charts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateRangeFilter from '../components/DateRangeFilter';
import { apiGet } from '../api/client';

export default function ReportScreen({ navigation }: any) {
  const { address } = useWallet();
  const [startDate, setStartDate] = useState(new Date('2023-01-01'));
  const [endDate, setEndDate] = useState(new Date('2024-12-31'));
  const [filteredSales, setFilteredSales] = useState<any[]>([]);


  // Mock Data for Design (Image 2)
  const pieData = [
    { value: 97, color: '#222222', text: '97%' },
    { value: 3, color: '#E0E0E0', text: '3%' },
  ];

  // Expanded Mock Sales
  const MOCK_SALES = [
    // 2024
    { id: '1', date: '2024-01-15', calls: '300 calls', amount: 0.00372, sub: 0.00013 },
    { id: '2', date: '2024-01-14', calls: '120 calls', amount: 0.00402, sub: 0.00011 },
    { id: '3', date: '2024-01-13', calls: '250 calls', amount: 0.03748, sub: 0.00004 },
    // 2023
    { id: '4', date: '2023-11-20', calls: '200 calls', amount: 0.00510, sub: 0.00013 },
    { id: '5', date: '2023-10-15', calls: '180 calls', amount: 0.00450, sub: 0.00016 },
    { id: '6', date: '2023-06-01', calls: '1000 calls', amount: 0.1500, sub: 0.0050 },
  ];

  // Calculate summary from MOCK_SALES
  const calculatedSummary = MOCK_SALES.reduce((acc, item) => {
    const calls = parseInt(item.calls.replace(' calls', '')) || 0;
    return {
      totalCalls: acc.totalCalls + calls,
      netEarning: acc.netEarning + item.amount,
      platformFee: acc.platformFee + item.sub
    };
  }, { totalCalls: 0, netEarning: 0, platformFee: 0 });

  const [summary, setSummary] = useState({
    totalApis: 0,
    totalCalls: 0,
    netEarning: '0.0000',
    platformFee: '0.0000',
    averageRating: 4.8
  });

  const fetchReport = async () => {
    if (!address) return;
    try {
      const res = await apiGet(`/api/providers/me/report?address=${address}`);
      if (res && res.data && res.data.summary) {
        setSummary({
          ...res.data.summary,
          totalApis: res.data.summary.totalApis ?? 0
        });
      }
    } catch (error) {
      console.error('Failed to fetch report:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchReport();
    }, [address])
  );

  useEffect(() => {
    const filtered = MOCK_SALES.filter(item => {
      const d = new Date(item.date);
      return d >= startDate && d <= endDate;
    });
    setFilteredSales(filtered);
  }, [startDate, endDate]);

  const totalCallsFiltered = filteredSales.reduce((acc, item) => {
    const calls = parseInt(item.calls.replace(' calls', '')) || 0;
    return acc + calls;
  }, 0);

  const totalNet = filteredSales.reduce((acc, item) => acc + item.amount, 0).toFixed(5);
  const totalFees = filteredSales.reduce((acc, item) => acc + item.sub, 0).toFixed(5);

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

      <Text style={styles.screenTitle}>Report</Text>
      <View style={styles.titleUnderline} />

      <ScrollView contentContainerStyle={styles.content}>

        {/* Overview Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Overview</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>{summary.totalApis}</Text>
              <Text style={styles.metricLabel}>Total API</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>{totalCallsFiltered}</Text>
              <Text style={styles.metricLabel}>Total Calls</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>{summary.averageRating}</Text>
              <Text style={styles.metricLabel}>Avg Rating</Text>
            </View>
          </View>
          <View style={[styles.metricsGrid, { marginTop: 16 }]}>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>{totalNet} ETH</Text>
              <Text style={styles.metricLabel}>Net Earning</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>{totalFees} ETH</Text>
              <Text style={styles.metricLabel}>Platform Fee</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Revenue</Text>

        {/* Date Filter */}
        <DateRangeFilter startDate={startDate} endDate={endDate} onApply={(s, e) => { setStartDate(s); setEndDate(e); }} />

        {/* Pie Chart Section */}
        <View style={styles.chartContainer}>
          <PieChart
            data={pieData}
            donut
            radius={80}
            innerRadius={60} // Donut thickness
            centerLabelComponent={() => (
              <View /> // Empty center
            )}
          />
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#333' }]} />
            <Text style={styles.legendText}>Net Earning : {'       '}97%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#EEE' }]} />
            <Text style={styles.legendText}>Platform Fees : {'  '}3%</Text>
          </View>
        </View>

        {/* Transaction History Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Revenue Breakdown:</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Net (97%):</Text>
            <Text style={styles.summaryValue}>{totalNet} ETH</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Platform (3%):</Text>
            <Text style={styles.summaryValue}>{totalFees} ETH</Text>
          </View>

          <View style={styles.list}>
            {filteredSales.map((tx, i) => (
              <View key={i} style={styles.row}>
                <View>
                  <Text style={styles.rowDate}>{tx.date}</Text>
                  <Text style={styles.rowCalls}>{tx.calls}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.rowAmount}>{tx.amount.toFixed(5)} ETH</Text>
                  <Text style={styles.rowSub}>+{tx.sub.toFixed(5)} ETH</Text>
                </View>
              </View>
            ))}
            {filteredSales.length === 0 && <Text style={{ color: '#666', textAlign: 'center' }}>No sales in this period.</Text>}
          </View>
        </View>

      </ScrollView>

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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
  yearButton: {
    width: 100,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  yearText: {
    color: '#FFF',
    fontSize: 16,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
    // border?
  },
  legendText: {
    color: '#FFF',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardTitle: {
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
    color: '#666',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  summaryValue: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  list: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  metricLabel: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
});
