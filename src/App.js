import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';
import ClippedDrawer from './Drawer';

class App extends Component {
  state = {
    charName: 'Character Name',
    sheets: {
      portrait: {
        title: "Portrait",
        path: undefined
      },
      charInfo: {
        title: "Character Info"
      },
      stats: {
        title: "Stats"
      }
    }
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
        <ClippedDrawer
          sheets={this.state.sheets}
        />
      </div>
    );
  }
}

export default App;
