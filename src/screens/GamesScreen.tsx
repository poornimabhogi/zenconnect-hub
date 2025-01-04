import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const GamesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Games</Text>
        </View>

        <View style={styles.gamesGrid}>
          <TouchableOpacity style={styles.gameCard}>
            <Text style={styles.gameTitle}>Memory Match</Text>
            <Text style={styles.gameDescription}>
              Test your memory with this classic card matching game
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gameCard}>
            <Text style={styles.gameTitle}>Time Quiz</Text>
            <Text style={styles.gameDescription}>
              Challenge your knowledge about time and history
            </Text>
          </TouchableOpacity>
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
  gamesGrid: {
    padding: 20,
    gap: 16,
  },
  gameCard: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  gameDescription: {
    fontSize: 14,
    color: '#666',
  },
});