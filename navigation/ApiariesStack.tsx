import React from 'react';
import { Text } from '../components';
import { ApiariesScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export const ApiariesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ApiariesScreen'
        component={ApiariesScreen}
        options={{
          title: 'Pasieki',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Text>Nav</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
