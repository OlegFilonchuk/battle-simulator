import React, { FC } from 'react';
import ArmyComp from './ArmyComp';
import { ArmyState } from '../utils/types';

type Props = {
  armies: ArmyState;
};

const ArmyList: FC<Props> = ({ armies }) => {
  return (
    <div>
      {Object.values(armies).map((item) => (
        <ArmyComp key={item.name} army={item} />
      ))}
    </div>
  );
};

export default ArmyList;
