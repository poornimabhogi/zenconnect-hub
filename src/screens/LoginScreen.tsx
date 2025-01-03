import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { styles } from '../styles/common';

export const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => login('test@example.com', 'password')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};