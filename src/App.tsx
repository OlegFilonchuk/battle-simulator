import React, {
  ChangeEvent,
  EventHandler,
  FC,
  MouseEvent,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import ArmyList from './components/ArmyList';
import { createArmyAction, updateArmyAction } from './state/armyAC';
import { ArmyState } from './utils/types';

const App: FC = () => {
  const armies: ArmyState = useSelector((state) => state.armies);

  const dispatch: Dispatch = useDispatch();

  const [name, setName] = useState('');

  const changeName: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) => {
    setName(ev.target.value);
  };

  const attack = () => {
    Object.values(armies).forEach((item) => item.attack());
    dispatch(updateArmyAction());
  };

  // const hasWinner: () => boolean = () =>
  //   Object.values(squads).filter((item) => item.isActive).length === 1;
  //
  // const handleStartFight: EventHandler<MouseEvent> = () => {
  //   while (!hasWinner()) {
  //     Object.values(squads).forEach((item) => item.attack());
  //     dispatch(updateArmyAction());
  //   }
  // };

  const handleCreateArmy: EventHandler<MouseEvent<HTMLButtonElement>> = () => {
    dispatch(createArmyAction(name));
    setName('');
  };
  return (
    <div>
      <input
        type="text"
        placeholder="insert army name"
        value={name}
        onChange={changeName}
      />

      <button type="button" onClick={handleCreateArmy}>
        create army
      </button>

      <button type="button" onClick={attack}>
        attack!
      </button>

      <ArmyList armies={armies} />
    </div>
  );
};

export default App;
