import React from 'react';
import './styles.css';

const PropertyLine = props => {
  const { position, title, details } = props;
  const classNames = position
    ? `property-line ${position}`.trim()
    : 'property-line';

  return (
    <div className={classNames}>
      <h4>{title}: </h4>
      <p>{details}</p>
    </div>
  );
};

export default PropertyLine;
