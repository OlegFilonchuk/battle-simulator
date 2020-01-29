import Army from '../../classes/Army';
import Squad from '../../classes/Squad';
import Soldier from '../../classes/Soldier';
import Vehicle from '../../classes/Vehicle';

describe('Army', () => {
  const name = 'testArmy';
  const squadState: number[] = [5, 5, 6, 7];
  const army: Army = new Army(name, squadState);

  it('should create the right amount of squads', () => {
    expect(army.squads.length).toEqual(squadState.length);
  });

  it('should get a right name', () => {
    expect(army.name).toEqual(name);
  });

  it('should be active', () => {
    expect(army.isActive).toBeTruthy();
  });

  it('should be inactive after all squads death', () => {
    army.squads.forEach((squad: Squad) => {
      squad.members.forEach((member: Soldier | Vehicle) => {
        member.getAttacked(100000000);
        // member.health = 0;
      });
    });
    expect(army.isActive).toBeFalsy();
  });
});
