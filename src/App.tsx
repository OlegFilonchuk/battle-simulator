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

  // const s1 = new Squad();
  //
  // const handleAttack = () => {
  //   s1.attack();
  // };
  //
  // const handleGetAttacked = () => {
  //   s1.getAttacked(10);
  // };
  // const handleLog = () => {
  //   console.log(s1);
  // };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        create squad
      </button>
      {/* <button type="button" onClick={handleAttack}>
        attack
      </button>
      <button type="button" onClick={handleGetAttacked}>
        get attacked
      </button>
      <button type="button" onClick={handleLog}>
        log
      </button> */}
      <SquadList />
    </div>
  );
};

export default App;
