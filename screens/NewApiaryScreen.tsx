import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Input, Text } from '../components';
import { formData } from '../utils';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { addApiary } from '../store/actions/apiaries';
import { NewApiaryScreenProps } from '../navigation/types';

export const NewApiaryScreen: React.FC<NewApiaryScreenProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const [formValues, handleFormValueChange, setFormValues] = formData({
    name: '',
  });

  const onApiaryAdded = () => {
    const newApiary = {
      id: 4,
      name: formValues.name,
      coords: { lat: 56, lng: 17 },
      beehives: [
        {
          row: 1,
          number: 1,
          color: 'red',
          active: true,
          status: [
            {
              name: 'noQueen',
            },
          ],
        },
        {
          row: 1,
          number: 2,
          color: 'blue',
          active: true,
          status: [
            {
              name: 'weakQueen',
            },
          ],
        },
      ],
    };

    dispatch(addApiary(newApiary));
    navigation.jumpTo('ApiariesStack');
  };

  return (
    <View style={styles.container}>
      <Input
        label='Nazwa pasieki'
        formKey='name'
        placeholder='Nazwa nowej pasieki'
        handleChange={handleFormValueChange}
      />
      <TouchableHighlight onPress={onApiaryAdded}>
        <Text>Dodaj pasiekę</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
  },
});
