import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './navigation/BottomTabsNavigator';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
