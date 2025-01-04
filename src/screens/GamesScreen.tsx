import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles/common';

export const GamesScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Games</Text>
        </View>

        <View style={styles.gamesGrid}>
          <View style={styles.gameCard}>
            <Text style={styles.gameTitle}>Memory Match</Text>
            <Text style={styles.gameDescription}>Test your memory with this classic card matching game</Text>
          </View>

          <View style={styles.gameCard}>
            <Text style={styles.gameTitle}>Time Quiz</Text>
            <Text style={styles.gameDescription}>Challenge your knowledge about time and history</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};