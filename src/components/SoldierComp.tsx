import React, { FC } from 'react';
import Soldier from '../classes/Soldier';

type Props = {
  soldier: Soldier;
};

const SoldierComp: FC<Props> = ({
  soldier: {
    health,
    experience,
    recharge,
    damage,
    minAttackSuccess,
    maxAttackSuccess,
    isActive,
  },
}) => {
  return (
    <div style={{ background: 'green', margin: '1em', padding: '1em' }}>
      <h3>soldier</h3>
      <div>{`health: ${health}%`}</div>
      <div>{`damage: ${damage}`}</div>
      <div>{`recharge: ${recharge}ms`}</div>
      <div>{`experience: ${experience}`}</div>
      <div>{`attack success: ${minAttackSuccess} ... ${maxAttackSuccess}`}</div>
      <div>{isActive ? 'active' : 'dead'}</div>
    </div>
  );
};

export default SoldierComp;
