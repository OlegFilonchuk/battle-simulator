import React, {
  ChangeEvent,
  EventHandler,
  FC,
  MouseEvent,
  ReactElement,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { createArmyAction } from '../../state/armyAC';

const ArmyForm: FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [squadsCount, setSquadsCount] = useState(2);

  const changeName: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) =>
    setName(ev.target.value);

  const changeSquadCount: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    setSquadsCount(+ev.target.value);
  };

  const handleCreateArmy: EventHandler<MouseEvent<HTMLButtonElement>> = (
    ev,
  ) => {
    ev.preventDefault();
    if (!name) return;
    dispatch(createArmyAction(name, squadsCount));
    setName('');
  };

  const renderSquadFields = () => {
    const result: ReactElement[] = [];
    for (let i = 1; i <= squadsCount; i++) {
      result.push(
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label key={i}>
          {`enter number of members for ${i} squad`}
          <input type="number" />
        </label>,
      );
    }
    return result;
  };

  return (
    <form
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0.5em',
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Insert army name"
        value={name}
        onChange={changeName}
      />

      <label htmlFor="squadsCount">
        Select number of squads
        <select name="squadsCount" onChange={changeSquadCount} defaultValue={2}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>

      {renderSquadFields()}

      <button type="submit" onClick={handleCreateArmy}>
        create army
      </button>
    </form>
  );
};

export default ArmyForm;
