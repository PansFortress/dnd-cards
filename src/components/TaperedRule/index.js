import React from 'react';
import './styles.css';

const TaperedRule = props => {
  return (
    <svg className="tapered-rule" height="5" width="100%">
      <polyline points="0,0 400,2.5 0,5" />
    </svg>
  );
};

export default TaperedRule;
