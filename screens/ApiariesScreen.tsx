import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout } from '../components';
import { RootState } from '../store/types';

export const ApiariesScreen = () => {
  const apiaries = useSelector(
    (state: RootState) => state.apiaries.apiariesList
  );

  return (
    <Layout>
      <Text>Apiaries</Text>
    </Layout>
  );
};
