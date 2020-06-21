import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { Apiary } from '../../store/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface ApiaryCardProps {
  apiary: Apiary;
}

export const ApiaryCard: React.FC<ApiaryCardProps> = ({ apiary }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {apiary.name}, {apiary.beehives.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 30,
    backgroundColor: colors.white,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontFamily: 'montserrat-semibold',
    fontSize: 20,
  },
});
