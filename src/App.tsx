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
import Army from './classes/Army';

const App: FC = () => {
  const armies: Army[] = useSelector((state) => state.armies);

  const dispatch: Dispatch = useDispatch();

  const [name, setName] = useState('');

  const changeName: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) => {
    setName(ev.target.value);
  };

  const attack: EventHandler<MouseEvent<HTMLButtonElement>> = () => {
    armies.forEach((item) => item.attack());
    dispatch(updateArmyAction());
  };

  const hasWinner: () => boolean | Army = () =>
    armies.filter((item) => item.isActive).length <= 1
      ? armies.find((item) => item.isActive)
      : false;

  const handleFight: EventHandler<MouseEvent<HTMLButtonElement>> = () => {
    const checkTargets = armies.every((item) => !!item.target);
    const checkTactics = armies.every((item) => !!item.tactics);

    if (!checkTactics || !checkTargets) return;

    while (!hasWinner()) {
      armies.forEach((item) => item.attack());
    }
    dispatch(updateArmyAction());
  };

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
        single attack!
      </button>

      <button type="button" onClick={handleFight}>
        fight
      </button>

      {!!hasWinner() && <div>{`Winner: ${(hasWinner() as Army).name}`}</div>}

      <ArmyList armies={armies} />
    </div>
  );
};

export default App;
