import React from 'react';
import './Grid.scss';

function Grid({ cols, children }) {
  return (
    <div className={`Grid Grid_cols_${cols}`}>
      {children}
    </div>
  );
}

export default Grid;
