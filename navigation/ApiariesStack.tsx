import React from 'react';
import { MenuIcon } from '../components';
import { ApiariesScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const ApiariesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ApiariesScreen'
        component={ApiariesScreen}
        options={{
          title: 'Pasieki',
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};
