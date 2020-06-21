import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { CalendarScreen, WelcomeScreen } from '../screens';
import { colors } from '../constants/colors';
import { ApiariesStack } from './ApiariesStack';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='WelcomeScreen'
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: colors.main,
      }}
    >
      <Tab.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{ tabBarIcon: () => <Ionicons name='ios-home' size={24} /> }}
      />
      <Tab.Screen
        name='ApiariesStack'
        component={ApiariesStack}
        options={{ tabBarIcon: () => <Ionicons name='ios-bug' size={24} /> }}
      />
      <Tab.Screen
        name='CalendarScreen'
        component={CalendarScreen}
        options={{
          tabBarIcon: () => <Ionicons name='ios-calendar' size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
