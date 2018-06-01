import React from 'react';
import './styles.css';

const TaperedRule = props => {
  const { color } = props;

  return (
    <svg className={['tapered-rule', color].join(' ')} height="5" width="100%">
      <polyline points="0,0 400,2.5 0,5" />
    </svg>
  );
};

export default TaperedRule;
