import React from 'react';
import PropertyLine from '../PropertyLine';
import TaperedRule from '../TaperedRule';
import Abilities from '../Abilities';
import { getXP, getModifier } from '../../utils';

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
    athletics,
    acrobatics,
    sleight_of_hand,
    stealth,
    arcana,
    history,
    investigation,
    nature,
    religion,
    animal_handling,
    insight,
    medicine,
    perception,
    survival,
    deception,
    intimidation,
    performance,
    persuasion
  } = props.data;

  const getHitModifier = () => {
    const hitQuant = hit_dice.slice(0, hit_dice.indexOf('d'));
    return hitQuant * getModifier(constitution);
  };

  const hitDetails = `${hit_points} (${hit_dice} +${getHitModifier()})`;
  const challengeRating = `${challenge_rating} (${getXP(challenge_rating)}XP)`;
  const savingThrows =
    (strength_save || strength_save === 0 ? `Str +${strength_save} ` : '') +
    (dexterity_save || dexterity_save === 0 ? `Dex +${dexterity_save} ` : '') +
    (constitution_save || constitution_save === 0
      ? `Con +${constitution_save} `
      : '') +
    (intelligence_save || intelligence_save === 0
      ? `Int +${intelligence_save} `
      : '') +
    (wisdom_save || wisdom_save === 0 ? `Wis +${wisdom_save} ` : '') +
    (charisma_save || charisma_save === 0 ? `Cha +${charisma_save} ` : '');

  const skills =
    (athletics ? `Athletics +${athletics} ` : '') +
    (acrobatics ? `Acrobatics + ${acrobatics} ` : '') +
    (sleight_of_hand ? `Sleight of Hand +${sleight_of_hand} ` : '') +
    (stealth ? `Stealth +${stealth} ` : '') +
    (arcana ? `Arcana +${arcana} ` : '') +
    (history ? `History +${history} ` : '') +
    (investigation ? `Investigation +${investigation} ` : '') +
    (nature ? `Nature +${nature} ` : '') +
    (religion ? `Religion +${religion} ` : '') +
    (animal_handling ? `Animal Handling +${animal_handling} ` : '') +
    (insight ? `Insight +${insight} ` : '') +
    (medicine ? `Medicine +${medicine} ` : '') +
    (perception ? `Perception +${perception} ` : '') +
    (survival ? `Survival +${survival} ` : '') +
    (deception ? `Deception +${deception} ` : '') +
    (intimidation ? `Intimidation +${intimidation} ` : '') +
    (performance ? `Performance +${performance} ` : '') +
    (persuasion ? `Persuasion ` : '');

  return (
    <div className="top-stats">
      <PropertyLine name="Armor Class" desc={armor_class} position="first" />
      <PropertyLine name="Hit Points" desc={hitDetails} />
      <PropertyLine name="Speed" desc={speed} position="last" />
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
      <PropertyLine name="Senses" desc={senses} position="first" />
      {skills && <PropertyLine name="Skills" desc={skills} />}
      {savingThrows && (
        <PropertyLine name="Saving Throws" desc={savingThrows} />
      )}
      {damage_vulnerabilities && (
        <PropertyLine
          name="Damage Vulnerabilities"
          desc={damage_vulnerabilities}
        />
      )}
      {damage_resistances && (
        <PropertyLine name="Damage Resistances" desc={damage_resistances} />
      )}
      {damage_immunities && (
        <PropertyLine name="Damage Immunities" desc={damage_immunities} />
      )}
      {condition_immunities && (
        <PropertyLine name="Condition Immunities" desc={condition_immunities} />
      )}
      <PropertyLine name="Languages" desc={languages} />
      <PropertyLine name="Challenge" desc={challengeRating} position="last" />
      <TaperedRule />
    </div>
  );
};

export default TopStatsBlock;
