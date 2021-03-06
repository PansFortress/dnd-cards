import React, { Component } from 'react';
import CreatureBlock from './components/CreatureBlock';
import CreatureForm from './components/CreatureForm';
import CREATURE_DATA from './api/npc.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {CREATURE_DATA.map((data, index) => {
          return <CreatureBlock data={data} key={`${data.name}${index}`} />;
        })}
        <CreatureForm />
        {/* {Object.entries(SPELL_DATA).map(([key, value]) => {
          return <SpellBlock name={key} data={value} />;
        })} */}
      </div>
    );
  }
}

export default App;
