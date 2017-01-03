import React, { Component } from 'react';

import NotesContainer from './Notes/NotesContainer';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <NotesContainer />
      </div>
    );
  }
}

export default App;