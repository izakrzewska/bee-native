import { Apiary, ADD_APIARY, ApiaryActionTypes } from '../types';
import { Dispatch } from 'redux';

export const addApiary = (newApiary: Apiary) => (
  dispatch: Dispatch<ApiaryActionTypes>
) => {
  dispatch({
    type: ADD_APIARY,
    payload: newApiary,
  });
};
