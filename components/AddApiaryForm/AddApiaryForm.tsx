import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { NewApiaryScreenNavigationProp } from '../../navigation/types';
import { addApiary } from '../../store/actions/apiaries';
import { Text } from '../Text/Text';

interface AddApiaryFormProps {
  navigation: NewApiaryScreenNavigationProp;
}

type FormData = {
  name: string;
};

export const AddApiaryForm: React.FC<AddApiaryFormProps> = ({ navigation }) => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
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

  return (
    <View>
      <Text>Nazwa pasieki</Text>
      <TextInput onChangeText={(text) => setValue('name', text, true)} />
      {errors.name && <Text>This is required.</Text>}
      <TouchableHighlight
        onPress={handleSubmit(({ name }) => onApiaryAdded(name))}
      >
        <Text>Dodaj pasiekę</Text>
      </TouchableHighlight>
    </View>
  );
};
