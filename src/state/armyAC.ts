import { Action, ActionCreator } from 'redux';

export const CREATE_ARMY = 'CREATE_ARMY' as const;
export const UPDATE_ARMY = 'UPDATE_ARMY' as const;
export const CHANGE_TACTICS = 'CHANGE_TACTICS' as const;

type CreateArmyAction = Action & {
  type: typeof CREATE_ARMY;
};

type UpdateArmyAction = Action & {
  type: typeof UPDATE_ARMY;
};

type ChangeTargetAction = Action & {
  type: typeof CHANGE_TACTICS;
};

export const createArmyAction: ActionCreator<CreateArmyAction> = (name) => ({
  type: CREATE_ARMY,
  payload: {
    name,
  },
});

export const updateArmyAction: ActionCreator<UpdateArmyAction> = () => ({
  type: UPDATE_ARMY,
});

export const changeTacticsAction: ActionCreator<ChangeTargetAction> = (
  srcName,
  tgName,
) => ({
  type: CHANGE_TACTICS,
  payload: {
    srcName,
    tgName,
  },
});
