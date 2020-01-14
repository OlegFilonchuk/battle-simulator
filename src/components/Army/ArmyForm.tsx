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

type Props = {
  createArmy: ActionCreator<CreateArmyAction>;
};

type State = {
  armyName: string;
  squadsCount: number;
};

class ArmyForm extends Component<Props, State> {
  state: State = {
    armyName: '',
    squadsCount: 2,
  };

  setName: EventHandler<ChangeEvent<HTMLInputElement>> = (ev) =>
    this.setState({
      armyName: ev.target.value,
    });

  setSquadCount: EventHandler<ChangeEvent<HTMLSelectElement>> = (ev) =>
    this.setState({
      squadsCount: +ev.target.value,
    });

  handleCreateArmy: EventHandler<MouseEvent<HTMLButtonElement>> = (ev) => {
    ev.preventDefault();
    const { createArmy } = this.props;
    const { armyName, squadsCount } = this.state;

    if (!armyName) return;
    createArmy(armyName, squadsCount);
  };

  renderSquadFields = () => {
    const { squadsCount } = this.state;
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

  render() {
    const { armyName } = this.state;
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
          value={armyName}
          onChange={this.setName}
        />

        <label htmlFor="squadsCount">
          Select number of squads
          <select
            name="squadsCount"
            onChange={this.setSquadCount}
            defaultValue={2}
          >
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

export default connect(null, { createArmy: createArmyAction })(ArmyForm);
