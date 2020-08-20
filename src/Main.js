import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// import ProjectOld from './components/ProjectOld';
import Project from './components/Project';

import equalicare from './img/equalicareCover.png';
import proxxmu from './img/proxxmuCover.png';
import recoverycafe from './img/recoverycafeCover.png';

class Main extends Component {
  state = {

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="natasha"><Link to="/" className="active">Natasha Schmid</Link></div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="active">Work</Link></div>
              <div className="about"><Link to="/about">About</Link></div>
              <div className="resume"><Link to="/resume">Resume</Link></div>
            </div>
          </div>
          <div className="specialty">
            UX Designer
          </div>
        </section>
        <section className="intro">
            Hello!
            <div className="intro-name">I'm Natasha.</div>
            Human Centered Design & Engineering <br/> student at the University of Washington
        </section>
        <section className="projects">
          {/* PROJECTS */}
          <div className="container-fluid d-flex justify-content-center">
            <div className="col">
              <div className="row-md-4">
                <Project imgsrc={equalicare} title="EqualiCare" />
              </div>
              <div className="row-md-4">
                <Project imgsrc={proxxmu} title="Proxxmu" />
              </div>
              <div className="row-md-4">
                <Project imgsrc={recoverycafe} title="Recovery Cafe"/>
              </div>
            </div>
          </div>


        </section>
      </div>
    );
  }
}

export default Main;