import { call, put, takeLatest } from "redux-saga/effects";
import { getData } from "../actions";
// import api from "../../api";

function fetchData() {
  return new Promise(resolve =>
    resolve({
      data: {
        btc: [
          {
            id: 11
          },
          {
            id: 12
          },
          {
            id: 13
          }
        ],
        main: [
          {
            id: 21,
            verifiedIn: 13
          },
          {
            id: 22,
            verifiedIn: 11
          },
          {
            id: 23,
            verifiedIn: 12
          }
        ]
      }
    })
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
