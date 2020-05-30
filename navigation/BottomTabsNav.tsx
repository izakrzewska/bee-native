import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ApiariesScreen from '../screens/ApiariesScreen';
import CalendarScreen from '../screens/CalendarScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => {
  return (
    <Tab.Navigator
      initialRouteName='WelcomeScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName = 'ios-home';

          if (route.name === 'ApiariesScreen') {
            iconName = 'ios-bug';
          } else if (route.name === 'CalendarScreen') {
            iconName = 'ios-calendar';
          }

          return <Ionicons name={iconName} size={24} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#FFBF00',
      }}
    >
      <Tab.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Tab.Screen name='ApiariesScreen' component={ApiariesScreen} />
      <Tab.Screen name='CalendarScreen' component={CalendarScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNav;
