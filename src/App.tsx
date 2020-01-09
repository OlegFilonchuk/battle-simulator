import * as React from 'react';
import Squad from './classes/Squad';

const App: React.FC = () => {
  const s1 = new Squad();

  const attackHandler = () => {
    s1.attack();
    setTimeout(() => console.log(s1), 50);
  };

  const getAttackedHandler = () => {
    s1.getAttacked(5);
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
