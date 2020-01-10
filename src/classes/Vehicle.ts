import Unit from './Unit';
import { average, geometricAverage, random, sum } from '../utils/helpers';
import Soldier from './Soldier';

export default class Vehicle extends Unit {
  public operatorsCount: number = random(1, 3);

  public recharge: number = random(1000, 2000);

  public operators: Soldier[] = [];

  constructor() {
    super();
    for (let i = 0; i < this.operatorsCount; i++) {
      this.operators.push(new Soldier());
    }
  }

  public get isActive(): boolean {
    return this.health > 0 && this.operators.some((item) => item.isActive);
  }

  public get totalHealth(): number {
    return average(this.health, ...this.operators.map((item) => item.health));
  }

  public get attackSuccess(): number {
    const { health, operators } = this;

    return +(
      0.5 *
      (1 + health / 100) *
      geometricAverage(operators.map((item) => item.attackSuccess))
    ).toFixed(2);
  }

  public get minAttackSuccess(): number {
    const { health, operators } = this;

    return +(
      0.5 *
      (1 + health / 100) *
      geometricAverage(operators.map((item) => item.minAttackSuccess))
    ).toFixed(2);
  }

  public get maxAttackSuccess(): number {
    const { health, operators } = this;

    return +(
      0.5 *
      (1 + health / 100) *
      geometricAverage(operators.map((item) => item.maxAttackSuccess))
    ).toFixed(2);
  }

  public get damage(): number {
    return +(
      0.1 + sum(this.operators.map((item) => item.experience / 100))
    ).toFixed(2);
  }

  attack: () => void = () => {
    this.operators.forEach((item) => item.attack());
  };

  getAttacked: (damage: number) => void = (damage) => {
    this.health -= damage * 0.6;

    const lastDamage = (damage * 0.2) / this.operators.length;
    this.operators.forEach((item) => item.getAttacked(lastDamage));
    this.operators[random(0, this.operators.length - 1)].getAttacked(
      damage * 0.2,
    );
  };
}
