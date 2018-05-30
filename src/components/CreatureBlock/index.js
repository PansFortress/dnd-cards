import React from 'react';

const CreatureBlock = (props) => {
  const { creature } = props;
  
  return (
  <div>
    {creature.name}
  </div>
  );
}

export default CreatureBlock;