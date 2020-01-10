import { Action, ActionCreator } from 'redux';

export const CREATE_SQUAD = 'CREATE_SQUAD' as const;
export const CREATE_VEHICLE = 'CREATE_VEHICLE' as const;

type CreateSquadAction = Action & {
  type: typeof CREATE_SQUAD;
};

export const createSquadAction: ActionCreator<CreateSquadAction> = (squad) => ({
  type: CREATE_SQUAD,
  payload: {
    squad,
  },
});
