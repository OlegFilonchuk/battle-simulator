import React, { EventHandler, FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import ArmyList from './components/Army/ArmyList';
import { armyUpdateAction } from './state/armyAC';
import Army from './classes/Army';
import ArmyForm from './components/Army/ArmyForm';
import armiesSelector from './state/selectors';

const App: FC = () => {
  const armies: Army[] = useSelector(armiesSelector);

  const dispatch: Dispatch = useDispatch();

  const hasWinner: () => boolean | Army = () =>
    armies.filter((item) => item.isActive).length <= 1
      ? armies.find((item) => item.isActive)
      : false;

  const checkPassed: () => boolean = () => {
    return armies.length > 0 && armies.every((item) => !!item.target);
  };

  const handleFight: EventHandler<MouseEvent<HTMLButtonElement>> = () => {
    const int = setInterval(() => {
      armies.forEach((item) => item.attack());
      dispatch(armyUpdateAction());
      if (hasWinner()) clearInterval(int);
    }, 50);
  };

  return (
    <div>
      <ArmyForm />

      <button type="button" onClick={handleFight} disabled={!checkPassed()}>
        fight
      </button>

      {!!hasWinner() && <div>{`Winner: ${(hasWinner() as Army).name}`}</div>}

      <ArmyList armies={armies} />
    </div>
  );
};

export default App;
