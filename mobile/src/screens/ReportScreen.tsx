import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { apiGet } from '../api/client';

export default function ReportScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [report, setReport] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchReport = useCallback(async () => {
    setError(null);
    try {
      const res = await apiGet('/api/providers/me/report?period=30');
      if (!res.ok) {
        setError(res.error || 'Failed to fetch report');
      } else {
        setReport(res.data || null);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch report');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchReport();
  }, [fetchReport]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchReport();
  };

  const StatCard = ({ title, value, unit }: { title: string; value: string | number; unit?: string }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>
        {value}
        {unit ? <Text style={styles.unit}> {unit}</Text> : null}
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.title}>Sales Report</Text>
      <Text style={styles.subtitle}>Last 30 Days</Text>

      {loading && !refreshing ? (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <View style={styles.grid}>
            <StatCard
              title="Total Revenue"
              value={report?.revenue?.total || '0'}
              unit="ETH"
            />
            <StatCard
              title="Total Calls"
              value={report?.performance?.totalRequests || '0'}
            />
            <StatCard
              title="Avg Response Time"
              value={report?.performance?.averageResponseTime || '0'}
              unit="ms"
            />
            <StatCard
              title="Success Rate"
              value={report?.performance?.successRate ? `${report.performance.successRate}%` : 'N/A'}
            />
          </View>

          <Text style={[styles.subtitle, { marginTop: 32 }]}>Purchases per API</Text>
          {report?.purchasesByApi && report.purchasesByApi.length > 0 ? (
            <View style={styles.list}>
              {report.purchasesByApi.map((item: any, index: number) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.itemName}>{item.apiName}</Text>
                  <Text style={styles.itemValue}>{item.count} users</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>No purchase data available.</Text>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20, marginTop: 4 },
  grid: { gap: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontSize: 14, color: '#888', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  cardValue: { fontSize: 32, fontWeight: '700', color: '#000', marginTop: 8 },
  unit: { fontSize: 16, color: '#666', fontWeight: '500' },
  error: { color: 'red', fontSize: 16, textAlign: 'center', marginTop: 20 },
  list: { backgroundColor: '#fff', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  itemName: { fontSize: 16, color: '#333', fontWeight: '500' },
  itemValue: { fontSize: 16, color: '#000', fontWeight: '700' },
  emptyText: { textAlign: 'center', color: '#888', marginTop: 10, fontSize: 14 },
});
