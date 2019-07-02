import { getData } from "../actions";
import { handleActions } from "redux-actions";

const initialState = {
  data: {},
  fetching: false
};

export const blocks = handleActions(
  {
    [getData.processing]: state => ({ ...state, fetching: true }),
    [getData.succeed]: (state, action) => {
      return { ...state, fetching: false, data: action.payload.data };
    },
    [getData.failed]: state => initialState
  },
  initialState
);
