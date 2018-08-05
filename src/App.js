import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Tabs from './Tabs';
require('./styles.css');

class App extends Component {
  render() {
    return (
      <div>
        <h1>Character Sheet</h1>
        <Tabs>
          <div label="Character">
            Character info goes here.
          </div>
          <div label="Stats">
            Stats info goes here.
          </div>
          <div label="Combat">
            Combat info goes here.
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
