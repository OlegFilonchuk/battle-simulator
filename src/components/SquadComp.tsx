import React, { FC } from 'react';
import Squad from '../classes/Squad';

type Props = {
  squad: Squad;
};

const SquadComp: FC<Props> = ({
  squad: { membersCount, members, attackSuccess, damage, attack, getAttacked },
}) => {
  const handleAttack = () => {
    attack();
  };

  const handleGetAttacked = () => {
    getAttacked(10);
  };

  return (
    <div>
      <h2>Squad</h2>
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
