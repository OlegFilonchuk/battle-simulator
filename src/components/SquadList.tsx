import React, { FC } from 'react';
import SquadComp from './SquadComp';
import { SquadState } from '../utils/types';

type Props = {
  squads: SquadState;
};

const SquadList: FC<Props> = ({ squads }) => {
  return (
    <ul style={{ display: 'flex' }}>
      {Object.values(squads).map((item) => (
        <li key={item.name}>
          <SquadComp squad={item} />
        </li>
      ))}
    </ul>
  );
};

export default SquadList;
