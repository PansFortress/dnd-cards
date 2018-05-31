import React from 'react';
import PropertyLine from '../PropertyLine';
import TaperedRule from '../TaperedRule';
import Abilities from '../Abilities';
import {getXP} from '../../utils';

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
    challenge_rating,
    strength_save,
    intelligence_save,
    wisdom_save,
    dexterity_save,
    charisma_save,
    constitution_save,
    skills
  } = props.data;
  const hitDetails = `${hit_points} (${hit_dice})`;
  const challengeRating = `${challenge_rating} (${getXP(challenge_rating)}XP)`;
  const savingThrows =
    (strength_save ? `Str +${strength_save} ` : '') +
    (dexterity_save ? `Dex +${dexterity_save} ` : '') +
    (constitution_save ? `Con +${constitution_save} ` : '') +
    (intelligence_save ? `Int +${intelligence_save} ` : '') +
    (wisdom_save ? `Wis +${wisdom_save} ` : '') +
    (charisma_save ? `Cha +${charisma_save} ` : '');

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
      {skills && <PropertyLine title="Skills" details={skills} />}
      {savingThrows && (
        <PropertyLine title="Saving Throws" details={savingThrows} />
      )}
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
        details={challengeRating}
        position="last"
      />
      <TaperedRule />
    </div>
  );
};

export default TopStatsBlock;
