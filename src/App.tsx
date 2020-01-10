import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { createSquadAction } from './state/AC';
import SquadList from './components/SquadList';

const App: FC = () => {
  let counter = 0;
  const dispatch: Dispatch = useDispatch();

  const handleClick: () => void = () => {
    dispatch(createSquadAction(`squad${counter}`));
    counter++;
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        create squad
      </button>
      <SquadList />
    </div>
  );
};

export default App;
