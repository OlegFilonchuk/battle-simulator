import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import SquadComp from './SquadComp';
import Squad from '../classes/Squad';

const SquadList: FC = () => {
  const squads: Squad[] = useSelector((state) => state.squads);
  return (
    <ul>
      {Object.values(squads).map((item) => (
        <li key={item.name}>
          <SquadComp squad={item} />
        </li>
      ))}
    </ul>
  );
};

export default SquadList;
