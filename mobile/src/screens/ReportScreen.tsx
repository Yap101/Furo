import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { BASE_URL } from '../config';

export default function ReportScreen() {
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReport();
  }, []);

  async function fetchReport() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/api/providers/me/report?period=30`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      setReport(json?.data ?? null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch report');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales Report</Text>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <View>
          <Text>Total Revenue: {report?.revenue?.total}</Text>
          <Text>Total Calls: {report?.performance?.totalRequests}</Text>
          <Text>Average Response Time: {report?.performance?.averageResponseTime} ms</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 12 },
  error: { color: 'red' }
});
