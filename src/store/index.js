import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from 'redux/rootSaga';
import rootReducer from 'redux/rootReducer';


const reducer = persistReducer({
    key: 'root',
    storage,
  }, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configStore = (initialState = {}) => {
  const store = createStore(
      reducer,
      initialState,
      composeEnhancer(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return {
    persistor: persistStore(store),
    store,
  };
};

export const { store, persistor } = configStore();


