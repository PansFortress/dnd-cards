import React from 'react';
import PropertyBlock from '../PropertyBlock';
import './styles.css';

const ActionBlock = props => {
  const { title, data } = props;
  return (
    <div className="actions">
      <h3>{title}</h3>
      {data &&
        data.map(data => <PropertyBlock name={data.name} desc={data.desc} />)}
    </div>
  );
};

export default ActionBlock;
