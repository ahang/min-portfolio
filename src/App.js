import React, { Component } from 'react';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import Application from './components/Application/Application';
import Education from './components/Education/Education';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row" style={{ marginLeft: '20%' }}>
          <Work />
          <Education />
        </div>
        <p style={{ textAlign: 'center' }}>Applications Developed</p>
        <Application />
      </div>
    );
  }
}

export default App;
