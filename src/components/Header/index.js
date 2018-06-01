import React from 'react';
import './styles.css';

const Header = props => {
  const { header, subheader, color } = props;

  return (
    <div className={['creature-heading', color].join(' ')}>
      <h1>{header}</h1>
      {subheader && <h2>{subheader}</h2>}
    </div>
  );
};

export default Header;
