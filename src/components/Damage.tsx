import React, { FC } from 'react';
import logo from '../assets/sword.png';

type Props = {
  damage: number;
};

const Damage: FC<Props> = ({ damage }) => {
  return (
    <div>
      <img src={logo} alt="sword" width={15} height={15} />
      {damage}
    </div>
  );
};

export default Damage;
