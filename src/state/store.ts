import { combineReducers, createStore, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import armyReducer from './armyReducer';
import { StoreState } from '../utils/types';
import Army from '../classes/Army';

const initialState: StoreState = {
  armies: [
    /* new Army('Radiant', 2), new Army('Dire', 2) */
  ],
};

const rootReducer: Reducer = combineReducers({
  armies: armyReducer,
});

const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
);

export default store;
