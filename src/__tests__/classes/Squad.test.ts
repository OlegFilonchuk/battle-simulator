import Squad from '../../classes/Squad';
import Soldier from '../../classes/Soldier';
import Vehicle from '../../classes/Vehicle';

describe('Squad', () => {
  it('should get right amount of members', () => {
    const membersCount = 2;
    const squad: Squad = new Squad(membersCount);
    expect(squad.members.length).toBe(membersCount);
  });

  it('should get a random amount of members from 5 to 10 in case of no argument provided', () => {
    const squads: Squad[] = [];

    for (let i = 0; i < 100; i++) {
      squads.push(new Squad());
    }

    expect(
      squads.every(
        (squad: Squad) =>
          squad.members.length >= 5 && squad.members.length <= 10,
      ),
    ).toBeTruthy();
  });

  it('should stay active if at least one of members stays active', () => {
    const squad: Squad = new Squad();
    for (let i = 1; i < squad.members.length; i++) {
      squad.members[i].getAttacked(100_000_000);
      // squad.members[i].health = 0;
    }
    expect(squad.isActive).toBeTruthy();
  });

  it('should become inactive if all members are dead', () => {
    const squad: Squad = new Squad();
    squad.members.forEach((member: Soldier | Vehicle) => {
      member.getAttacked(100_000_000);
      // member.health = 0;
    });
    expect(squad.isActive).toBeFalsy();
  });
});
