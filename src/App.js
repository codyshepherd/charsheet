import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';
import ClippedDrawer from './Drawer';
import CharInfoSheet from './CharInfoSheet';
import EditCharInfoSheet  from './EditCharInfoSheet';
import Portrait from './Portrait';
import EditPortrait from './EditPortrait';
import StatsSheet from './StatsSheet';
import EditStatsSheet from './EditStatsSheet';

class App extends Component {
  state = {
    isEditing: false,
    activeScreen: <CharInfoSheet/>,
    activeEditScreen: <EditCharInfoSheet/>,
    portrait: undefined,
    sheets: {
      portrait: {
        title: "Portrait",
        screen: <Portrait/>,
        editScreen: <EditPortrait/>,
        path: undefined
      },
      charInfo: {
        title: "Character Info",
        screen: <CharInfoSheet/>,
        editscreen: <EditCharInfoSheet/>,
        fields: {
          name: "Default Name",
          class: "",
          race: "",
          alignment: "",
        },
      },
      stats: {
        title: "Stats",
        screen: <StatsSheet/>,
        editScreen: <EditStatsSheet/>,
        fields: {
          str: "",
        }
      }
    },
  }

  constructor(props) {
    super(props);
    this.updateSheet = this.updateSheet.bind(this);
  }

  handleEdit = () => {
    this.state.isEditing ? (
      this.setState({ isEditing: false })
    ) : (
      this.setState({ isEditing: true })
   )}

  updateSheet = (screen, editScreen) => {
    this.setState({ activeScreen: screen });
    this.setState({ activeEditScreen: editScreen});
  };

  /* Update any field in the CharInfo sheet by providing key and value */
  updateCharInfoField = (k, v) => {
    this.setState(s => ({
      ...s,
      sheets: {
        ...s.sheets,
        charInfo: {
          ...s.sheets.charInfo,
          fields: {
            ...s.sheets.charInfo.fields,
            [k]: v
          }
        }
      }
    }));
  }

  render() {
    const { isEditing, sheets } = this.state;

    return (
      <div className="App">
        <MenuAppBar
          isEditing={isEditing}
          name={this.state.sheets.charInfo.fields.name}
          onEditToggle={this.handleEdit}
        />
        <ClippedDrawer
          isEditing={isEditing}
          toggleEdit={this.handleEdit}
          sheets={sheets}
          activeScreen={this.state.activeScreen}
          activeEditScreen={this.state.activeEditScreen}
          updateSheet={this.updateSheet}
          updateCharInfoField={this.updateCharInfoField}
        />
      </div>
    );
  }
}

export default App;