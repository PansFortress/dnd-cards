import React, { Component } from 'react';
import CreatureBlock from './components/CreatureBlock';
import data from './api/stub.json'

class App extends Component {
  render() {
    return (
      <div>
        {data.map(creature => {
          console.log(creature);
          return(
          <CreatureBlock creature={creature} key={creature.name}/>)
        })}
      </div>
    )
  }
}

export default App;
