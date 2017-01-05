import React, { Component } from 'react';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
      	<h1>Awesome Notes App!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;