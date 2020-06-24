import { Apiary, ADD_APIARY, ApiaryActionTypes } from '../types';

export const addApiary = (newApiary: Apiary): ApiaryActionTypes => {
  return {
    type: ADD_APIARY,
    payload: newApiary,
  };
};
