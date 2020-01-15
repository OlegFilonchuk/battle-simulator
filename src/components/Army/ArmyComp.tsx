import React, {
  ChangeEvent,
  EventHandler,
  FC,
  useEffect,
  useState,
} from 'react';
import { observer } from 'mobx-react';
import SquadList from '../Squad/SquadList';
import Army from '../../classes/Army';
import { Tactics } from '../../utils/types';
import store from '../../mobxStore';

type Props = {
  army: Army;
};

const ArmyComp: FC<Props> = observer(
  ({ army: { squads, name, isActive, tactics } }) => {
    const { armies } = store;

    const [targetName, setTargetName] = useState('');
    const [tacticsName, setTacticsName] = useState(tactics);

    useEffect(() => {
      if (armies.length > 1 && !targetName) {
        const target = armies.find((item) => item.name !== name);
        setTargetName(target?.name);
        armies.find((item) => item.name === name).target = armies.find(
          (item) => item.name === target.name,
        );
      }
    }, [armies.length, armies, name, targetName]);

    const handleTargetChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
      ev,
    ) => {
      setTargetName(ev.target.value);
      armies.find((item) => item.name === name).target = armies.find(
        (item) => item.name === ev.target.value,
      );
    };

    const handleTacticsChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
      ev,
    ) => {
      setTacticsName(ev.target.value as Tactics);
      armies.find((item) => item.name === name).tactics = ev.target
        .value as Tactics;
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
          <select
            name="target"
            onChange={handleTargetChange}
            value={targetName}
          >
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
  },
);

export default ArmyComp;
