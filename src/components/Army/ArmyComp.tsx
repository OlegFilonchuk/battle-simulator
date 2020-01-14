import React, { ChangeEvent, EventHandler, FC } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import SquadList from '../Squad/SquadList';
import Army from '../../classes/Army';
import { changeTacticsAction, setTargetAction } from '../../state/armyAC';
import armiesSelector from '../../state/selectors';

type Props = {
  army: Army;
};

const ArmyComp: FC<Props> = ({ army: { squads, name, isActive } }) => {
  const dispatch: Dispatch = useDispatch();

  const armies: Army[] = useSelector(armiesSelector);

  const handleTargetChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    dispatch(setTargetAction(name, ev.target.value));
  };

  const handleTacticsChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    dispatch(changeTacticsAction(name, ev.target.value));
  };

  return (
    <div
      style={{
        background: 'lightpink',
        padding: '.5em',
        margin: '0.5em',
        opacity: isActive ? 1 : 0.7,
      }}
    >
      <h2>{name}</h2>

      <div>{isActive ? 'active' : 'dead'}</div>

      <label htmlFor="target">
        Select target
        <select name="target" onChange={handleTargetChange}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <option value="" />
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
        <select name="tactics" onChange={handleTacticsChange}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <option value="" />
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
