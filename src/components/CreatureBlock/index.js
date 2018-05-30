import React from 'react';
import Header from '../Header';
import TaperedRule from '../TaperedRule';
import TopStatsBlock from '../TopStatsBlock';

const CreatureBlock = props => {
  const { data } = props;

  return (
    <div>
      <Header data={data} />
      <TaperedRule />
      <TopStatsBlock data={data} />
      <StatBlock data={data} />
    </div>
  );
};

export default CreatureBlock;

const StatBlock = props => {
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
  } = props.data;

  return (
    <div>
      {strength}, {dexterity}, {constitution}, {intelligence}, {wisdom},
      {charisma}
    </div>
  );
};
