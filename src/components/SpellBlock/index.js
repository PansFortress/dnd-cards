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
      <PropertyLine name="Level" desc={level} position="first" />
      <PropertyLine name="Components" desc={components} />
      <PropertyLine name="Casting Time" desc={casting_time} />
      <PropertyLine name="Range" desc={range} />
      <PropertyLine name="School" desc={school} />
      <PropertyLine name="Duration" desc={duration} position="last" />
      <TaperedRule color="blue" />
      <PropertyBlock name="Description" desc={description} />
    </div>
  );
};

export default SpellBlock;
