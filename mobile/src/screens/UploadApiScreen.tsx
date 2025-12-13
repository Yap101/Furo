import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { apiPost } from '../api/client';

const ETH_TO_MYR_RATE = 12720;

export default function UploadApiScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [price, setPrice] = useState('');
  const [isActivate, setIsActivate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const categories = ['Data', 'Finance', 'Utility', 'AI/ML', 'Social', 'Other'];

  // Calculate MYR price
  const myrPrice = price && !isNaN(parseFloat(price))
    ? (parseFloat(price) * ETH_TO_MYR_RATE).toFixed(2)
    : '0.00';

  async function submit() {
    if (!name || !endpoint || !price || !category) {
      Alert.alert('Missing Fields', 'Please fill in all required fields (Name, Endpoint, Price, Category).');
      return;
    }
    setLoading(true);
    try {
      const res = await apiPost('/api/providers/me/apis', {
        name,
        description,
        category,
        endpoint,
        price,
        currency: 'ETH',
        isActive: isActivate
      });

      if (!res.ok) {
        throw new Error(res.error || `Status ${res.status}`);
      }
      Alert.alert('Success', 'API uploaded successfully!');
      // Reset form
      setName('');
      setDescription('');
      setCategory('');
      setEndpoint('');
      setPrice('');
      setIsActivate(true);
    } catch (err: any) {
      Alert.alert('Upload Failed', err.message || 'Failed to upload API');
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* API Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>API Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Weather Data API"
            placeholderTextColor="#666"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Description */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Brief description of your API"
            placeholderTextColor="#666"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>

        {/* Category */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity style={styles.input} onPress={() => setModalVisible(true)}>
            <Text style={{ color: category ? '#eee' : '#666', fontSize: 16 }}>
              {category || 'Select a category'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Endpoint */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>API Endpoint</Text>
          <TextInput
            style={styles.input}
            placeholder="https://jsonplaceholder.typicode.com/todos/1 (default)"
            placeholderTextColor="#666"
            value={endpoint}
            onChangeText={setEndpoint}
            autoCapitalize="none"
            keyboardType="url"
          />
          <Text style={styles.helperText}>Leave empty to use default endpoint that returns dummy JSON data</Text>
        </View>

        {/* Price & Currency */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
            <Text style={styles.label}>Price per Call</Text>
            <TextInput
              style={styles.input}
              placeholder="0.001"
              placeholderTextColor="#666"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
            {price ? <Text style={styles.conversionText}>≈ {myrPrice} MYR</Text> : null}
          </View>
          <View style={[styles.inputGroup, { width: 100 }]}>
            <Text style={styles.label}>Currency</Text>
            <View style={[styles.input, styles.disabledInput]}>
              <Text style={{ color: '#eee', fontSize: 16 }}>ETH</Text>
            </View>
            <Text style={styles.helperText}>Only ETH supported</Text>
          </View>
        </View>

        {/* Activation Checkbox */}
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsActivate(!isActivate)}>
          <View style={[styles.checkbox, isActivate && styles.checkboxChecked]}>
            {isActivate && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>
            Activate API immediately (you can change this later in your dashboard)
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => Alert.alert('Cancelled')}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.submitButton, loading && styles.buttonDisabled]}
            onPress={submit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={styles.submitButtonText}>Add API to Marketplace</Text>
            )}
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Category Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Category</Text>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={styles.modalItem}
                  onPress={() => {
                    setCategory(cat);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' }, // Dark background
  scrollContent: { padding: 20 },

  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '700', color: '#eee', marginBottom: 8 },
  input: {
    backgroundColor: '#0a0a0a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    color: '#eee',
  },
  textArea: {
    height: 100,
  },
  disabledInput: {
    backgroundColor: '#222',
    justifyContent: 'center',
  },
  helperText: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
  conversionText: {
    fontSize: 12,
    color: '#4CAF50', // Green for money
    marginTop: 6,
    fontWeight: '600',
  },

  row: { flexDirection: 'row' },

  checkboxContainer: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    color: '#eee',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },

  buttonRow: { flexDirection: 'row', gap: 12 },
  cancelButton: {
    flex: 1,
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444'
  },
  cancelButtonText: { color: '#eee', fontWeight: '600', fontSize: 16 },
  submitButton: {
    flex: 1.5,
    backgroundColor: '#eee', // Light button for contrast
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: { color: '#000', fontWeight: '700', fontSize: 16 },
  buttonDisabled: { opacity: 0.7 },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalItemText: {
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
  },
});
