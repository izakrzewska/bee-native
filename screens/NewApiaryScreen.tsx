import React from 'react';
import { View } from 'react-native';
import { AddApiaryForm } from '../components';
import { NewApiaryScreenProps } from '../navigation/types';

export const NewApiaryScreen: React.FC<NewApiaryScreenProps> = () => {
  return (
    <View>
      <AddApiaryForm />
    </View>
  );
};
