import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNav from './navigation/BottomTabsNav';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Twoja pasieka' component={BottomTabsNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
