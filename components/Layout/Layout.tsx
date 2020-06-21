import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from '../StatusBar/StatusBar';

export const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.layout}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: 20,
  },
});
