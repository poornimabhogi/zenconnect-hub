import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { styles } from '../styles/common';

export const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: user?.avatar || 'https://via.placeholder.com/100' }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>{user?.name || 'Guest User'}</Text>
          <Text style={styles.profileEmail}>{user?.email || ''}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Time Capsules</Text>
            <Text style={styles.statValue}>156</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Days Active</Text>
            <Text style={styles.statValue}>365</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};