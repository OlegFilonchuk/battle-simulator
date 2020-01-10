import React, { EventHandler, FC, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { createSquadAction, updateSquadAction } from './state/AC';
import SquadList from './components/SquadList';
import { SquadState } from './utils/types';

const App: FC = () => {
  const [counter, setCounter] = useState(0);
  const dispatch: Dispatch = useDispatch();

  const squads: SquadState = useSelector((state) => state.squads);
  const hasWinner: boolean =
    Object.values(squads).filter((item) => item.isActive).length === 1;

  const handleCreateSquad: EventHandler<MouseEvent> = () => {
    dispatch(createSquadAction(`squad${counter}`));
    setCounter(counter + 1);
  };

  const handleStartFight: EventHandler<MouseEvent> = () => {
    Object.values(squads).forEach((item) => item.attack());
    dispatch(updateSquadAction());
  };

  return (
    <div>
      <button type="button" onClick={handleCreateSquad}>
        create squad
      </button>

      <button type="button" onClick={handleStartFight}>
        start fight!
      </button>
      <div>{hasWinner && 'WINNER'}</div>

      <SquadList />
    </div>
  );
};

export default App;
