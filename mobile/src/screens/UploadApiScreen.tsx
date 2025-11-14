import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { BASE_URL } from '../config';

export default function UploadApiScreen() {
  const [name, setName] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!name || !endpoint || !price) {
      Alert.alert('Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/providers/me/apis`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, endpoint, price })
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      Alert.alert('Uploaded', JSON.stringify(json?.data ?? {}));
      setName(''); setEndpoint(''); setPrice('');
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Failed to upload');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload New API</Text>
      <TextInput style={styles.input} placeholder="API Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Endpoint" value={endpoint} onChangeText={setEndpoint} />
      <TextInput style={styles.input} placeholder="Price (smallest unit)" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title={loading ? 'Uploading...' : 'Upload'} onPress={submit} disabled={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 8, marginBottom: 12 }
});
