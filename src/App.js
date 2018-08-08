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
import { Stats } from './ADD2';
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
          str: {},
          dex: {},
          con: {},
          int: {},
          wis: {},
          cha: {},
        }
      }
    },
  }

  constructor(props) {
    super(props);
    this.updateSheet = this.updateSheet.bind(this);
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
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
