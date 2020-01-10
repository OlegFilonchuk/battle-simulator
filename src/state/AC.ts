import { Action, ActionCreator } from 'redux';

export const CREATE_SQUAD = 'CREATE_SQUAD' as const;
export const UPDATE_SQUAD = 'UPDATE_SQUAD' as const;
export const CHANGE_TARGET = 'CHANGE_TARGET' as const;

type CreateSquadAction = Action & {
  type: typeof CREATE_SQUAD;
};

type UpdateSquadAction = Action & {
  type: typeof UPDATE_SQUAD;
};

type ChangeTargetAction = Action & {
  type: typeof CHANGE_TARGET;
};

export const createSquadAction: ActionCreator<CreateSquadAction> = (name) => ({
  type: CREATE_SQUAD,
  payload: {
    name,
  },
});

export const updateSquadAction: ActionCreator<UpdateSquadAction> = () => ({
  type: UPDATE_SQUAD,
});

export const changeTargetAction: ActionCreator<ChangeTargetAction> = (
  srcName,
  tgName,
) => ({
  type: CHANGE_TARGET,
  payload: {
    srcName,
    tgName,
  },
});
