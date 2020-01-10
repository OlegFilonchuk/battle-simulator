import Squad from '../classes/Squad';

export type SquadState = {
  [name: string]: Squad;
};

export type StoreState = {
  squads: SquadState;
};
class Singleton {
  private static _instance: Singleton;

  constructor() {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    Singleton._instance = this;
  }
}