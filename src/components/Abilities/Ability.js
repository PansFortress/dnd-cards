import React from 'react';
import { getModifier } from '../../utils';

const Ability = props => {
  const modifier = getModifier(props.details);
  const attributeString = `${props.details} (${modifier})`;

  return (
    <div>
      <h4>{props.title}</h4>
      <p>{attributeString}</p>
    </div>
  );
};

export default Ability;
