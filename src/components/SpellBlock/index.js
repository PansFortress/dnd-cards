import React from 'react';
import Header from '../Header';
import TaperedRule from '../TaperedRule';
import PropertyLine from '../PropertyLine';

import './styles.css';

const SpellBlock = props => {
  const { name } = props;
  const {
    casting_time,
    components,
    description,
    duration,
    level,
    range,
    school
  } = props.data;

  return (
    <div className="spell-block wide ">
      <h4>{name}</h4>
      <PropertyLine title="Casting Time" details={casting_time} />
    </div>
  );
};

export default SpellBlock;
