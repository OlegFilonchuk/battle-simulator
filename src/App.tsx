import React, { EventHandler, FC, MouseEvent } from 'react';
import { observer } from 'mobx-react';
import ArmyList from './components/Army/ArmyList';
import Army from './classes/Army';
import ArmyForm from './components/Army/ArmyForm';
import store from './mobxStore';

const App: FC = observer(() => {
  const { armies } = store.battle;

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
      if (hasWinner()) clearInterval(int);
    }, 10);

    // while (!hasWinner()) {
    //   armies.forEach((item) => item.attack());
    // }
  };

  return (
    <div>
      <ArmyForm armies={armies} />

      <button type="button" onClick={handleFight} disabled={!checkPassed()}>
        fight
      </button>

      {!!hasWinner() && <div>{`Winner: ${(hasWinner() as Army).name}`}</div>}

      <ArmyList armies={armies} />
    </div>
  );
});

export default App;
