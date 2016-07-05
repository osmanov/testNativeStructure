import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux';
import reducer from './modules/reducer';

const logger=createLogger();
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var store = applyMiddleware(thunk, logger)(createStore)(reducer);

export default function configureStore() {
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}