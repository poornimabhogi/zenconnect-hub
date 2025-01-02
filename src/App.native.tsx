import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { Clock, Target, Users } from 'lucide-react';

const Stack = createNativeStackNavigator();

// Native screen components
const HomeScreen = ({ navigation }) => {
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
      <NavigationContainer id="navigation">
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
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statTitle: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 8,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  actionsContainer: {
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
