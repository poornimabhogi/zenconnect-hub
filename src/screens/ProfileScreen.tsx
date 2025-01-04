import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/contexts/AuthContext';

export const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statTitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});