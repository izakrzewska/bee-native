import { ApiaryState, ApiaryActionTypes, ADD_APIARY } from '../types';

const initialState: ApiaryState = {
  apiaries: [
    {
      id: 1,
      name: 'Borki Kosy',
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
    },
    {
      id: 2,
      name: 'Dziewule',
      coords: { lat: 67, lng: 10 },
      beehives: [
        {
          row: 1,
          number: 1,
          color: 'green',
          active: true,
          status: [
            {
              name: 'hungry',
            },
          ],
        },
        {
          row: 1,
          number: 2,
          color: 'red',
          active: true,
          status: [
            {
              name: 'layingWorker',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Zabłocie',
      coords: { lat: 78, lng: 125 },
      beehives: [
        {
          row: 1,
          number: 1,
          color: 'green',
          active: true,
          status: [],
        },
        {
          row: 1,
          number: 2,
          color: 'blue',
          active: true,
          status: [],
        },
      ],
    },
  ],
};

const apiariesReducer = (
  state = initialState,
  action: ApiaryActionTypes
): ApiaryState => {
  switch (action.type) {
    case ADD_APIARY:
      return {
        ...state,
        apiaries: [...state.apiaries, action.payload],
      };
    default:
      return state;
  }
};

export default apiariesReducer;
