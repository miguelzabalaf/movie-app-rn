import { createStore, applyMiddleware, compose } from "redux";
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import useModels from "../../models";

const useStoreConfig = () => {

  const { useReducers } = useModels();

  const reducers = useReducers();
  const initialState = {};
  let middlewaresToApply = [thunk];

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
  };

  const persistReduce = persistReducer(persistConfig, reducers);

  if (__DEV__) {
    const createFlipperDebugger = require('redux-flipper').default;
    const reduxInmmutableStateInvariant = require("redux-immutable-state-invariant").default();
    middlewaresToApply = [...middlewaresToApply, createFlipperDebugger(), reduxInmmutableStateInvariant];
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistReduce,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewaresToApply)
    )
  );

  const persistor = persistStore(store);

  return {
    store, persistor
  };
};

export default useStoreConfig;