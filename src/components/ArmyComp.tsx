import React, { EventHandler, FC, MouseEvent, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { SquadState } from '../utils/types';
import { createSquadAction, updateSquadAction } from '../state/AC';
import SquadList from './SquadList';
import Army from '../classes/Army';

type Props = {
  army: Army;
};

const ArmyComp: FC<Props> = ({ army: { squads } }) => {
  const [counter, setCounter] = useState(0);
  const dispatch: Dispatch = useDispatch();

  const hasWinner: () => boolean = () =>
    Object.values(squads).filter((item) => item.isActive).length === 1;

  const handleCreateSquad: EventHandler<MouseEvent> = () => {
    dispatch(createSquadAction(`squad${counter}`));
    setCounter(counter + 1);
  };

  const handleStartFight: EventHandler<MouseEvent> = () => {
    if (!Object.values(squads).every((item) => item.target)) {
      console.log('set targets!');
      return;
    }

    while (!hasWinner()) {
      Object.values(squads).forEach((item) => item.attack());
      dispatch(updateSquadAction());
    }
  };

  return (
    <div>
      <button type="button" onClick={handleCreateSquad}>
        create squad
      </button>

      <button type="button" onClick={handleStartFight}>
        FIGHT!
      </button>
      <div>{hasWinner() && 'WINNER'}</div>
      <SquadList squads={squads} />
    </div>
  );
};

export default ArmyComp;
