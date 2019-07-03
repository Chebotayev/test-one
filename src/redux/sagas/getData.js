import { call, put, takeLatest } from "redux-saga/effects";
import { getData } from "../actions";
import initData from '../../mocks/initData';
// import api from "../../api";

function fetchData() {
  return new Promise(resolve =>
    resolve(initData)
  );
}

function* getDataWorker() {
  try {
    const response = yield call(fetchData);
    
    yield put(getData.succeed(response));
  } catch (error) {
    yield put(getData.failed());
  }
}

export function* getDataSagaWatcher() {
  yield takeLatest(getData.processing, getDataWorker);
}
