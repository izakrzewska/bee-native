import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './navigation/BottomTabsNavigator';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import store from './store';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
