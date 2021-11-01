/* eslint-disable func-names */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './LoginReducer';
import getPokemonsReducer from './PokemonsReducer';

function logger(store) {
  return function (next) {
    return function (action) {
      const prevState = store.getState();
      const result = next(action);
      const nextState = store.getState();

      // eslint-disable-next-line no-console
      console.log({
        'Prev state': prevState,
        action,
        'Next state': nextState,
      });

      return result;
    };
  };
}

const rootReducer = combineReducers({ userReducer, getPokemonsReducer });

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middlewares);

export default store;
