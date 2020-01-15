import { observable } from 'mobx';
import { StoreState } from './utils/types';
import Army from './classes/Army';

const store: StoreState = observable.object({
  armies: [],
  addArmy(armyName: string, squadState: number[]): void {
    this.armies.push(new Army(armyName, squadState));
  },
});

export default store;
