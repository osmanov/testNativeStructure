import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux';
import reducers from '../reducers';

const logger=createLogger();
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var store = applyMiddleware(thunk, logger)(createStore)(reducers);

export default function configureStore() {
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}