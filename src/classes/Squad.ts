import { geometricAverage, random, sum } from '../utils/helpers';
import Soldier from './Soldier';
import Vehicle from './Vehicle';

export default class Squad {
  public name: string;

  public membersCount: number = random(5, 10);

  public members: (Soldier | Vehicle)[];

  constructor(name) {
    this.name = name;
    const result: (Soldier | Vehicle)[] = [];
    for (let i = 0; i < this.membersCount; i++) {
      result.push(Math.random() >= 0.5 ? new Soldier() : new Vehicle());
    }
    this.members = result;
  }

  public get attackSuccess(): number {
    return geometricAverage(this.members.map((item) => item.attackSuccess));
  }

  public get damage(): number {
    return sum(this.members.map((item) => item.damage));
  }

  attack: () => void = () => {
    console.log('total attack success:', this.attackSuccess);
    console.log('total damage:', this.damage);
    this.members.forEach((item) => item.attack());
  };

  getAttacked: (totalDamage: number) => void = (totalDamage) => {
    console.log('we are under attack!');
    const damage = totalDamage / this.membersCount;
    this.members.forEach((item) => item.getAttacked(damage));
  };
}
