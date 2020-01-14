import { Tactics } from '../utils/types';
import Squad from './Squad';

export default class Army {
  public name: string;

  public squads: Squad[] = [];

  public target: Army;

  public tactics: Tactics = 'random';

  constructor(name: string, squadState: number[]) {
    this.name = name;
    this.squads = squadState.map((item) => new Squad(item));
  }

  public get isActive(): boolean {
    return this.squads.some((item) => item.isActive);
  }

  attack(): void {
    if (!this.tactics || !this.target) return;
    this.squads.forEach((item) => {
      item.target = this.target.defineTarget(this.tactics);
      item.attack();
    });
  }

  defineTarget(tactics: Tactics): Squad {
    const strongest: Squad = this.squads
      .filter((item) => item.isActive)
      .sort((a, b) => b.damage - a.damage)[0];

    const weakest: Squad = this.squads
      .filter((item) => item.isActive)
      .sort((a, b) => a.damage - b.damage)[0];

    return tactics === 'weakest'
      ? weakest
      : tactics === 'strongest'
      ? strongest
      : Math.random() < 0.5
      ? weakest
      : strongest;
  }
}
