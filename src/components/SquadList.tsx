import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import SquadComp from './SquadComp';
import { SquadState } from '../utils/types';

const SquadList: FC = () => {
  const squads: SquadState = useSelector((state) => state.squads);
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
