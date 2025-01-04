import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MarketplaceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Marketplace</Text>
        </View>

        <View style={styles.productsGrid}>
          <View style={styles.productCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Digital Time Capsule</Text>
            <Text style={styles.productPrice}>1000 ZenCoins</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  productsGrid: {
    padding: 20,
  },
  productCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 12,
  },
  productPrice: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '600',
    padding: 12,
    paddingTop: 0,
  },
});