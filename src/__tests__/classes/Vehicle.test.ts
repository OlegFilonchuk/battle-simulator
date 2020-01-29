import Vehicle from '../../classes/Vehicle';

describe('Vehicle', () => {
  const vehicle: Vehicle = new Vehicle();
  it('should get from 1 to 3 operators after instantiating', () => {
    expect(vehicle.operators.length).toBeLessThanOrEqual(3);
    expect(vehicle.operators.length).toBeGreaterThanOrEqual(1);
  });
});
