import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import useModels from "../../models";

const { useReducers } = useModels();

const reducers = useReducers();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewaresToApply = [
  thunk,
];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewaresToApply.push(createFlipperDebugger());
}

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewaresToApply)
  )
);

export default store;