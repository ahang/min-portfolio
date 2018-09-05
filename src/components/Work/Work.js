import React, { Component } from 'react';
import './WorkStyle.css';

import data from './work.json';

class Work extends Component {
  renderWorkHistory() {
    return data.map(work => {
      return (
        <li key={work.id}>
          <a href={work.website}> {work.company}</a>
          <p className="experienceTextStyle">{work.experience}</p>
          <p>{work.title}</p>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="col-md-4 work">
        <ul>
          <p className="workTitleStyle">Work</p>
          {this.renderWorkHistory()}
        </ul>
      </div>
    );
  }
}

export default Work;
