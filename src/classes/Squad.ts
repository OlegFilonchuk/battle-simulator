import { geometricAverage, random, sum } from '../utils/helpers';
import Soldier from './Soldier';
import Vehicle from './Vehicle';

export default class Squad {
  public name: string;

  public membersCount: number; /* = random(5, 10); */

  public members: (Soldier | Vehicle)[] = [];

  public target: Squad;

  constructor(name: string, membersCount) {
    this.name = name;
    this.membersCount = membersCount
    for (let i = 0; i < this.membersCount; i++) {
      this.members.push(Math.random() >= 0.5 ? new Soldier() : new Vehicle());
    }
  }

  public get isActive(): boolean {
    return this.members.some((item) => item.isActive);
  }

  public get attackSuccess(): number {
    const membersAlive: (Soldier | Vehicle)[] = this.members.filter(
      (item) => item.isActive,
    );
    return +geometricAverage(
      membersAlive.map((item) => item.attackSuccess),
    ).toFixed(2);
  }

  public get damage(): number {
    return this.isActive
      ? +sum(this.members.map((item) => item.damage)).toFixed(2)
      : 0;
  }

  attack: () => void = () => {
    if (!this.target?.isActive || !this.isActive) return;

    if (this.attackSuccess < this.target.attackSuccess) return;
    console.log(`${this.name} deals ${this.damage} damage!`);

    this.members.forEach((item) => item.attack());
    this.target.getAttacked(this.damage);
  };

  getAttacked: (totalDamage: number) => void = async (totalDamage) => {
    if (!this.isActive) return;

    const damage = totalDamage / this.membersCount;
    await this.members.forEach((item) => item.getAttacked(damage));
  };
}
