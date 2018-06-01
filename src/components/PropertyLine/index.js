import React from 'react';
import './styles.css';

const PropertyLine = props => {
  const { position, name, desc, color } = props;
  const classNames = position
    ? `property-line ${position}`.trim()
    : 'property-line';

  return (
    <div className={[classNames, color].join(' ')}>
      <h4>{name}: </h4>
      <p>{desc}</p>
    </div>
  );
};

export default PropertyLine;
