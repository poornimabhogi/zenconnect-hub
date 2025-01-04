import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../styles/common';

export const MarketplaceScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
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
      </View>
    </ScrollView>
  );
};