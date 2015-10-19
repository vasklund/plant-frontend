import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import { devTools } from 'redux-devtools';
import config from './config';
import routes from './routes.jsx';
import rootReducer from './reducers';

const { IS_SERVER } = config;

export function instantiateStore(initialState) {
  return compose(
    applyMiddleware(promiseMiddleware),
    // reduxReactRouter({
    //   routes,
    //   createHistory: IS_SERVER ? createMemoryHistory : createHistory,
    // }),
    devTools(),
  )(createStore)(rootReducer, initialState);
}
