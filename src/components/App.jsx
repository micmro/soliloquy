import React, { Component } from 'react';
import CreateEntry from './CreateEntry'
import EntryList from './EntryList'
import './App.css';

class App extends Component {

  render() {

    const dummyEntries = [1,2,3,4,5,6].map(x => ({
      id: x,
      initial: 'MM',
      message: `message ${x}`,
      created: Date.now()
    }));

    return (
      <div className="App">
        <EntryList entries={dummyEntries} />
        <CreateEntry />
      </div>
    );
  }
}

export default App;
