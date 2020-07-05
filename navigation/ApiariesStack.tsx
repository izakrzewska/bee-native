import React from 'react';
import { MenuIcon } from '../components';
import { ApiariesScreen, ApiaryScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { ApiariesStackParamsList, ApiariesStackProps } from './types';

const Stack = createStackNavigator<ApiariesStackParamsList>();

export const ApiariesStack: React.FC<ApiariesStackProps> = () => {
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
      <Stack.Screen
        name='Apiary'
        component={ApiaryScreen}
        options={({ route }) => {
          console.log(route);
          return {
            title: route.params.name,
          };
        }}
        // options={{
        //   title: 'Pasieka',
        // }}
      />
    </Stack.Navigator>
  );
};
