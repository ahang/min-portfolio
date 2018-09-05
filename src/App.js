import React, { Component } from 'react';
import Header from './components/Header/Header';
import Work from './components/Work/Work';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Work />
      </div>
    );
  }
}

export default App;
