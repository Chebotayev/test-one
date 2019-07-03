import { getData, addCoordinates, getNewData } from "../actions";
import { handleActions } from "redux-actions";

import updatedData from '../../mocks/updatedData';

const initialState = {
  data: { btc: [], main: [] },
  coordinates: { btc: {}, main: {} },
  fetching: false
};

export const blocks = handleActions(
  {
    [getData.processing]: state => ({ ...state, fetching: true }),
    [getData.succeed]: (state, action) => {
      return { ...state, fetching: false, data: action.payload.data };
    },
    [getData.failed]: state => initialState,
    [addCoordinates]: (state, action) => ({...state, coordinates: action.payload}),
    [getNewData]: (state, action) => {
      return ({...state, data: updatedData.data })
    }
  },
  initialState
);
