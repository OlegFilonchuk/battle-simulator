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
        name={`squad${i}`}
        type="number"
        placeholder="Number of members"
        onChange={onChange}
      />
    </label>
  );
};

export default SquadForm;
