import React, {
  ChangeEvent,
  EventHandler,
  FC,
  useEffect,
  useState,
} from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import SquadList from '../Squad/SquadList';
import Army from '../../classes/Army';
import { tacticsChangeAction, targetChangeAction } from '../../state/armyAC';
import armiesSelector from '../../state/selectors';
import { Tactics } from '../../utils/types';

type Props = {
  army: Army;
};

const ArmyComp: FC<Props> = ({ army: { squads, name, isActive, tactics } }) => {
  const dispatch: Dispatch = useDispatch();
  const armies: Army[] = useSelector(armiesSelector);

  const [targetName, setTargetName] = useState('');
  const [tacticsName, setTacticsName] = useState(tactics);

  useEffect(() => {
    if (armies.length > 1 && !targetName) {
      const target = armies.find((item) => item.name !== name);
      setTargetName(target?.name);
      dispatch(targetChangeAction(name, target?.name));
    }
  }, [armies.length, armies, dispatch, name, targetName]);

  const handleTargetChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    setTargetName(ev.target.value);
    dispatch(targetChangeAction(name, ev.target.value));
  };

  const handleTacticsChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    setTacticsName(ev.target.value as Tactics);
    dispatch(tacticsChangeAction(name, ev.target.value));
  };

  return (
    <div
      style={{
        background: 'lightpink',
        padding: '.5em',
        margin: '0.5em',
        opacity: isActive ? 1 : 0.5,
      }}
    >
      <h2>{name}</h2>

      <div>{isActive ? 'active' : 'dead'}</div>

      <label htmlFor="target">
        Select target
        <select name="target" onChange={handleTargetChange} value={targetName}>
          {armies
            .filter((item) => item.name !== name)
            .map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      </label>

      <label htmlFor="tactics">
        Select tactics
        <select
          name="tactics"
          onChange={handleTacticsChange}
          value={tacticsName}
        >
          <option value="weakest">weakest</option>
          <option value="strongest">strongest</option>
          <option value="random">random</option>
        </select>
      </label>

      <SquadList squads={squads} />
    </div>
  );
};

export default ArmyComp;
