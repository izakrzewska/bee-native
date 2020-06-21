import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Text } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';

export const WelcomeScreen = () => {
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
      <View style={styles.summary}>
        <Text>
          Liczba pasiek: <Text fontFamily='bold'>{apiaries.length}</Text>
        </Text>
        <Text>
          Liczba uli: <Text fontFamily='bold'>{getBeehivesNumber()}</Text>
        </Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  summary: {
    marginTop: 20,
  },
});
