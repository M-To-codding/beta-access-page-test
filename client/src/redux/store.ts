import {applyMiddleware, createStore, Store} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import {routerMiddleware} from 'react-router-redux';
import {createBrowserHistory} from "history";
import apiErrorsHandler from "../utils/apiErrorsHandler";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const history = createBrowserHistory();

const store: Store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      apiErrorsHandler,
      logger
    )
  )
);

export let persistor = persistStore(store);

const unsubscribe = store.subscribe(() => {
});

export default store;