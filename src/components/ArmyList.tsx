import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Army from '../classes/Army';
import ArmyComp from './ArmyComp';

const ArmyList: FC = () => {
  const armies: Army[] = useSelector((state) => state.armies);
  return (
    <div>
      {Object.values(armies).map((item) => (
        <ArmyComp key={item.name} army={item} />
      ))}
    </div>
  );
};

export default ArmyList;
