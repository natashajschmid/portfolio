import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import ProjectNav from './ProjectNav.js';
import equalicareCover from '../img/equalicareCover.png';

class EqualiCare extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content equalicare">
        <div className="cover">
          <ProjectNav 
            hero={equalicareCover}
            title="EqualiCare"
            date="Spring 2019"
          />
        </div>
      </section>
    );
  }
}

export default EqualiCare;