import Squad from '../classes/Squad';
import Army from '../classes/Army';

export type SquadState = {
  [name: string]: Squad;
};

export type ArmyState = {
  [name: string]: Army;
};

export type StoreState = {
  armies: ArmyState;
};

export type Tactices = 'weakest' | 'strongest' | 'random';

// class Singleton {
//   private static _instance: Singleton;
//
//   constructor() {
//     if (Singleton._instance) {
//       return Singleton._instance;
//     }
//     Singleton._instance = this;
//   }
// }
