import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { apiPost } from '../api/client';

const APIS_STORAGE_KEY = '@furo_uploaded_apis';

export default function UploadApiScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [price, setPrice] = useState('');
  const [isActivate, setIsActivate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const categories = ['Data', 'Finance', 'Utility', 'AI/ML', 'Social', 'Other'];

  async function submit() {
    if (!name || !endpoint || !price || !category) {
      Alert.alert('Missing Fields', 'Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const newApi = {
        name,
        description: description || '',
        category,
        endpoint,
        price,
        currency: 'ETH',
        isActive: isActivate
      };

      const res = await apiPost('/api/providers/me/apis', newApi);

      if (!res.ok) {
        throw new Error(res.error || 'Failed to upload API');
      }

      Alert.alert('Success', `API "${name}" uploaded successfully!`);
      navigation.goBack();
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Failed to save');
    } finally {
      setLoading(false);
    }
  }

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

      <Text style={styles.screenTitle}>Upload API</Text>
      <View style={styles.titleUnderline} />

      <ScrollView contentContainerStyle={styles.content}>

        {/* Form Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>API Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Weather Data"
            placeholderTextColor="#555"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Brief Desc"
            placeholderTextColor="#555"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.selectButton}>
            <Text style={[styles.selectText, !category && { color: '#555' }]}>
              {category || 'Select'}
            </Text>
            <MaterialCommunityIcons name="chevron-down" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>API Name</Text>
          {/* Design says 'API Name' but placeholder is URL, likely Endpoint */}
          <TextInput
            style={styles.input}
            placeholder="https://api.exampl..."
            placeholderTextColor="#555"
            value={endpoint}
            onChangeText={setEndpoint}
            autoCapitalize="none"
            keyboardType="url"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price per Call</Text>
          <TextInput
            style={styles.input}
            placeholder="0.001"
            placeholderTextColor="#555"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          {price && !isNaN(parseFloat(price)) && (
            <Text style={styles.conversionText}>
              ≈ MYR {(parseFloat(price) * 16500).toFixed(2)}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Currency</Text>
          <View style={styles.selectButton}>
            <Text style={styles.selectText}>ETH</Text>
            <MaterialCommunityIcons name="chevron-down" size={24} color="#FFF" />
          </View>
        </View>

        {/* Checkbox */}
        <TouchableOpacity style={styles.checkboxRow} onPress={() => setIsActivate(!isActivate)}>
          <View style={[styles.checkbox, isActivate && styles.checked]}>
            {isActivate && <MaterialCommunityIcons name="check" size={16} color="#FFF" />}
          </View>
          <Text style={styles.checkboxText}>
            Activate API immediately{'\n'}
            (you can change this{'\n'}
            later in your dashboard)
          </Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={submit} disabled={loading}>
            {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.uploadText}>Upload API</Text>}
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Category Modal */}
      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {categories.map((cat, i) => (
                <TouchableOpacity key={i} style={styles.modalItem} onPress={() => { setCategory(cat); setModalVisible(false); }}>
                  <Text style={styles.modalText}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
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
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 8,
    fontFamily: 'monospace', // Similar to design
  },
  input: {
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 16,
    padding: 16,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  selectButton: {
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: '#35354F', // Purplish grey from design
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#4F46E5',
  },
  checkboxText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelText: {
    color: '#AAA',
    fontSize: 18,
    fontFamily: 'monospace',
  },
  uploadButton: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  uploadText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#222',
    width: '80%',
    borderRadius: 12,
    padding: 20,
  },
  modalItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  modalText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  conversionText: {
    color: '#4ade80',
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'monospace',
  },
});
