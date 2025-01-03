import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/common';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Marketplace'>;

export const MarketplaceScreen = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Marketplace</Text>
          <Text style={styles.subtitle}>Browse and purchase items</Text>
        </View>

        <View style={styles.productsGrid}>
          <TouchableOpacity style={styles.productCard}>
            <Image 
              source={{ uri: 'https://placeholder.com/150' }}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Premium Theme</Text>
            <Text style={styles.productPrice}>$9.99</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productCard}>
            <Image 
              source={{ uri: 'https://placeholder.com/150' }}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Avatar Pack</Text>
            <Text style={styles.productPrice}>$4.99</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};