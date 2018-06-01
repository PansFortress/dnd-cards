import React, { Component } from 'react';
import CreatureBlock from './components/CreatureBlock';
import SpellBlock from './components/SpellBlock';
import CREATURE_DATA from './api/stub.json';
import SPELL_DATA from './api/spell.json';
import './App.css';

//TODO: Need to create blocks for Strahd Zombie, Izek Strazni, Wereraven
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* {CREATURE_DATA.map((data, index) => {
          return <CreatureBlock data={data} key={`${data.name}${index}`} />;
        })} */}
        {Object.entries(SPELL_DATA).map(([key, value]) => {
          return <SpellBlock name={key} data={value} />;
        })}
      </div>
    );
  }
}

export default App;
