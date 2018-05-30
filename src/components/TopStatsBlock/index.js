import React from 'react';
import PropertyLine from '../PropertyLine';
import TaperedRule from '../TaperedRule';
import Abilities from '../Abilities';

const TopStatsBlock = props => {
  const {
    armor_class,
    hit_points,
    hit_dice,
    speed,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
  } = props.data;
  const hitDetails = `${hit_points} (${hit_dice})`;

  return (
    <div className="top-stats">
      <PropertyLine
        title="Armor Class"
        details={armor_class}
        position="first"
      />
      <PropertyLine title="Hit Points" details={hitDetails} />
      <PropertyLine title="Speed" details={speed} position="last" />
      <TaperedRule />
      <Abilities
        strength={strength}
        dexterity={dexterity}
        constitution={constitution}
        intelligence={intelligence}
        wisdom={wisdom}
        charisma={charisma}
      />
    </div>
  );
};

export default TopStatsBlock;
