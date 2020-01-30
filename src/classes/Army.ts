import { action, computed, observable } from 'mobx';
import { Tactics } from '../utils/types';
import Squad from './Squad';

export default class Army {
  public name: string;

  @observable public squads: Squad[] = [];

  @observable public target: Army;

  public tactics: Tactics = 'random';

  constructor(name: string, squadState: number[]) {
    this.name = name;
    squadState.forEach((item: number) => this.addSquad(item));
  }

  @computed public get isActive(): boolean {
    return this.squads.some((item: Squad) => item.isActive);
  }

  public attack(): void {
    if (!this.tactics || !this.target) return;

    this.squads.forEach((item) => {
      item.target = this.target.defineTarget(this.tactics);
      item.attack();
    });
  }

  public defineTarget(enemyTactics: Tactics): Squad {
    const strongest: Squad = this.squads
      .filter((item: Squad) => item.isActive)
      .sort((a, b) => b.damage - a.damage)[0];

    const weakest: Squad = this.squads
      .filter((item: Squad) => item.isActive)
      .sort((a: Squad, b: Squad) => a.damage - b.damage)[0];

    return enemyTactics === 'weakest'
      ? weakest
      : enemyTactics === 'strongest'
      ? strongest
      : Math.random() < 0.5
      ? weakest
      : strongest;
  }

  @action private addSquad(membersCount: number): void {
    this.squads.push(new Squad(membersCount));
  }
}
