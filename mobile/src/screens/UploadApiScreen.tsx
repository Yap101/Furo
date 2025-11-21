import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { apiPost } from '../api/client';

export default function UploadApiScreen() {
  const [name, setName] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!name || !endpoint || !price) {
      Alert.alert('Missing Fields', 'Please fill in all fields to continue.');
      return;
    }
    setLoading(true);
    try {
      const res = await apiPost('/api/providers/me/apis', { name, endpoint, price });
      if (!res.ok) {
        throw new Error(res.error || `Status ${res.status}`);
      }
      Alert.alert('Success', 'API uploaded successfully!');
      setName('');
      setEndpoint('');
      setPrice('');
    } catch (err: any) {
      Alert.alert('Upload Failed', err.message || 'Failed to upload API');
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Upload New API</Text>
        <Text style={styles.subtitle}>Monetize your API by listing it on the Furo marketplace.</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>API Name</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Weather Data Pro"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Endpoint URL</Text>
            <TextInput
              style={styles.input}
              placeholder="https://api.example.com/v1/data"
              value={endpoint}
              onChangeText={setEndpoint}
              autoCapitalize="none"
              keyboardType="url"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Price per Call (ETH)</Text>
            <TextInput
              style={styles.input}
              placeholder="0.0001"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={submit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Upload API</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 24 },
  title: { fontSize: 28, fontWeight: '700', color: '#333', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 32, lineHeight: 22 },
  form: { gap: 20 },
  inputGroup: { gap: 8 },
  label: { fontSize: 14, fontWeight: '600', color: '#444', marginLeft: 4 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: { opacity: 0.7 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
