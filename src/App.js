import React, { Component } from 'react';
import CreatureBlock from './components/CreatureBlock';
import data from './api/stub.json';
import './App.css';

//TODO: Need to create blocks for Strahd Zombie, Izek Strazni, Wereraven
class App extends Component {
  render() {
    return (
      <div className="container">
        {data.map((data, index) => {
          return <CreatureBlock data={data} key={`${data.name}${index}`} />;
        })}
      </div>
    );
  }
}

export default App;
