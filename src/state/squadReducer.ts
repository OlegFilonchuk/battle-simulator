import { Reducer } from 'redux';
import { CHANGE_TARGET, CREATE_SQUAD, UPDATE_SQUAD } from './AC';
import { SquadState } from '../utils/types';
import Squad from '../classes/Squad';

const initialState: SquadState = {};

const squadReducer: Reducer = (state: SquadState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SQUAD:
      // eslint-disable-next-line no-param-reassign
      state[payload.name] = new Squad(payload.name);
      return { ...state };

    case UPDATE_SQUAD:
      return { ...state };

    case CHANGE_TARGET:
      console.log('src: ', payload.srcName);
      console.log('tg: ', payload.tgName);
      // eslint-disable-next-line no-param-reassign
      state[payload.srcName].target = state[payload.tgName];
      return { ...state };

    default:
      return state;
  }
};

export default squadReducer;
