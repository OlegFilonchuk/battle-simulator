import Battle from '../classes/Battle';

export type StoreState = {
  battle: Battle;
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
