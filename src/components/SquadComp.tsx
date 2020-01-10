import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Squad from '../classes/Squad';
import { changeTargetAction, updateSquadAction } from '../state/AC';
import Soldier from '../classes/Soldier';
import SoldierComp from './SoldierComp';
import VehicleComp from './VehicleComp';

type Props = {
  squad: Squad;
};

const SquadComp: FC<Props> = ({
  squad: {
    name,
    membersCount,
    members,
    attackSuccess,
    minAttackSuccess,
    maxAttackSuccess,
    damage,
    attack,
    getAttacked,
  },
}) => {
  const dispatch: Dispatch = useDispatch();
  const targets = useSelector((state) => Object.values(state.squads));

  const handleAttack = () => {
    attack();
    dispatch(updateSquadAction());
  };

  const handleGetAttacked = () => {
    getAttacked(10);
    dispatch(updateSquadAction());
  };

  const handleSetTarget = (ev) => {
    dispatch(changeTargetAction(name, ev.target.value));
  };

  return (
    <div style={{ background: 'skyblue', padding: '1em', margin: '1em' }}>
      <h2>{name}</h2>
      <div>{`Members count: ${membersCount}`}</div>
      <div>{`attackSuccess: ${minAttackSuccess} ... ${maxAttackSuccess}`}</div>
      <div>{`damage: ${damage}`}</div>

      <select name="target" onChange={handleSetTarget}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option value="">Select a target</option>
        {targets.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <button type="button" onClick={handleAttack}>
        attack
      </button>

      <button type="button" onClick={handleGetAttacked}>
        get attacked
      </button>
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
