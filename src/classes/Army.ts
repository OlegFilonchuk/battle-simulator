import { Tactics } from '../utils/types';
import Squad from './Squad';

export default class Army {
  public name: string;

  public squads: Squad[] = [];

  public target: Army;

  public tactics: Tactics;

  constructor(name: string, squadsCount: number) {
    this.name = name;
    for (let i = 0; i < squadsCount; i++) {
      const squadName = `squad${i}`;
      this.squads.push(new Squad(squadName, 5));
    }
  }

  public get isActive(): boolean {
    return this.squads.some((item) => item.isActive);
  }

  attack() {
    if (!this.tactics || !this.target) return;
    this.squads.forEach((item) => {
      item.target = this.target.defineTarget(this.tactics);
      item.attack();
    });
  }

  defineTarget(tactics) {
    const strongest = this.squads
      .filter((item) => item.isActive)
      .sort((a, b) => b.damage - a.damage)[0];

    const weakest = this.squads
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
