import { Action, ActionCreator } from 'redux';
import { Tactics } from '../utils/types';

export const ARMY_CREATE = 'ARMY_CREATE' as const;
export const ARMY_UPDATE = 'ARMY_UPDATE' as const;
export const ARMY_TACTICS_CHANGE = 'ARMY_TACTICS_CHANGE' as const;
export const ARMY_TARGET_CHANGE = 'ARMY_TARGET_CHANGE' as const;

export type ArmyCreateAction = Action & {
  type: typeof ARMY_CREATE;
};

type ArmyUpdateAction = Action & {
  type: typeof ARMY_UPDATE;
};

type TacticsChangeAction = Action & {
  type: typeof ARMY_TACTICS_CHANGE;
};

type TargetChangeAction = Action & {
  type: typeof ARMY_TARGET_CHANGE;
  payload: {
    srcName: string;
    tgName: string;
  };
};

export const armyCreateAction: ActionCreator<ArmyCreateAction> = (
  name: string,
  squadState: number,
) => ({
  type: ARMY_CREATE,
  payload: {
    name,
    squadState,
  },
});

export const armyUpdateAction: ActionCreator<ArmyUpdateAction> = () => ({
  type: ARMY_UPDATE,
});

export const tacticsChangeAction: ActionCreator<TacticsChangeAction> = (
  name: string,
  tactics: Tactics,
) => ({
  type: ARMY_TACTICS_CHANGE,
  payload: {
    name,
    tactics,
  },
});

export const targetChangeAction: ActionCreator<TargetChangeAction> = (
  srcName: string,
  tgName: string,
) => ({
  type: ARMY_TARGET_CHANGE,
  payload: {
    srcName,
    tgName,
  },
});
