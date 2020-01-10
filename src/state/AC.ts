import { Action, ActionCreator } from 'redux';

export const CREATE_SQUAD = 'CREATE_SQUAD' as const;
export const UPDATE_SQUAD = 'UPDATE_SQUAD' as const;

type CreateSquadAction = Action & {
  type: typeof CREATE_SQUAD;
};

type UpdateSquadAction = Action & {
  type: typeof UPDATE_SQUAD;
};

export const createSquadAction: ActionCreator<CreateSquadAction> = (squad) => ({
  type: CREATE_SQUAD,
  payload: {
    squad,
  },
});

export const updateSquadAction: ActionCreator<UpdateSquadAction> = (
  id,
  newState,
) => ({
  type: UPDATE_SQUAD,
  payload: {
    newState,
  },
});
