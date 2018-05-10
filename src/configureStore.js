import { createStore, applyMiddleware, compose } from 'redux';
// import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(preloadState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}
