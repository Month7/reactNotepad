import React, { Component } from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import Editor from './components/Editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <NoteList />
        <Editor />
      </div>
    );
  }
}

export default App;
