import React, { Component } from 'react';
import Header from './components/Header/Header';
import Work from './components/Work/Work';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row" style={{ margin: 'auto' }}>
          <Work />
          <div className="col-md-4">
            <p>Projects</p>
          </div>
          <div className="col-md-4">
            <p>Education</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
