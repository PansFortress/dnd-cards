import React, { Component } from 'react';
import CreatureBlock from './components/CreatureBlock';
import data from './api/stub.json';

class App extends Component {
  render() {
    return (
      <div>
        {data.map((data, index) => {
          return <CreatureBlock data={data} key={`${data.name}${index}`} />;
        })}
      </div>
    );
  }
}

export default App;
