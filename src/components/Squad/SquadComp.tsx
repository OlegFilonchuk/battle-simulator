import React, { FC } from 'react';
import Squad from '../../classes/Squad';
import Soldier from '../../classes/Soldier';
import SoldierComp from '../SoldierComp';
import VehicleComp from '../VehicleComp';
import Damage from '../Damage';

type Props = {
  squad: Squad;
};

const SquadComp: FC<Props> = ({ squad: { membersCount, members, damage } }) => (
  <div style={{ background: '#bbb', padding: '0.5em', margin: '0.5em' }}>
    <div>{`Members count: ${membersCount}`}</div>

    <Damage damage={damage} />

    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {members.map((item, i) => {
        const comp =
          item instanceof Soldier ? (
            <SoldierComp soldier={item} />
          ) : (
            <VehicleComp vehicle={item} />
          );
        return <li key={i}>{comp}</li>;
      })}
    </ul>
  </div>
);

export default SquadComp;
