import React from 'react';
import { ApiariesScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const ApiariesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ApiariesScreen'
        component={ApiariesScreen}
        options={{ title: 'Twoja pasieka' }}
      />
    </Stack.Navigator>
  );
};
