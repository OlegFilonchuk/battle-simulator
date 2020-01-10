import { geometricAverage, random, sum } from '../utils/helpers';
import Soldier from './Soldier';
import Vehicle from './Vehicle';

export default class Squad {
  public name: string;

  public membersCount: number = random(5, 10);

  public members: (Soldier | Vehicle)[] = [];

  public target: Squad;

  constructor(name: string) {
    this.name = name;
    for (let i = 0; i < this.membersCount; i++) {
      this.members.push(Math.random() >= 0.5 ? new Soldier() : new Vehicle());
    }
  }

  public get attackSuccess(): number {
    return +geometricAverage(
      this.members.map((item) => item.attackSuccess),
    ).toFixed(2);
  }

  public get minAttackSuccess(): number {
    return +geometricAverage(
      this.members.map((item) => item.minAttackSuccess),
    ).toFixed(2);
  }

  public get maxAttackSuccess(): number {
    return +geometricAverage(
      this.members.map((item) => item.maxAttackSuccess),
    ).toFixed(2);
  }

  public get damage(): number {
    return +sum(this.members.map((item) => item.damage)).toFixed(2);
  }

  attack: () => void = () => {
    this.members.forEach((item) => item.attack());
    this.target.getAttacked(10);
  };

  getAttacked: (totalDamage: number) => void = (totalDamage) => {
    const damage = totalDamage / this.membersCount;
    this.members.forEach((item) => item.getAttacked(damage));
  };
}
