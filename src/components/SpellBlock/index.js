import React from 'react';
import Header from '../Header';
import TaperedRule from '../TaperedRule';
import PropertyLine from '../PropertyLine';

import './styles.css';
import PropertyBlock from '../PropertyBlock';

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
      <Header header={name} color="blue" />
      <TaperedRule color="blue" />
      <PropertyLine name="Level" desc={level} position="first" color="blue" />
      <PropertyLine name="Components" desc={components} color="blue" />
      <PropertyLine name="Casting Time" desc={casting_time} color="blue" />
      <PropertyLine name="Range" desc={range} color="blue" />
      <PropertyLine name="School" desc={school} color="blue" />
      <PropertyLine
        name="Duration"
        desc={duration}
        position="last"
        color="blue"
      />
      <TaperedRule color="blue" />
      <PropertyBlock name="Description" desc={description} />
    </div>
  );
};

export default SpellBlock;
