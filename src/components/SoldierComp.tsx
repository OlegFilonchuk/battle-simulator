import React, { FC } from 'react';
import Soldier from '../classes/Soldier';

type Props = {
  soldier: Soldier;
};

const SoldierComp: FC<Props> = ({
  soldier: { health, experience, recharge, damage, attackSuccess },
}) => {
  return (
    <div style={{ background: 'green', margin: '1em', padding: '1em' }}>
      <h2>soldier</h2>
      <div>{`health: ${health}%`}</div>
      <div>{`damage: ${damage}`}</div>
      <div>{`recharge: ${recharge}ms`}</div>
      <div>{`experience: ${experience}`}</div>
      <div>{`attack success: ${attackSuccess}`}</div>
    </div>
  );
};

export default SoldierComp;
