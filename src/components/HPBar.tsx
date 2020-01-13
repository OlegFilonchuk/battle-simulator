import React, { FC } from 'react';

type Props = {
  health: number;
};

const HpBar: FC<Props> = ({ health }) => {
  return (
    <div style={{ background: 'darkred', height: 10 }}>
      <div
        style={{ background: 'green', height: '100%', width: `${health}%` }}
      />
    </div>
  );
};

export default HpBar;
