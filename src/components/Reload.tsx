import React, { FC } from 'react';
import logo from '../assets/reload.png';

type Props = {
  reload: number;
};

const Reload: FC<Props> = ({ reload }) => {
  return (
    <div>
      <img src={logo} alt="reload" height={15} width={15} />
      {`${reload}s`}
    </div>
  );
};

export default Reload;
