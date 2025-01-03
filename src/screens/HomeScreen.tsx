import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Clock, Target, Users } from 'lucide-react';
import { styles } from '../styles/common';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>TimeCapsule</Text>
          <Text style={styles.subtitle}>Preserve your moments, connect with others</Text>
        </View>

        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statCard}>
            <Clock size={24} color="#6366f1" />
            <Text style={styles.statTitle}>Time Captured</Text>
            <Text style={styles.statValue}>2h 15m</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statCard}>
            <Target size={24} color="#6366f1" />
            <Text style={styles.statTitle}>Daily Goal</Text>
            <Text style={styles.statValue}>4h</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statCard}>
            <Users size={24} color="#6366f1" />
            <Text style={styles.statTitle}>Connected</Text>
            <Text style={styles.statValue}>24</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Games')}
          >
            <Text style={styles.actionButtonText}>Play Games</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Marketplace')}
          >
            <Text style={styles.actionButtonText}>Visit Marketplace</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};