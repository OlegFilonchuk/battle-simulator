import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Squad from './classes/Squad';
import { createSquadAction } from './state/AC';

const App: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createSquadAction(new Squad()));
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        create squad
      </button>
    </div>
  );
};

export default App;
