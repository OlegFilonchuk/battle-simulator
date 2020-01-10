import { combineReducers, createStore, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import squadReducer from './squadReducer';
import { StoreState } from '../utils/types';

const initialState: StoreState = {
  squads: {},
};

const rootReducer: Reducer = combineReducers({
  squads: squadReducer,
});

const store: Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(),
);

export default store;
