import { Reducer } from 'redux';
import { ArmyState } from '../utils/types';
import { random } from '../utils/helpers';
import { CHANGE_TACTICS, CREATE_ARMY, SET_TARGET, UPDATE_ARMY } from './armyAC';
import Army from '../classes/Army';

const initialState: ArmyState = {};

const squadReducer: Reducer = (state: ArmyState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ARMY:
      state[payload.name] = new Army(payload.name, random(2, 3));
      return { ...state };

    case UPDATE_ARMY:
      return { ...state };

    case CHANGE_TACTICS:
      state[payload.name].tactics = payload.tactics;
      return { ...state };

    case SET_TARGET:
      state[payload.srcName].target = state[payload.tgName];
      return { ...state };

    default:
      return state;
  }
};

export default squadReducer;
