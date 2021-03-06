import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import repositories from './reducers/repositories';
import pullRequests from './reducers/pullRequests';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  const store = createStore(
    combineReducers({ repositories, pullRequests }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
