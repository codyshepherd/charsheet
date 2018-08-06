import React, { Component } from 'react';
import './App.css';

import MenuAppBar from './Bar';
import Sheet from './Sheet';



class App extends Component {
  state = {
    isEditing: false,
    charName: "",
  }

  handleEdit = () => {
    this.state.isEditing ? (
      this.setState({ isEditing: false })
    ) : (
      this.setState({ isEditing: true })
   )}

  handleNameChange = (name) => {
    this.setState({ charName: name });
  };

  render() {
      const { isEditing, charName } = this.state;

    return (
      <div className="App">
        <MenuAppBar
          isEditing={isEditing}
          charName={charName}
          onEditToggle={this.handleEdit}
        />
        <Sheet
          isEditing={isEditing}
          onNameChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default App;
