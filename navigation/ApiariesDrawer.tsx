import React from 'react';
import { ApiariesStack } from './ApiariesStack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const ApiariesDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='ApiariesStack'
        options={{ title: 'Pasieki' }}
        component={ApiariesStack}
      />
    </Drawer.Navigator>
  );
};
