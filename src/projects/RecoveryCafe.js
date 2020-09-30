import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';

import ProjectNav from './ProjectNav.js';
import '../App.css';

import recoverycafeHero from '../img/recoverycafeCover.png';


class RecoveryCafe extends Component {
  state = {
    // color: "#FF977C"
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content proxxmu">
        <div className="cover" id="top">
          <ProjectNav
            hero={recoverycafeHero}
            title="Recovery Cafe"
            date="Winter 2020"
            duration="5 weeks"
            team="Natasha Schmids"
            role="Research, UI Design, Branding"
            description="Proxxmu is a app to help connect neighbors/build community/keep them dependable [CHANGE THIS LATER]."
          />
        </div>
        <div className="introduction">
          {/* Fill this in later (introduction.overview) */}
        </div>
        <ul className="nav-scroll">
        <li className="scroll-item">
            <NavScroll 
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-115}
              duration={700}
            >
              Top
            </NavScroll>
          </li>
          <li className="scroll-item">
            <NavScroll 
              activeClass="active"
              to="research"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Research
            </NavScroll>
          </li>
          <li className="scroll-item">
            <NavScroll 
              activeClass="active"
              to="problem"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Problem Framing
            </NavScroll>
          </li>
          <li className="scroll-item">
            <NavScroll 
              activeClass="active"
              to="ideation"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Ideation
            </NavScroll>
          </li>
          <li className="scroll-item">
            <NavScroll 
              activeClass="active"
              to="design"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Design
            </NavScroll>
          </li>
          <li className="scroll-item">
            <NavScroll 
              activeClass="active"
              to="reflection"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Reflection
            </NavScroll>
          </li>
        </ul>

      </section>
    );
  }
}

export default RecoveryCafe;