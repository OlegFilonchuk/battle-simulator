import { Reducer } from 'redux';
import {
  ARMY_TACTICS_CHANGE,
  ARMY_CREATE,
  ARMY_TARGET_CHANGE,
  ARMY_UPDATE,
} from './armyAC';
import Army from '../classes/Army';

const initialState: Army[] = [];

const squadReducer: Reducer = (state: Army[] = initialState, action) => {
  const { type, payload } = action;
  const newState = [...state];

  switch (type) {
    case ARMY_CREATE:
      newState.push(new Army(payload.name, payload.squadState));
      return newState;
    // state.push(new Army(payload.name, payload.squadState));
    // return [...state];

    case ARMY_UPDATE:
      return newState;
    // return [...state];

    case ARMY_TACTICS_CHANGE:
      newState.find((item) => item.name === payload.name).tactics =
        payload.tactics;
      return newState;
    //   payload.tactics;
    // state.find((item) => item.name === payload.name).tactics =
    //   payload.tactics;
    // return [...state];

    case ARMY_TARGET_CHANGE:
      newState.find(
        (item) => item.name === payload.srcName,
      ).target = state.find((item) => item.name === payload.tgName);
      return newState;
    // state.find((item) => item.name === payload.srcName).target = state.find(
    //   (item) => item.name === payload.tgName,
    // );
    // return [...state];

    default:
      return state;
  }
};

export default squadReducer;
