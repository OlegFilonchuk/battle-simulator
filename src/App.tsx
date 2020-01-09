import * as React from 'react';
import Vehicle from './classes/Vehicle';
import { random } from './utils/helpers';

const App: React.FC = () => {
  const s1 = new Vehicle();

  const attackHandler = () => {
    s1.attack();
    setTimeout(() => console.log(s1), 50);
  };

  const getAttackedHandler = () => {
    s1.getAttacked(10);
    setTimeout(() => console.log(s1), 50);
  };

  return (
    <div>
      <button type="button" onClick={attackHandler}>
        attack!
      </button>
      <button type="button" onClick={getAttackedHandler}>
        get attacked!
      </button>
    </div>
  );
};

export default App;
