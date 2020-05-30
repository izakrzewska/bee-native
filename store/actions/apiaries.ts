import { Apiary, ADD_APIARY, ApiaryActionTypes } from '../types';

export function addApiary(newApiary: Apiary): ApiaryActionTypes {
  return {
    type: ADD_APIARY,
    payload: newApiary,
  };
}
