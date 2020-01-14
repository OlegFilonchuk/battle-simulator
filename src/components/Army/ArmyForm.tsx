import React, {
  Component,
  ChangeEvent,
  EventHandler,
  MouseEvent,
  ReactElement,
} from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { ArmyCreateAction, armyCreateAction } from '../../state/armyAC';
import SquadForm from '../Squad/SquadForm';
import Army from '../../classes/Army';

type Props = {
  createArmy: ActionCreator<ArmyCreateAction>;
  armies: Army[];
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
    const squadState = new Array(squadsCount).fill(5);
    this.setState({
      squadState,
    });
  }

  handleNameChange: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) =>
    this.setState({
      armyName: ev.target.value,
    });

  handleSquadCountChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (
    ev,
  ) => {
    const { squadState, squadsCount } = this.state;
    const newSquadState = [...squadState];
    newSquadState.length = +ev.target.value;
    for (let i = squadsCount; i < +ev.target.value; i++) {
      newSquadState[i] = 5;
    }

    this.setState({
      squadsCount: +ev.target.value,
      squadState: newSquadState,
    });
  };

  changeSquad: (i: number, value: number) => void = (i, value) => {
    const { squadState } = this.state;
    const newSquadState: number[] = [...squadState];

    newSquadState[i] = value;

    this.setState({
      squadState: newSquadState,
    });
  };

  renderSquadFields: () => ReactElement[] = () => {
    const { squadState } = this.state;
    const result: ReactElement[] = [];
    for (let i = 0; i < squadState.length; i++) {
      result.push(
        <SquadForm
          initialValue={squadState[i]}
          key={i}
          i={i}
          onChange={this.changeSquad}
        />,
      );
    }
    return result;
  };

  checkName: () => boolean = () => {
    const { armyName } = this.state;
    const { armies } = this.props;
    return armyName && !armies.map((item) => item.name).includes(armyName);
  };

  handleArmyCreate: EventHandler<MouseEvent<HTMLButtonElement>> = (ev) => {
    ev.preventDefault();
    const { createArmy, armies } = this.props;
    const { armyName, squadState } = this.state;

    if (!armyName || armies.map((item) => item.name).includes(armyName)) return;
    createArmy(armyName, squadState);

    this.setState({
      armyName: '',
    });
  };

  render() {
    const { armyName, squadsCount } = this.state;
    const { armies } = this.props;
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
        {`Create army ${armies.length + 1}: `}
        <input
          type="text"
          name="name"
          placeholder="Insert army name"
          value={armyName}
          onChange={this.handleNameChange}
        />
        <label htmlFor="squadsCount">
          Select number of squads
          <select
            name="squadsCount"
            onChange={this.handleSquadCountChange}
            defaultValue={squadsCount}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        {this.renderSquadFields()}
        <button
          type="submit"
          onClick={this.handleArmyCreate}
          disabled={!this.checkName()}
        >
          create army
        </button>
      </form>
    );
  }
}

export default connect(
  ({ armies }) => ({
    armies,
  }),
  { createArmy: armyCreateAction },
)(ArmyForm);
