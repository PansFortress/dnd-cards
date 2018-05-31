import React from 'react';
import PropertyBlock from '../PropertyBlock';

const SpecialAbilitiesBlock = props => {
  const { data } = props;
  return (
    <div>
      {data &&
        data.map(data => {
          return <PropertyBlock name={data.name} desc={data.desc} />;
        })}
    </div>
  );
};

export default SpecialAbilitiesBlock;
