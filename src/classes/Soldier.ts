import Unit from './Unit';
import { random } from '../utils/helpers';

export default class Soldier extends Unit {
  public experience = 0;

  public get attackSuccess(): number {
    const { health, experience } = this;

    return (0.5 * (1 + health / 100) * random(50 + experience, 100)) / 100;
  }

  public get damage(): number {
    return 0.05 + this.experience / 100;
  }

  attack: () => void = () => {
    this.experience++;
  };

  getAttacked: (damage: number) => void = (damage) => {
    this.health -= damage;
    console.log(`soldier has ${this.health} hp now`);
  };
}
