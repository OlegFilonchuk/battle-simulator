import { SquadState, Tactices } from '../utils/types';
import Squad from './Squad';

export default class Army {
  public name: string;

  public squads: SquadState = {};

  public target: Army;

  private _tactics: Tactices;

  constructor(name: string, squadsCount: number) {
    this.name = name;
    for (let i = 0; i < squadsCount; i++) {
      const squadName = `squad${i}`;
      this.squads[squadName] = new Squad(squadName, 5);
    }
  }

  public set tactics(tactics: Tactices) {
    this._tactics = tactics;
    Object.values(this.squads).forEach((item) => {
      item.target = this.target.defineTarget(this._tactics);
    });
  }

  public get isActive(): boolean {
    return Object.values(this.squads).some((item) => item.isActive);
  }

  attack() {
    if (!this._tactics || !this.target) return;
    Object.values(this.squads).forEach((item) => item.attack());
  }

  defineTarget(tactics) {
    const strongest = Object.values(this.squads).sort(
      (a, b) => b.damage - a.damage,
    )[0];

    const weakest = Object.values(this.squads).sort(
      (a, b) => a.damage - b.damage,
    )[0];

    return tactics === 'weakest'
      ? weakest
      : tactics === 'strongest'
      ? strongest
      : Math.random() < 0.5
      ? weakest
      : strongest;
  }
}
