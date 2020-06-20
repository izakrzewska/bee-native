import { rootReducer } from './reducers/';

interface Status {
  name: string;
}

interface Coords {
  lat: number;
  lng: number;
}

interface Beehive {
  row: number;
  number: number;
  color: string;
  active: boolean;
  status: Status[];
}

export interface Apiary {
  id: number;
  name: string;
  coords: Coords;
  beehives: Beehive[];
}

export type RootState = ReturnType<typeof rootReducer>;

export interface ApiaryState {
  apiariesList: Apiary[];
}

export const ADD_APIARY = 'ADD_APIARY';

interface AddApiaryAction {
  type: typeof ADD_APIARY;
  payload: Apiary;
}

export type ApiaryActionTypes = AddApiaryAction;
