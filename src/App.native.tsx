import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';

const Stack = createNativeStackNavigator();

// Native screen components
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TimeCapsule</Text>
      <Text style={styles.subtitle}>Preserve your moments, connect with others</Text>
    </View>
  );
};

const GamesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Games</Text>
    </View>
  );
};

const MarketplaceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const LoginScreen = () => {
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

const App = () => {
  const { user } = useAuth();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6366f1',
            },
            headerTintColor: '#fff',
          }}
        >
          {!user ? (
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ title: 'TimeCapsule' }}
              />
              <Stack.Screen 
                name="Games" 
                component={GamesScreen}
                options={{ title: 'Games' }}
              />
              <Stack.Screen 
                name="Marketplace" 
                component={MarketplaceScreen}
                options={{ title: 'Marketplace' }}
              />
              <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{ title: 'Profile' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;