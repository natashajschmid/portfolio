import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import profile from '../img/profile.png';
import profile2 from '../img/profile2.png';
import profile3 from '../img/profile3.png';
 
class About extends Component {
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
              <div className="work"><Link to="/">Work</Link></div>
              <div className="about"><Link to="/about" className="active">About</Link></div>
              <div className="resume"><Link to="/resume">Resume</Link></div>
            </div>
          </div>
          <div className="specialty">
            UX Designer
          </div>
        </section>
        <section className="about row">
          <img src={profile3} alt="Profile image" className="about-image col-5 px-0" />
          
          <div className="col-6 px-0">
            <div className="about-content">
              <div>
                Hi, I'm Natasha.<br/><br/><br/>
                I am a student at the University of Washington, studying Human Centered Design & Engineering. I am passionate about solving problems at the intersection of humans, technology, and ethics.<br/><br/>
                </div>
                <div>
                  <span className="about-title">Section 1</span><br/>
                  Fugiat nulla aute est anim ad. Aliquip veniam ullamco pariatur veniam ut proident irure proident sunt. Minim consectetur duis ullamco Lorem sint ipsum elit officia do sunt ut quis.<br/><br/>
                </div>
                <div>
                  <span className="about-title">Section 2</span><br/>
                  Fugiat nulla aute est anim ad. Aliquip veniam ullamco pariatur veniam ut proident irure proident sunt. Minim consectetur duis ullamco Lorem sint ipsum elit officia do sunt ut quis.<br/><br/><br/>
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
 
export default About;