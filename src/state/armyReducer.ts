import { Reducer } from 'redux';
import { CHANGE_TACTICS, CREATE_ARMY, SET_TARGET, UPDATE_ARMY } from './armyAC';
import Army from '../classes/Army';

const initialState: Army[] = [];

const squadReducer: Reducer = (state: Army[] = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ARMY:
      state.push(new Army(payload.name, payload.squadsCount));
      return [...state];

    case UPDATE_ARMY:
      return [...state];

    case CHANGE_TACTICS:
      state.find((item) => item.name === payload.name).tactics =
        payload.tactics;
      return [...state];

    case SET_TARGET:
      state.find((item) => item.name === payload.srcName).target = state.find(
        (item) => item.name === payload.tgName,
      );
      return [...state];

    default:
      return state;
  }
};

export default squadReducer;
