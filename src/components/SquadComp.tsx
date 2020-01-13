import React, { FC } from 'react';
import Squad from '../classes/Squad';
import Soldier from '../classes/Soldier';
import SoldierComp from './SoldierComp';
import VehicleComp from './VehicleComp';

type Props = {
  squad: Squad;
};

const SquadComp: FC<Props> = ({
  squad: { name, membersCount, members, damage, isActive },
}) => (
  <div style={{ background: '#ddd', padding: '1em', margin: '1em' }}>
    <h2>{name}</h2>
    <div>{`Members count: ${membersCount}`}</div>
    <div>{`damage: ${damage}`}</div>
    <div style={{ background: isActive ? 'green' : 'red' }}>
      {isActive ? 'active' : 'dead'}
    </div>

    <ul>
      members:
      {members.map((item, i) => {
        const comp =
          item instanceof Soldier ? (
            <SoldierComp soldier={item} />
          ) : (
            <VehicleComp vehicle={item} />
          );
        // eslint-disable-next-line react/no-array-index-key
        return <li key={i}>{comp}</li>;
      })}
    </ul>
  </div>
);

export default SquadComp;
