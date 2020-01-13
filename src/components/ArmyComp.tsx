import React, { ChangeEvent, EventHandler, FC } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import SquadList from './SquadList';
import Army from '../classes/Army';
import { changeTacticsAction, setTargetAction } from '../state/armyAC';

type Props = {
  army: Army;
};

const ArmyComp: FC<Props> = ({ army: { squads, name, target }, army }) => {
  const dispatch: Dispatch = useDispatch();

  const armies: Army[] = Object.values(useSelector((state) => state.armies));

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

  console.log(army);
  return (
    <div style={{ background: 'lightpink', margin: '2em' }}>
      <h2>{name}</h2>

      <div>
        target:
        {target?.name}
      </div>

      <label htmlFor="target">
        Select target
        <select name="target" onChange={handleTargetChange}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <option value="" />
          {armies.map((item) => (
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
