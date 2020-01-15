import React, { FC } from 'react';
import { observer } from 'mobx-react';
import ArmyComp from './ArmyComp';
import Army from '../../classes/Army';

type Props = {
  armies: Army[];
};

const ArmyList: FC<Props> = observer(({ armies }) => {
  return (
    <div style={{ display: 'flex' }}>
      {armies.map((item) => (
        <ArmyComp key={item.name} army={item} />
      ))}
    </div>
  );
});

export default ArmyList;
