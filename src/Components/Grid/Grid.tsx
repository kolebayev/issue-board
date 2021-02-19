import React from 'react';
import './Grid.scss';

type GridProps = {
  cols: number,
  children: React.ReactNode
};

function Grid({ cols, children }: GridProps) {
  return (
    <div className={`Grid Grid_cols_${cols}`}>
      {children}
    </div>
  );
}

export default Grid;
