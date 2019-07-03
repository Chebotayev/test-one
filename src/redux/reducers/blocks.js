import { getData, addCoordinates, getNewData } from "../actions";
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
    [addCoordinates]: (state, action) => ({...state, coordinates: action.payload}),
    [getNewData]: (state, action) => {
      return ({...state, data: {
        btc: [
          {
            id: 211
          },
          {
            id: 11322
          },
          {
            id: 11233
          }
        ],
        main: [
          {
            id: 2121,
            verifiedIn: 11322
          },
          {
            id: 2122,
            verifiedIn: 11233
          },
          {
            id: 2312
          }
        ]
      }})
    }
  },
  initialState
);
