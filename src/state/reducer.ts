import { Reducer } from 'redux';
import { CREATE_SQUAD, UPDATE_SQUAD } from './AC';
import { SquadState } from '../utils/types';

const initialState: SquadState = {};

const reducer: Reducer = (state: SquadState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SQUAD:
      return {
        ...state,
        [payload.squad.name]: payload.squad,
      };

    case UPDATE_SQUAD:
      return state;

    default:
      return state;
  }
};

export default reducer;
