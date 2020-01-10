import { random } from '../utils/helpers';

export default abstract class Unit {
  private _health = 100;

  public get health() {
    return +this._health.toFixed(2);
  }

  public set health(value) {
    this._health = value;
  }

  public recharge: number = random(100, 2000);
}
