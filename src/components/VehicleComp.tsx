import React, { FC } from 'react';
import Vehicle from '../classes/Vehicle';
import SoldierComp from './SoldierComp';
import logo from '../assets/vehicle.png';
import HpBar from './HPBar';
import Damage from './Damage';
import Reload from './Reload';

type Props = {
  vehicle: Vehicle;
};

const VehicleComp: FC<Props> = ({
  vehicle: { operators, health, recharge, damage },
}) => (
  <div
    style={{
      background: '#888',
      padding: '0.5em',
      margin: '0.5em',
      alignSelf: 'stretch',
    }}
  >
    <HpBar health={health} />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="vehicle" style={{ width: '100%', maxWidth: 150 }} />

      <div>
        <Damage damage={damage} />

        <Reload reload={recharge} />
      </div>
    </div>

    <ul style={{ display: 'flex', width: 246 }}>
      {operators.map((item, i) => (
        <li key={i}>
          <SoldierComp soldier={item} />
        </li>
      ))}
    </ul>
  </div>
);

export default VehicleComp;
