import Soldier from '../../classes/Soldier';

describe('Soldier', () => {
  const soldier: Soldier = new Soldier();
  it('should increment xp after each attack', () => {
    const oldXP: number = soldier.experience;
    soldier.attack();
    expect(soldier.experience).toBe(oldXP + 1);
  });

  it('should lose some HP after getting damage', () => {
    const oldHP: number = soldier.health;
    soldier.getAttacked(10);
    expect(soldier.health).toBeLessThan(oldHP);
  });

  it('should become inactive after death', () => {
    soldier.health = 0;
    expect(soldier.isActive).toBeFalsy();
  });
});
