import Unit from './Unit';
import { random } from '../utils/helpers';

export default class Soldier extends Unit {
  private _experience = 0;

  public get experience(): number {
    return this._experience;
  }

  public set experience(value) {
    this._experience = value >= 50 ? 50 : value;
  }

  public get isActive(): boolean {
    return this.health > 0;
  }

  public get attackSuccess(): number {
    const { health, experience } = this;

    return +(
      (0.5 * (1 + health / 100) * random(50 + experience, 100)) /
      100
    ).toFixed(2);
  }

  public get damage(): number {
    return this.isActive ? +(0.05 + this.experience / 100).toFixed(2) : 0;
  }

  attack(): void {
    if (!this.isActive) return;
    this.experience++;
  }

  getAttacked(damage: number): void {
    if (this.isActive) this.health -= damage;
  }
}
