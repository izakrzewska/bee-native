import React from 'react';
import { MenuIcon } from '../components';
import { NewApiaryScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const NewApiaryStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='NewApiary'
        component={NewApiaryScreen}
        options={{
          title: 'Nowa pasieka',
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};
