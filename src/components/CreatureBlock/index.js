import React from 'react';
import Header from '../Header';
import TaperedRule from '../TaperedRule';
import TopStatsBlock from '../TopStatsBlock';
import './styles.css';

const CreatureBlock = props => {
  const { data } = props;

  return (
    <div className="stat-block wide">
      <div className="section-left">
        <Header data={data} />
        <TaperedRule />
        <TopStatsBlock data={data} />
      </div>
      <div className="section-right" />
    </div>
  );
};

export default CreatureBlock;
