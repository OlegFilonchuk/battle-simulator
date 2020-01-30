import Soldier from '../../classes/Soldier';

describe('Soldier', () => {
  it('should increment xp after each attack', () => {
    const soldier: Soldier = new Soldier();
    const oldXP: number = soldier.experience;
    soldier.attack();
    expect(soldier.experience).toBe(oldXP + 1);
  });

  it('should lose some HP after getting damage', () => {
    const soldier: Soldier = new Soldier();
    const oldHP: number = soldier.health;
    soldier.getAttacked(10);
    expect(soldier.health).toBeLessThan(oldHP);
  });

  it('should become inactive after death', () => {
    const soldier: Soldier = new Soldier();
    soldier.health = 0;
    expect(soldier.isActive).toBeFalsy();
  });

  it('should lose hp on damage receiving', () => {
    const soldier: Soldier = new Soldier();
    const oldHp = soldier.health;
    soldier.getAttacked(10);
    expect(soldier.health).toBeLessThan(oldHp);
  });
});
