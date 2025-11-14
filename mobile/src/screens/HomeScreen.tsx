import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Furo Mobile</Text>
      <Button title="Balance" onPress={() => navigation.navigate('Balance')} />
      <View style={{ height: 8 }} />
      <Button title="Transactions" onPress={() => navigation.navigate('Transactions')} />
      <View style={{ height: 8 }} />
      <Button title="Report" onPress={() => navigation.navigate('Report')} />
      <View style={{ height: 8 }} />
      <Button title="Upload API" onPress={() => navigation.navigate('Upload')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 }
});
