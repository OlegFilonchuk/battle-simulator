import { combineReducers, createStore, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import armyReducer from './armyReducer';
import { StoreState } from '../utils/types';

const initialState: StoreState = {
  armies: [],
};

const rootReducer: Reducer<StoreState> = combineReducers({
  armies: armyReducer,
});

const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
);

export default store;
