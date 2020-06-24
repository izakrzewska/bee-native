import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MenuIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.toggleDrawer()}
    >
      <Ionicons name='ios-menu' size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});
