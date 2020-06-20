import React from 'react';
import { View, StatusBar as NativeStatusBar, Platform } from 'react-native';
import { colors } from '../../constants/colors';

export const StatusBar = () => (
  <View
    style={{
      backgroundColor: colors.main,
      height: Platform.OS === 'ios' ? 20 : NativeStatusBar.currentHeight,
    }}
  >
    <NativeStatusBar backgroundColor={colors.main} />
  </View>
);
