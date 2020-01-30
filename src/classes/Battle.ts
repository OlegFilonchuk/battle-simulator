import { observable } from 'mobx';
import Army from './Army';

export default class Battle {
  @observable public armies: Army[] = [];

  public addArmy(armyName: string, squadState: number[]): void {
    this.armies.push(new Army(armyName, squadState));
  }
}
