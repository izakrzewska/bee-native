import React, { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

interface ButtonProps {
  onPress: () => void;
  type: 'add';
}

export const Button: React.FC<ButtonProps> = ({ onPress, type }) => {
  const getIcon = (): ReactNode => {
    switch (type) {
      case 'add': {
        return <Ionicons name='ios-add' size={36} />;
      }
    }
  };
  return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
      <View>
        <Text>{getIcon()}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.main,
  },
});
