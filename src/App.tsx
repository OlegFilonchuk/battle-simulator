import React, { EventHandler, FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { createSquadAction } from './state/AC';
import SquadList from './components/SquadList';

const App: FC = () => {
  let counter = 0;
  const dispatch: Dispatch = useDispatch();

  const handleCreateSquad: EventHandler<MouseEvent> = () => {
    dispatch(createSquadAction(`squad${counter}`));
    counter++;
  };

  const handleAttackTarget: EventHandler<MouseEvent> = () => {
    console.log('target attacked');
  };

  return (
    <div>
      <button type="button" onClick={handleCreateSquad}>
        create squad
      </button>
      <SquadList />
    </div>
  );
};

export default App;
