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
    charisma,
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    condition_immunities,
    senses,
    languages,
    challenge_rating
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
      <TaperedRule />
      <PropertyLine title="Senses" details={senses} position="first" />
      {damage_vulnerabilities && (
        <PropertyLine
          title="Damage Vulnerabilities"
          details={damage_vulnerabilities}
        />
      )}
      {damage_resistances && (
        <PropertyLine title="Damage Resistances" details={damage_resistances} />
      )}
      {damage_immunities && (
        <PropertyLine title="Damage Immunities" details={damage_immunities} />
      )}
      {condition_immunities && (
        <PropertyLine
          title="Condition Immunities"
          details={condition_immunities}
        />
      )}
      <PropertyLine title="Languages" details={languages} />
      <PropertyLine
        title="Challenge"
        details={challenge_rating}
        position="last"
      />
      <TaperedRule />
    </div>
  );
};

export default TopStatsBlock;
