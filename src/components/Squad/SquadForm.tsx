import React, { FC } from 'react';

type Props = {
  i: number;
  onChange: (ev: any) => void;
};

const SquadForm: FC<Props> = ({ i, onChange }) => {
  return (
    <label htmlFor={`squad${i}`}>
      {`Squad ${i + 1}: `}
      <input
        onChange={onChange}
        name={`squad${i}`}
        type="number"
        placeholder="Members (5...10)"
      />
    </label>
  );
};

export default SquadForm;
