import Battle from '../../classes/Battle';

describe('Battle', () => {
  let battle;
  const name = 'test';
  const squadState = [1, 2, 3];

  beforeEach(() => {
    battle = new Battle();
    battle.addArmy(name, squadState);
  });

  it('should add armies', () => {
    expect(battle.armies.length).toBe(1);
  });

  it('should check the winner', () => {
    expect(battle.hasWinner()).toBeFalsy();
    battle.addArmy('test1', squadState);
    expect(battle.hasWinner()).toBeFalsy();
    battle.armies[0].target = battle.armies[1];
    battle.armies[1].target = battle.armies[0];
    battle.quickFight();
    expect(battle.hasWinner()).toBeTruthy();
  });
});
