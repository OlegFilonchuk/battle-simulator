import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Squad from '../classes/Squad';
import { updateSquadAction } from '../state/AC';

type Props = {
  squad: Squad;
};

const SquadComp: FC<Props> = ({
  squad: {
    name,
    membersCount,
    members,
    attackSuccess,
    damage,
    attack,
    getAttacked,
  },
}) => {
  const dispatch: Dispatch = useDispatch();

  const handleAttack = () => {
    attack();
    dispatch(updateSquadAction());
  };

  const handleGetAttacked = () => {
    getAttacked(10);
    dispatch(updateSquadAction());
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{`Members count: ${membersCount}`}</p>
      <p>{`attackSuccess: ${attackSuccess}`}</p>
      <p>{`damage: ${damage}`}</p>

      <button type="button" onClick={handleAttack}>
        attack
      </button>

      <button type="button" onClick={handleGetAttacked}>
        get attacked
      </button>
      <pre>{JSON.stringify(members, null, 2)}</pre>
    </div>
  );
};

export default SquadComp;
