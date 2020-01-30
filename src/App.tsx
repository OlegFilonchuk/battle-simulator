import React, { FC } from 'react';
import { observer } from 'mobx-react';
import ArmyList from './components/Army/ArmyList';
import Army from './classes/Army';
import ArmyForm from './components/Army/ArmyForm';
import store from './mobxStore';

const App: FC = observer(() => {
  const {
    armies,
    hasWinner,
    /* fight, */
    quickFight,
    checkTargets,
  } = store.battle;

  return (
    <div>
      <ArmyForm armies={armies} />

      <button type="button" onClick={quickFight} disabled={!checkTargets()}>
        fight
      </button>

      {!!hasWinner() && <div>{`Winner: ${(hasWinner() as Army).name}`}</div>}

      <ArmyList armies={armies} />
    </div>
  );
});

export default App;
