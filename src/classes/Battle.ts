import { observable } from 'mobx';
import Army from './Army';

export default class Battle {
  @observable public armies: Army[] = [];

  public addArmy(armyName: string, squadState: number[]): void {
    this.armies.push(new Army(armyName, squadState));
  }

  public hasWinner: () => boolean | Army = () => {
    if (this.armies.length < 2) return false;

    const winnerArr = this.armies.filter((item) => item.isActive);
    return winnerArr.length <= 1 ? winnerArr[0] : false;
  };

  public fight: () => void = () => {
    if (!this.checkTargets()) return;

    const int = setInterval(() => {
      this.armies.forEach((item) => item.attack());
      if (this.hasWinner()) clearInterval(int);
    }, 10);
  };

  public quickFight: () => void = () => {
    if (!this.checkTargets()) return;

    while (!this.hasWinner()) {
      this.armies.forEach((item) => item.attack());
    }
  };

  public checkTargets: () => boolean = () =>
    this.armies.length && this.armies.every((army: Army) => !!army.target);
}
