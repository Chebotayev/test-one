import { createActions } from "redux-actions";

export const { getData } = createActions({
  GET_DATA: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  }
});
