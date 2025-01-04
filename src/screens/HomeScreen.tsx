import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/common';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>TimeCapsule</Text>
          <Text style={styles.subtitle}>Preserve your moments, connect with others, and build your digital legacy</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Time Captured</Text>
            <Text style={styles.statValue}>2h 15m</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Daily Goal</Text>
            <Text style={styles.statValue}>4h</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Connected</Text>
            <Text style={styles.statValue}>24</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};