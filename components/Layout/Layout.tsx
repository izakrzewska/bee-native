import React from 'react';
import { View } from 'react-native';
import { StatusBar } from '../StatusBar/StatusBar';

export const Layout = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      {children}
    </View>
  );
};
