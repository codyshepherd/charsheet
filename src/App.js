import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';
import ClippedDrawer from './Drawer';
import Sheet from './Sheet';
import CharInfoSheet from './CharInfoSheet';
import EditCharInfoSheet  from './EditCharInfoSheet';
import Portrait from './Portrait';
import StatsSheet from './StatsSheet';

class App extends Component {
  state = {
    isEditing: false,
    activeScreen: <CharInfoSheet/>,
    portrait: undefined,
    sheets: {
      portrait: {
        title: "Portrait",
        screen: <Portrait/>,
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

  updateSheet = (arg) => {
    this.setState({ activeScreen: arg });
  };

  /* Update any field in the CharInfo sheet by providing key and value */
  updateCharInfoField = (k, v) => {
    //let s = this.state;
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
        <Sheet
          isEditing={isEditing}
          updateCharInfoField={this.updateCharInfoField}
        />
        <ClippedDrawer
          sheets={sheets}
          activeScreen={this.state.activeScreen}
          updateSheet={this.updateSheet}
          updateCharInfoField={this.updateCharInfoField}
        />
      </div>
    );
  }
}

export default App;