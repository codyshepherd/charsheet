import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';
import ClippedDrawer from './Drawer';
import CharInfoSheet from './CharInfoSheet';
import Portrait from './Portrait';
import StatsSheet from './StatsSheet';

class App extends Component {
  state = {
    charName: 'Character Name',
    activeScreen: <CharInfoSheet/>,
    sheets: {
      portrait: {
        title: "Portrait",
        screen: <Portrait/>,
        path: undefined
      },
      charInfo: {
        title: "Character Info",
        screen: <CharInfoSheet/>
      },
      stats: {
        title: "Stats",
        screen: <StatsSheet/>
      }
    },
  }

  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.updateSheet = this.updateSheet.bind(this);
  }

  updateName = (arg) => {
    this.setState({charName: arg});
  };

  updateSheet = (arg) => {
    this.setState({activeScreen: arg});
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
          activeScreen={this.state.activeScreen}
          updateSheet={this.updateSheet}
        />
      </div>
    );
  }
}

export default App;