import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/common';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Games'>;

export const GamesScreen = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Games</Text>
          <Text style={styles.subtitle}>Play and earn rewards</Text>
        </View>

        <View style={styles.gamesGrid}>
          <TouchableOpacity style={styles.gameCard}>
            <Text style={styles.gameTitle}>2048</Text>
            <Text style={styles.gameDescription}>
              Join the numbers and get to the 2048 tile!
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gameCard}>
            <Text style={styles.gameTitle}>Memory Match</Text>
            <Text style={styles.gameDescription}>
              Test your memory by matching pairs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};