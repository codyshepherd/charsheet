import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';
import ClippedDrawer from './Drawer';
import CharInfoSheet from './CharInfoSheet';
import EditCharInfoSheet  from './EditCharInfoSheet';
import Portrait from './Portrait';
import EditPortrait from './EditPortrait';
import StatsSheet from './StatsSheet';
import { loadCharacter, saveCharacter, rollDie, getUUID } from './Utilities';
import EditStatsSheet from './EditStatsSheet';
import { Stats, Str, Dex, Con, Int, Wis, Cha } from './ADD2';

class App extends Component {
  state = {
    id: undefined,
    isInitialized: false,
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
        editScreen: <EditCharInfoSheet/>,
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
          Str: {},
          Dex: {},
          Con: {},
          Int: {},
          Wis: {},
          Cha: {},
        }
      }
    },
  }

  constructor(props) {
    super(props);
    this.updateSheet = this.updateSheet.bind(this);
    this.incrementStat = this.incrementStat.bind(this);
    this.decrementStat = this.decrementStat.bind(this);

    // Read in ruleset
    for (let k in this.state.sheets.stats.fields) {
      this.state.sheets.stats.fields[k] = Stats[k];
          // Initialize Stats to scores of 9
      let array = undefined;
      if (k === "Str"){
        array = Str(9);
      } else if (k === "Dex") {
        array = Dex(9);
      } else if (k === "Con") {
        array = Con(9);
      } else if (k === "Int") {
        array = Int(9);
      } else if (k === "Wis") {
        array = Wis(9);
      } else if (k === "Cha") {
        array = Cha(9);
      }

      var i = 0;
      for (let j of Object.keys(Stats[k])){
        if (j === "score"){
          this.state.sheets.stats.fields[k][j][1] = 9;
        } else {
          this.state.sheets.stats.fields[k][j] = [Stats[k][j], array[i]]
          i++
        }
      }
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  toggleEdit = () => {
    this.state.isEditing ? (
      this.setState({ isEditing: false })
    ) : (
      this.setState({ isEditing: true })
    )
    // just to test it...
    console.log(rollDie(6,3));
  }

  handleSave = () => {
    if (this.state.id === undefined) {
      getUUID(uuid =>
        { saveCharacter(uuid, this.state);
          this.setState({ id: uuid });
        });
    } else {
      saveCharacter(this.state.id, this.state);
    }
  }

  handleLoad = () => {
    let savedCharacter = loadCharacter(this.state.id);
    console.log(savedCharacter);
  }

  updateSheet = (screen, editScreen) => {
    this.setState({ activeScreen: screen });
    this.setState({ activeEditScreen: editScreen});
  };

  incrementStat(stat) {
    let cur = this.state.sheets.stats.fields[stat]["score"]
    let val = (cur[1]==25 ? 25 : cur[1]+1)
    this.setState(s => ({
      ...s,
      sheets: {
        ...s.sheets,
        charInfo: {
          ...s.sheets.stats,
          fields: {
            ...s.sheets.stats.fields,
            [stat]: {
              ...s.sheets.stats.fields[stat],
              score: [cur[0], val]
            }
          }
        }
      }
    }));
  }

  decrementStat(stat) {
    let cur = this.state.sheets.stats.fields[stat]["score"]
    let val = (cur[1]==0 ? 0 : cur[1]-1)
    this.setState(s => ({
      ...s,
      sheets: {
        ...s.sheets,
        charInfo: {
          ...s.sheets.stats,
          fields: {
            ...s.sheets.stats.fields,
            [stat]: {
              ...s.sheets.stats.fields[stat],
              score: [cur[0], val]
            }
          }
        }
      }
    }));
  }

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
          onEditToggle={this.toggleEdit}
        />
        <ClippedDrawer
          isEditing={isEditing}
          toggleEdit={this.toggleEdit}
          saveCharacter={this.handleSave}
          sheets={sheets}
          activeScreen={this.state.activeScreen}
          activeEditScreen={this.state.activeEditScreen}
          updateSheet={this.updateSheet}
          updateCharInfoField={this.updateCharInfoField}
          initialize={this.initialize}
          increment={this.incrementStat}
          decrement={this.decrementStat}
        />
      </div>
    );
  }
}

export default App;
