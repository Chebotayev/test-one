import { createActions } from "redux-actions";

export const { getData, addCoordinates, getNewData } = createActions({
  GET_DATA: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  ADD_COORDINATES: undefined,
  GET_NEW_DATA: undefined
});
