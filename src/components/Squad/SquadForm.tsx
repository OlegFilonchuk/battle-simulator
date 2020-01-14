import React, {
  ChangeEvent,
  EventHandler,
  FC,
  ReactElement,
  useState,
} from 'react';

type Props = {
  i: number;
  onChange: (i: number, value: number) => void;
  initialValue: number;
};

const SquadForm: FC<Props> = ({ i, onChange, initialValue }) => {
  const [number, setNumber] = useState(initialValue);

  const handleChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (ev) => {
    setNumber(+ev.target.value);
    onChange(i, +ev.target.value);
  };

  const renderOptions: () => ReactElement[] = () => {
    const result: ReactElement[] = [];
    for (let j = 5; j < 11; j++) {
      result.push(
        <option key={j} value={j}>
          {j}
        </option>,
      );
    }
    return result;
  };

  return (
    <label htmlFor={`squad${i}`}>
      {`Squad ${i + 1} members count: `}
      <select onChange={handleChange} name={`squad${i}`} value={number}>
        {renderOptions()}
      </select>
    </label>
  );
};

export default SquadForm;
