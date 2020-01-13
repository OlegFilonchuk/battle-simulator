import React, { EventHandler, FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import ArmyList from './components/ArmyList';
import { createArmyAction } from './state/armyAC';

const App: FC = () => {
  const dispatch = useDispatch();
  const handleCreateArmy: EventHandler<MouseEvent> = () => {
    dispatch(createArmyAction('blah'));
  };
  return (
    <div>
      <button type="button" onClick={handleCreateArmy}>
        create army
      </button>

      <ArmyList />
    </div>
  );
};

export default App;
