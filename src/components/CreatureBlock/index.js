import React from 'react';
import Header from '../Header';
import TaperedRule from '../TaperedRule';
import TopStatsBlock from '../TopStatsBlock';
import SpecialAbilitiesBlock from '../SpecialAbilitiesBlock';
import ActionBlock from '../ActionBlock';
import './styles.css';

const CreatureBlock = props => {
  const { data } = props;

  return (
    <div className="stat-block wide">
      <div className="section-left">
        <Header data={data} />
        <TaperedRule />
        <TopStatsBlock data={data} />
        {data.special_abilities && (
          <SpecialAbilitiesBlock data={data.special_abilities} />
        )}
      </div>
      <div className="section-right">
        {data.actions && <ActionBlock title="Actions" data={data.actions} />}
        {data.legendary_actions && (
          <ActionBlock
            title="Legendary Actions"
            data={data.legendary_actions}
          />
        )}
      </div>
    </div>
  );
};

export default CreatureBlock;
