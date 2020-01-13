import React, { FC } from 'react';
import SquadComp from './SquadComp';
import Squad from '../../classes/Squad';

type Props = {
  squads: Squad[];
};

const SquadList: FC<Props> = ({ squads }) => {
  return (
    <ul style={{ display: 'flex' }}>
      {squads.map((item, i) => (
        <li key={i}>
          <SquadComp squad={item} />
        </li>
      ))}
    </ul>
  );
};

export default SquadList;
