import Unit from './Unit';
import { average, geometricAverage, random, sum } from '../utils/helpers';
import Soldier from './Soldier';

export default class Vehicle extends Unit {
  public operatorsCount = random(1, 3);

  public recharge = random(1000, 2000);

  public get operators(): Soldier[] {
    const result: Soldier[] = [];
    for (let i = 0; i < this.operatorsCount; i++) {
      result.push(new Soldier());
    }
    return result;
  }

  public get totalHealth(): number {
    return average(this.health, ...this.operators.map((item) => item.health));
  }

  public get attackSuccess(): number {
    const { health, operators } = this;

    return (
      0.5 *
      (1 + health / 100) *
      geometricAverage(operators.map((item) => item.attackSuccess))
    );
  }

  public get damage(): number {
    return 0.1 + sum(this.operators.map((item) => item.experience / 100));
  }

  attack: () => void = () => {
    console.log('vehicle attacks!');
  };

  getAttacked: () => void = () => {
    console.log('vehicle under attack!');
  };
}
