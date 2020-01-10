import { Reducer } from 'redux';
import { CREATE_SQUAD, UPDATE_SQUAD } from './AC';
import { SquadState } from '../utils/types';
import Squad from '../classes/Squad';

const initialState: SquadState = {};

const reducer: Reducer = (state: SquadState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SQUAD:
      // return {
      //   ...state,
      //   [payload.squad.name]: payload.squad,
      // };
      // eslint-disable-next-line no-param-reassign
      state[payload.name] = new Squad(payload.name);
      return { ...state };

    case UPDATE_SQUAD:
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
