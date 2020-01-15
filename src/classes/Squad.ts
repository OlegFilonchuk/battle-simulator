import { computed } from 'mobx';
import { geometricAverage, random, sum } from '../utils/helpers';
import Soldier from './Soldier';
import Vehicle from './Vehicle';

export default class Squad {
  public membersCount: number;

  public members: (Soldier | Vehicle)[] = [];

  public target: Squad;

  constructor(membersCount: number = random(5, 10)) {
    this.membersCount = membersCount;
    for (let i = 0; i < this.membersCount; i++) {
      this.members.push(Math.random() >= 0.5 ? new Soldier() : new Vehicle());
    }
  }

  @computed public get isActive(): boolean {
    return this.members.some((item) => item.isActive);
  }

  private get attackSuccess(): number {
    const membersAlive: (Soldier | Vehicle)[] = this.members.filter(
      (item) => item.isActive,
    );
    return +geometricAverage(
      membersAlive.map((item) => item.attackSuccess),
    ).toFixed(2);
  }

  @computed public get damage(): number {
    return this.isActive
      ? +sum(this.members.map((item) => item.damage)).toFixed(2)
      : 0;
  }

  attack(): void {
    if (!this.target?.isActive || !this.isActive) return;

    const prob1 = this.attackSuccess;
    const prob2 = this.target.attackSuccess;

    if (prob1 < prob2) return;

    this.members.forEach((item) => item.attack());
    this.target.getAttacked(this.damage);
  }

  getAttacked: (totalDamage: number) => void = (totalDamage) => {
    if (!this.isActive) return;

    const damage = totalDamage / this.membersCount;
    this.members.forEach((item) => item.getAttacked(damage));
  };
}
