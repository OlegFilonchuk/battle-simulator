import Squad from '../classes/Squad';

export type SquadState = {
  [name: string]: Squad;
};

export type StoreState = {
  squads: SquadState;
};
