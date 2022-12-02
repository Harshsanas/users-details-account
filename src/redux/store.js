import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.REACT_APP_ENV === 'development') {
    middlewares.push(logger);
}
  
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const ReduxStore = {store, persistor};

export default ReduxStore;