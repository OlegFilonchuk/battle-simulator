import React, {
  Component,
  ChangeEvent,
  EventHandler,
  MouseEvent,
  ReactElement,
} from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { CreateArmyAction, createArmyAction } from '../../state/armyAC';
import SquadForm from '../Squad/SquadForm';
import { armiesCounterSelector } from '../../state/selectors';

type Props = {
  createArmy: ActionCreator<CreateArmyAction>;
  armiesCount: number;
};

type State = {
  armyName: string;
  squadsCount: number;
  squadState: number[];
};

class ArmyForm extends Component<Props, State> {
  state: State = {
    armyName: '',
    squadsCount: 2,
    squadState: [],
  };

  componentDidMount(): void {
    const { squadsCount } = this.state;
    const squadState = new Array(squadsCount).fill(undefined);
    this.setState({
      squadState,
    });
  }

  setName: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) =>
    this.setState({
      armyName: ev.target.value,
    });

  setSquadCount: EventHandler<ChangeEvent<HTMLSelectElement>> = (ev) => {
    const { squadState, squadsCount } = this.state;
    const newSquadState = [...squadState];
    newSquadState.length = +ev.target.value;
    for (let i = squadsCount - 1; i < +ev.target.value; i++) {
      newSquadState[i] = undefined;
    }

    this.setState({
      squadsCount: +ev.target.value,
      squadState: newSquadState,
    });
  };

  handleCreateArmy: EventHandler<MouseEvent<HTMLButtonElement>> = (ev) => {
    ev.preventDefault();
    const { createArmy } = this.props;
    const { armyName, squadState } = this.state;

    if (!armyName) return;
    createArmy(armyName, squadState);

    this.setState({
      armyName: '',
    });
  };

  handleChangeSquad = (ev, i) => {
    const { squadState } = this.state;
    const newSquadState: number[] = [...squadState];

    newSquadState[i] = +ev.target.value;

    this.setState({
      squadState: newSquadState,
    });
  };

  renderSquadFields: () => ReactElement[] = () => {
    const { squadsCount } = this.state;
    const result: ReactElement[] = [];
    for (let i = 0; i < squadsCount; i++) {
      result.push(
        <SquadForm
          key={i}
          i={i}
          onChange={(ev) => this.handleChangeSquad(ev, i)}
        />,
      );
    }
    return result;
  };

  render() {
    const { armyName, squadsCount } = this.state;
    const { armiesCount } = this.props;
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
        {`Create army ${armiesCount + 1}: `}
        <input
          type="text"
          name="name"
          placeholder="Insert army name"
          value={armyName}
          onChange={this.setName}
        />
        <label htmlFor="squadsCount">
          Select number of squads
          <select
            name="squadsCount"
            onChange={this.setSquadCount}
            defaultValue={squadsCount}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        {this.renderSquadFields()}
        <button type="submit" onClick={this.handleCreateArmy}>
          create army
        </button>
      </form>
    );
  }
}

export default connect(armiesCounterSelector, { createArmy: createArmyAction })(
  ArmyForm,
);
