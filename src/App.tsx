import React, {
  ChangeEvent,
  EventHandler,
  FC,
  MouseEvent,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import ArmyList from './components/ArmyList';
import { createArmyAction, updateArmyAction } from './state/armyAC';

const App: FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const changeName: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) => {
    setName(ev.target.value);
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

      <button type="button">Fight!</button>

      <ArmyList />
    </div>
  );
};

export default App;
