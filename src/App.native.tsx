import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from '@/contexts/AuthContext';
import { RootStackParamList } from './types/navigation';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { GamesScreen } from './screens/GamesScreen';
import { MarketplaceScreen } from './screens/MarketplaceScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { navigationStyles } from './styles/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const { user } = useAuth();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={navigationStyles}>
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

export default App;