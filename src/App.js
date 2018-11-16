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
import { Stats, Str, Dex, Con, Int, Wis, Cha } from './DD5e';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        typography: {
            // does not apply across components
            fontFamily: '"Lato", serif',
        },
        primary: {
            main: '#700303',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ffe500',
            contrastText: '#000',
        },
    },
});

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
          this.state.sheets.stats.fields[k][j] = [Stats[k][j][0], array[i]]
          i++
        }
      }
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(JSON.stringify(this.state));
  }

  componentDidMount() {
    this.readRuleset();
  }

  readRuleset() {
    for (let k in this.state.sheets.stats.fields) {
      console.log("key " + k);
      let updater = (prevState, props) => {
        return {
          ...prevState,
          sheets: {
            ...prevState.sheets,
            stats: {
              ...prevState.sheets.stats,
              fields: {
                ...prevState.sheets.stats.fields,
                [k]: Stats[k]
              }
            }
          }
        }
      }
      this.setState(updater);
    }
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
    let cur = this.state.sheets.stats.fields[stat]["score"] // current "score" tuple
    var arr = this.state.sheets.stats.fields[stat]          // all substats object
    let val = (cur[1]==25 ? 25 : cur[1]+1)                  // computed/constrained new main Stat value
    let array = undefined;                                  // this will hold what we get from the substats function

    // Call into appropriate substats function with new value
    if (stat === "Str"){
      array = Str(val);
    } else if (stat === "Dex") {
      array = Dex(val);
    } else if (stat === "Con") {
      array = Con(val);
    } else if (stat === "Int") {
      array = Int(val);
    } else if (stat === "Wis") {
      array = Wis(val);
    } else if (stat === "Cha") {
      array = Cha(val);
    }

    // build new object for passing to setState
    var i = 0;                                  // loop counter
    var newStatObj = {};                        // new state to be assigned
    newStatObj["score"] = ["Score", val];
    for (let k of Object.keys(arr)){
      let tuple = this.state.sheets.stats.fields[stat][k];
      if (k==="score") {
        continue;
      }
      newStatObj[k] = [tuple[0], array[i]]
      i++;
    }

    // call setState
    this.setState(s => ({
      ...s,
      sheets: {
        ...s.sheets,
        stats: {
          ...s.sheets.stats,
          fields: {
            ...s.sheets.stats.fields,
            [stat]: newStatObj
          }
        }
      }
    }));
  }

  decrementStat(stat) {
    let cur = this.state.sheets.stats.fields[stat]["score"] // current "score" tuple
    var arr = this.state.sheets.stats.fields[stat]          // all substats object
    let val = (cur[1]==0 ? 0 : cur[1]-1)                    // computed/constrained new main Stat value
    let array = undefined;                                  // this will hold what we get from the substats function

    // Call into appropriate substats function with new value
    if (stat === "Str"){
      array = Str(val);
    } else if (stat === "Dex") {
      array = Dex(val);
    } else if (stat === "Con") {
      array = Con(val);
    } else if (stat === "Int") {
      array = Int(val);
    } else if (stat === "Wis") {
      array = Wis(val);
    } else if (stat === "Cha") {
      array = Cha(val);
    }

    // build new object for passing to setState
    var i = 0;                                  // loop counter
    var newStatObj = {};                        // new state to be assigned
    newStatObj["score"] = ["Score", val];
    for (let k of Object.keys(arr)){
      let tuple = this.state.sheets.stats.fields[stat][k];
      if (k==="score") {
        continue;
      }
      newStatObj[k] = [tuple[0], array[i]]
      i++;
    }

    // call setState
    this.setState(s => ({
      ...s,
      sheets: {
        ...s.sheets,
        stats: {
          ...s.sheets.stats,
          fields: {
            ...s.sheets.stats.fields,
            [stat]: newStatObj
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
      <MuiThemeProvider theme={theme}>
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
            increment={this.incrementStat}
            decrement={this.decrementStat}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
