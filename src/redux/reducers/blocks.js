import { getData, addCoordinates } from "../actions";
import { handleActions } from "redux-actions";

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
    [addCoordinates]: (state, action) => ({...state, coordinates: action.payload}) 
  },
  initialState
);
