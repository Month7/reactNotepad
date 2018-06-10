import React, { Component } from 'react';
import Toolbar from './containers/Toolbar';
import VisbleNoteList from './containers/NoteList';
import NoteEditor from './containers/NoteEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <VisbleNoteList />
        <NoteEditor />
      </div>
    );
  }
}

export default App;
