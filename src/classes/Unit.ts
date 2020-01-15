import { computed, observable } from 'mobx';
import { random } from '../utils/helpers';

export default abstract class Unit {
  @observable private _health = 100;

  @computed public get health(): number {
    return +this._health.toFixed(2);
  }

  public set health(value) {
    this._health = value > 0 ? value : 0;
  }

  public recharge: number = random(100, 2000);
}
