import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { styles } from '../styles/common';

export const LoginScreen = () => {
  const { loginWithGoogle, loginAsGuest } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to TimeCapsule</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={loginWithGoogle}
        >
          <Text style={styles.actionButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={loginAsGuest}
        >
          <Text style={styles.actionButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};