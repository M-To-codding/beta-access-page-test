import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import {routerMiddleware} from 'react-router-redux';
import createBrowserHistory from "history/createBrowserHistory";

export const history = createBrowserHistory();
const store: Store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      routerMiddleware(history),
      thunk
    )
  )
);

const unsubscribe = store.subscribe(() => {
});

export default store;