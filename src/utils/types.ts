import Army from '../classes/Army';

export type StoreState = {
  armies: Army[];
  addArmy(armyName: string, squadState: number[]): void;
};

export type Tactics = 'weakest' | 'strongest' | 'random';

// export class Singleton {
//   private static _instance: Singleton;
//
//   constructor() {
//     if (Singleton._instance) {
//       return Singleton._instance;
//     }
//     Singleton._instance = this;
//   }
// }
