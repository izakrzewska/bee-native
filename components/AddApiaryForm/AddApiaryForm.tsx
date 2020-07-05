import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { NewApiaryScreenNavigationProp } from '../../navigation/types';
import { addApiary } from '../../store/actions/apiaries';
import { Text, TextField } from '..';
import { useNavigation } from '@react-navigation/native';

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

  return (
    <View>
      <TextField
        label='Nazwa pasieki'
        name='name'
        error={errors.name}
        setTextValue={setTextValue}
      />
      <TouchableHighlight
        onPress={handleSubmit(({ name }) => onApiaryAdded(name))}
      >
        <Text>Dodaj pasiekę</Text>
      </TouchableHighlight>
    </View>
  );
};
