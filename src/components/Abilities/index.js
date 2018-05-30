import React from 'react';
import Ability from './Ability';
import './styles.css';

const Abilities = props => {
  return (
    <div className="abilities">
      <Ability title="STR" details={props.strength} />
      <Ability title="DEX" details={props.dexterity} />
      <Ability title="CON" details={props.constitution} />
      <Ability title="INT" details={props.intelligence} />
      <Ability title="WIS" details={props.wisdom} />
      <Ability title="CHA" details={props.charisma} />
    </div>
  );
};

export default Abilities;
