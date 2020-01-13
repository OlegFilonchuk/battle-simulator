import { SquadState } from '../utils/types';
import Squad from './Squad';

export default class Army {
  public name: string;

  public squads: SquadState = {};

  constructor(name: string, squadsCount: number) {
    this.name = name;
    for (let i = 0; i < squadsCount; i++) {
      const squadName = `squad${i}`;
      this.squads[squadName] = new Squad(squadName, 5);
    }
  }
}
