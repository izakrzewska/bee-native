import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from '../StatusBar/StatusBar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
