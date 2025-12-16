import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';
import { useWallet } from '../wallet/WalletContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const GAP = 16;
const PADDING = 20;
const ITEM_WIDTH = (width - (PADDING * 2) - GAP) / 2;

export default function HomeScreen({ navigation }: any) {
  const { address } = useWallet();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>FURO</Text>
        <View style={styles.addressPill}>
          <Text style={styles.addressText}>
            {address ? `${address.substring(0, 6)}.....${address.substring(address.length - 5)}` : 'No Wallet'}
          </Text>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="lightning-bolt" size={16} color="#FFD166" />
          </View>
        </View>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        <DashboardCard
          title="Balance"
          icon="currency-usd"
          onPress={() => navigation.navigate('Balance')}
        />
        <DashboardCard
          title="Transaction"
          icon="chart-timeline-variant" // or 'pulse'
          onPress={() => navigation.navigate('Transactions')}
        />
        <DashboardCard
          title="Report"
          icon="chart-arc"
          onPress={() => navigation.navigate('Report')}
        />
        <DashboardCard
          title="Upload API"
          icon="plus"
          onPress={() => navigation.navigate('Upload')}
        />
      </View>
    </SafeAreaView>
  );
}

function DashboardCard({ title, icon, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={64} color="#FFF" style={{ marginBottom: 16 }} />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 40,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  addressPill: {
    flexDirection: 'row',
    alignItems: 'center', // No background for the text part in the image, strictly speaking?
    // Image 3 shows just text "0xdf..." and the Icon box to the right. 
    // Actually wait, Image 3 shows "0xdf...81e64" then a purple square with orange bolt.
  },
  addressText: {
    color: '#E0E0E0',
    fontSize: 16,
    marginRight: 10,
  },
  iconBox: {
    width: 32,
    height: 32,
    backgroundColor: '#2D2CBA', // Purple/Blue match
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: PADDING,
    justifyContent: 'space-between',
    gap: GAP, // Check React Native gap support (new versions have it). Using manual margin if needed, but gap is cleaner.
  },
  card: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.3, // Taller than wide, or square? Design looks portrait ratio.
    backgroundColor: '#1C1C1E', // Dark Grey
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3A3A3C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16, // Fallback for gap if needed, but gap handles it. 
    // Actually, gap might not be supported in older RN, let's play safe with marginBottom.
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
});
