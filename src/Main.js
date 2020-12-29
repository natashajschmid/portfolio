import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// import ProjectOld from './components/ProjectOld';
import Project from './Project';

import cartoonProfile from './img/cartoon-profile.png';
// import equalicare from './img/equalicare-img01.png';
// import equalicare from './img/equalicare-im.png';
import equalicare from './img/equalicare-cover.png';
import proxxmu from './img/proxxmu-cover.png';
import recovery from './img/recovery-cover.png';
import extraworks from './img/extraworks-cover.png';
import recovery2 from './img/recovery-cover2.png';
import recovery3 from './img/recovery-cover3.png';


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
            <div className="intro-text">
              Hello!
              <div className="intro-name">I'm Natasha.</div>
              Human Centered Design & Engineering<br/> student at the University of Washington
            </div>
            <img src={cartoonProfile} alt="cartoon drawing of myself" className="intro-image" />
        </section>
        <section className="projects">
          {/* PROJECTS */}
          <div className="container-fluid d-flex justify-content-center px-0">
            <div className="col px-0">
            <div className="row-md-4">
                <Project 
                  image={proxxmu} 
                  link="/proxxmu"
                  title="Proxxmu" 
                  description="Helping neighbors stay connected and dependable when in need" 
                  // color="#C5DAC1"
                  color="#A2BDBB"
                  button="View Case Study"
                  index="0" />
              </div>
              <div className="row-md-4">
                <Project 
                  image={equalicare} 
                  link="/equalicare"
                  title="EqualiCare" 
                  description="Mobile medical application providing universal healthcare for elderly immigrants"
                  color="#6FCAD2"
                  button="View Case Study"
                  index="1" />
              </div>
              <div className="row-md-4">
                <Project 
                  image={recovery} 
                  link="/recovery-cafe"
                  title="Recovery Café" 
                  description="Rebrand for Seattle non-profit organization"
                  color="#DFBBA6"
                  button="View Case Study"
                  index="2" />
              </div>
              <div className="row-md-4">
                <Project 
                  image={extraworks} 
                  link="/extra-works"
                  title="Extra Works" 
                  description="A growing collection of side projects I have worked on!"
                  color="#4088F4"
                  button="View Work"
                  index="3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;