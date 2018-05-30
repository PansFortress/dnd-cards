import React from 'react';
import './styles.css';

const Header = props => {
  const { name, size, type, subtype, alignment } = props.data;
  const cType = `${size} ${type} ${subtype}`.trim();

  return (
    <div className="creature-heading">
      <h1>{name}</h1>
      <h2>
        {cType}, {alignment}
      </h2>
    </div>
  );
};

export default Header;
