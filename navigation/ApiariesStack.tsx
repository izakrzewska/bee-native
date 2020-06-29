import React from 'react';
import { MenuIcon } from '../components';
import { ApiariesScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { ApiariesStackParamsList, ApiariesStackProps } from './types';

const Stack = createStackNavigator<ApiariesStackParamsList>();

export const ApiariesStack: React.FC<ApiariesStackProps> = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Apiaries'
        component={ApiariesScreen}
        options={{
          title: 'Pasieki',
          headerLeft: () => <MenuIcon />,
        }}
      />
    </Stack.Navigator>
  );
};
