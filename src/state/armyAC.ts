import { Action, ActionCreator } from 'redux';
import { Tactics } from '../utils/types';

export const CREATE_ARMY = 'CREATE_ARMY' as const;
export const UPDATE_ARMY = 'UPDATE_ARMY' as const;
export const CHANGE_TACTICS = 'CHANGE_TACTICS' as const;
export const SET_TARGET = 'SET_TARGET' as const;

type CreateArmyAction = Action & {
  type: typeof CREATE_ARMY;
};

type UpdateArmyAction = Action & {
  type: typeof UPDATE_ARMY;
};

type ChangeTacticsAction = Action & {
  type: typeof CHANGE_TACTICS;
};

type SetTargetAction = Action & {
  type: typeof SET_TARGET;
  payload: {
    srcName: string;
    tgName: string;
  };
};

export const createArmyAction: ActionCreator<CreateArmyAction> = (
  name: string,
  squadsCount: number,
) => ({
  type: CREATE_ARMY,
  payload: {
    name,
    squadsCount,
  },
});

export const updateArmyAction: ActionCreator<UpdateArmyAction> = () => ({
  type: UPDATE_ARMY,
});

export const changeTacticsAction: ActionCreator<ChangeTacticsAction> = (
  name: string,
  tactics: Tactics,
) => ({
  type: CHANGE_TACTICS,
  payload: {
    name,
    tactics,
  },
});

export const setTargetAction: ActionCreator<SetTargetAction> = (
  srcName: string,
  tgName: string,
) => ({
  type: SET_TARGET,
  payload: {
    srcName,
    tgName,
  },
});
