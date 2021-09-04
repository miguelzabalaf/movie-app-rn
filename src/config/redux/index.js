import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import useModels from "../../models";

const { useReducers } = useModels();

const reducers = useReducers();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;