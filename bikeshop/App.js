import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./screens/Login"
import Home from "./screens/Home"
import Cart from "./screens/Cart"

const Stack = createNativeStackNavigator()

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['/'],
        config: {
          screens: {
            Home: 'home',
            Cart: 'cart',
            Login: 'login',
            NoMatch: '*',
          }
        }
      }}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={() => (
            <Tabs.Navigator>
              <Tabs.Screen name="Home" component={Home} />
              <Tabs.Screen name="Cart" component={Cart} />
            </Tabs.Navigator>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
