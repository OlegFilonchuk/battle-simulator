import Vehicle from '../../classes/Vehicle';
import Soldier from '../../classes/Soldier';

describe('Vehicle', () => {
  it('should get from 1 to 3 operators after instantiating', () => {
    const vehicle: Vehicle = new Vehicle();

    expect(vehicle.operators.length).toBeLessThanOrEqual(3);
    expect(vehicle.operators.length).toBeGreaterThanOrEqual(1);
  });

  it('should become inactive after all operators die', () => {
    const vehicle: Vehicle = new Vehicle();

    vehicle.operators.forEach((soldier: Soldier) => {
      soldier.health = 0;
    });
    expect(vehicle.isActive).toBeFalsy();
  });

  it('should kill all operators inside if loses all hp', () => {
    const vehicle: Vehicle = new Vehicle();
    vehicle.health = 0;
    expect(vehicle.operators.every((soldier: Soldier) => !soldier.isActive));
  });
});
