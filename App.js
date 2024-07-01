import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import About from './components/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Aplikasi Daftar Teman" component={Home} />
        <Stack.Screen name="Detail" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
