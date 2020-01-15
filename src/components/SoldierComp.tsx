import React, { FC } from 'react';
import { observer } from 'mobx-react';
import Soldier from '../classes/Soldier';
import logo from '../assets/soldier.png';
import HpBar from './HPBar';
import Damage from './Damage';
import Reload from './Reload';

type Props = {
  soldier: Soldier;
};

const SoldierComp: FC<Props> = observer(
  ({ soldier: { health, experience, recharge, damage, isActive } }) => (
    <div
      style={{
        background: '#fff',
        margin: '0.5em',
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: isActive ? 1 : 0.5,
      }}
    >
      <HpBar health={health} />

      <div>
        <img src={logo} alt="soldier" width={50} height={50} />

        <div>
          <Damage damage={damage} />

          <Reload reload={recharge} />

          <div>{`XP: ${experience}`}</div>
        </div>
      </div>
    </div>
  ),
);

export default SoldierComp;
