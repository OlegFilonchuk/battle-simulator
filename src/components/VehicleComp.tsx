import React, { FC } from 'react';
import Vehicle from '../classes/Vehicle';
import SoldierComp from './SoldierComp';

type Props = {
  vehicle: Vehicle;
};

const VehicleComp: FC<Props> = ({
  vehicle: {
    operators,
    health,
    operatorsCount,
    recharge,
    totalHealth,
    damage,
    minAttackSuccess,
    maxAttackSuccess,
    isActive,
  },
}) => {
  return (
    <div style={{ background: 'red', margin: '1em', padding: '1em' }}>
      <h2>vehicle</h2>
      <div>{`total health: ${totalHealth}%`}</div>
      <div>{`health: ${health}%`}</div>
      <div>{`damage: ${damage}`}</div>
      <div>{`recharge: ${recharge}ms`}</div>
      <div>{`operators count: ${operatorsCount}`}</div>
      <div>{`attack success: ${minAttackSuccess} ... ${maxAttackSuccess}`}</div>
      <div>{isActive ? 'active' : 'dead'}</div>

      <ul>
        operators:
        {operators.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <SoldierComp soldier={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleComp;
