import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';

class App extends Component {
  state = {
    charName: 'Character Name',
  }

  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
  }

  updateName = (arg) => {
    this.setState({charName: arg});
  };

  render() {
    return (
      <div className="App">
        <MenuAppBar 
          charName={this.state.charName}
          nameChange={this.updateName}
        />
      </div>
    );
  }
}

export default App;
