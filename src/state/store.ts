import { combineReducers, createStore, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import { StoreState } from '../utils/types';

const initialState: StoreState = {
  squads: {},
};

const rootReducer: Reducer = combineReducers({
  squads: reducer,
});

const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
);

export default store;
