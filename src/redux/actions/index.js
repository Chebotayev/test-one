import { createActions } from "redux-actions";

export const { getData, addCoordinates } = createActions({
  GET_DATA: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  ADD_COORDINATES: undefined
});
