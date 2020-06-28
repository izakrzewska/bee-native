import React from 'react';
import { ApiariesStack } from './ApiariesStack';
import { NewApiaryStack } from './NewApiaryStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApiariesDrawerParamsList } from './types';

const Drawer = createDrawerNavigator<ApiariesDrawerParamsList>();

export const ApiariesDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='ApiariesStack'
        options={{ title: 'Pasieki' }}
        component={ApiariesStack}
      />
      <Drawer.Screen
        name='NewApiaryStack'
        options={{ title: 'Nowa pasieka' }}
        component={NewApiaryStack}
      />
    </Drawer.Navigator>
  );
};
