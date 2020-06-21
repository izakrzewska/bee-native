import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout, ApiaryCard } from '../components';
import { RootState } from '../store/types';

export const ApiariesScreen = () => {
  const apiaries = useSelector(
    (state: RootState) => state.apiaries.apiariesList
  );

  return (
    <Layout>
      <FlatList
        data={apiaries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ApiaryCard apiary={item} />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({});
