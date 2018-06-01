import React from 'react';
import './styles.css';

const PropertyBlock = props => {
  const { name, desc } = props;
  return (
    <div className="property-block">
      <h4>{name}. </h4>
      <pre>{desc}</pre>
    </div>
  );
};

export default PropertyBlock;
