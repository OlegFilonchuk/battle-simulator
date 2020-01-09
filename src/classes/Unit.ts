import { random } from '../utils/helpers';

export default abstract class Unit {
  public health = 100;

  public recharge = random(100, 2000);
}
