import { Reducer } from 'redux';
import { CHANGE_TARGET, CREATE_SQUAD, UPDATE_SQUAD } from './AC';
import { SquadState } from '../utils/types';
import Squad from '../classes/Squad';

const initialState: SquadState = {};

const squadReducer: Reducer = (state: SquadState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SQUAD:
      state[payload.name] = new Squad(payload.name);
      return { ...state };

    case UPDATE_SQUAD:
      return { ...state };

    case CHANGE_TARGET:
      state[payload.srcName].target = state[payload.tgName];
      return { ...state };

    default:
      return state;
  }
};

export default squadReducer;
