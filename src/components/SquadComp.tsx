import React, { ChangeEvent, EventHandler, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Squad from '../classes/Squad';
import { changeTargetAction } from '../state/AC';
import Soldier from '../classes/Soldier';
import SoldierComp from './SoldierComp';
import VehicleComp from './VehicleComp';

type Props = {
  squad: Squad;
};

const SquadComp: FC<Props> = ({
  squad: { name, membersCount, members, damage, isActive },
}) => {
  const dispatch: Dispatch = useDispatch();
  const targets = useSelector((state) => Object.values(state.squads));

  const handleSetTarget: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    dispatch(changeTargetAction(name, ev.target.value));
  };

  return (
    <div style={{ background: '#ddd', padding: '1em', margin: '1em' }}>
      <h2>{name}</h2>
      <div>{`Members count: ${membersCount}`}</div>
      <div>{`damage: ${damage}`}</div>
      <div style={{ background: isActive ? 'green' : 'red' }}>
        {isActive ? 'active' : 'dead'}
      </div>

      <label htmlFor="target">
        Select a target
        <select name="target" onChange={handleSetTarget}>
          <option value="">None</option>
          {targets.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>

      <ul>
        members:
        {members.map((item, i) => {
          const comp =
            item instanceof Soldier ? (
              <SoldierComp soldier={item} />
            ) : (
              <VehicleComp vehicle={item} />
            );
          // eslint-disable-next-line react/no-array-index-key
          return <li key={i}>{comp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SquadComp;
