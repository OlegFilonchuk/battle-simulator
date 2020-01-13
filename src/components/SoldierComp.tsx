import React, { FC } from 'react';
import Soldier from '../classes/Soldier';
import logo from '../assets/soldier.png';
import HpBar from './HPBar';
import Damage from './Damage';
import Reload from './Reload';

type Props = {
  soldier: Soldier;
};

const SoldierComp: FC<Props> = ({
  soldier: { health, experience, recharge, damage, isActive },
}) => (
  <div style={{ background: '#555', margin: '0.5em', padding: '0.5em' }}>
    <HpBar health={health} />

    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <img src={logo} alt="soldier" width={50} height={50} />

      <div>
        <Damage damage={damage} />

        <Reload reload={recharge} />

        <div>{`XP: ${experience}`}</div>
      </div>
    </div>
  </div>
);

export default SoldierComp;
