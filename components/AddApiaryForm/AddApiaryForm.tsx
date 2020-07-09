import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { NewApiaryScreenNavigationProp } from '../../navigation/types';
import { addApiary } from '../../store/actions/apiaries';
import { TextField } from '../TextField/TextField';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../Button/Button';

interface AddApiaryFormProps {}

type FormData = {
  name: string;
};

export const AddApiaryForm: React.FC<AddApiaryFormProps> = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormData>();
  const navigation = useNavigation<NewApiaryScreenNavigationProp>();
  const dispatch = useDispatch();

  useEffect(() => {
    register({ name: 'name' }, { required: true });
  }, [register]);

  const onApiaryAdded = (name: string) => {
    const newApiary = {
      id: 4,
      name: name,
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

  const setTextValue = (name: string, text: string, boolean: boolean) => {
    setValue(name, text, boolean);
  };

  const onPress = () => {
    handleSubmit(({ name }) => onApiaryAdded(name));
  };

  return (
    <View style={styles.form}>
      <TextField
        label='Nazwa pasieki'
        name='name'
        error={errors.name}
        setTextValue={setTextValue}
      />
      <View style={styles.buttonContainer}>
        <Button
          type='add'
          onPress={handleSubmit(({ name }) => onApiaryAdded(name))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginEnd: 20,
    marginTop: 20,
    alignItems: 'flex-end',
  },
});
