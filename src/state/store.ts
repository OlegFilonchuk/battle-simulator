import { combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const initialState = {
  squads: {
    squads: [],
  },
};

const rootReducer: Reducer = combineReducers({
  squads: reducer,
});

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
