import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return(
      <div className="app">
        <h1> Hello, Karl! </h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));