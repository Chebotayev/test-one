import { all, call } from "redux-saga/effects";
import { getDataSagaWatcher } from "./getData"

export default function* rootSaga() {
  yield all([
    //DATA
    call(getDataSagaWatcher),
  ]);
}
