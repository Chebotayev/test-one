import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga);

export default store;