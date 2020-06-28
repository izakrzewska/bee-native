import React from 'react';
import { MenuIcon } from '../components';
import { NewApiaryScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NewApiaryStackParamsList, NewApiaryStackProps } from './types';

const Stack = createStackNavigator<NewApiaryStackParamsList>();

export const NewApiaryStack: React.FC<NewApiaryStackProps> = ({
  navigation,
}) => {
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
