import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout, ApiaryCard } from '../components';
import { RootState } from '../store/types';

export const ApiariesScreen = () => {
  const apiaries = useSelector(
    (state: RootState) => state.apiaries.apiariesList
  );

  const getBeehivesNumber = () => {
    let totalNumber = 0;
    apiaries.forEach((apiary) => {
      totalNumber += apiary.beehives.length;
    });
    return totalNumber;
  };

  return (
    <Layout>
      <View>
        <Text>Liczba pasiek: {apiaries.length}</Text>
        <Text>Liczba uli: {getBeehivesNumber()}</Text>
      </View>
      <FlatList
        data={apiaries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ApiaryCard apiary={item} />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({});
