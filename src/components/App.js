import React, { Component } from 'react';

import NotesContainer from './Notes/NotesContainer';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
      	<h1>Notes Here!</h1>
        {this.props.children};
      </div>
    );
  }
}

export default App;