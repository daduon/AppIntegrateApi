/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/home/Home';
import LoginScreen from './src/screens/auth/Login';
import SmartPhoneScreen from './src/screens/product/Smartphone';
import PlacetripScreen from './src/screens/home/Placetrip';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
        },
        style: {
          shadowColor: '#dcdcdc',
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 8,
          shadowOffset: {
            width: 0,
            height: 4
          }
        },
      }}
    >
      <Tab.Screen
        name="Phone"
        component={SmartPhoneScreen}
        options={{
          tabBarLabel: 'Phone',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PlaceTrip"
        component={PlacetripScreen}
        options={{
          tabBarLabel: 'Place Trip',
          tabBarIcon: ({ color, size }) => (
            <Icon name="location" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Product"
            component={AppTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;
