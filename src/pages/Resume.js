import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import resumepng from '../img/resume-png.png';
import resumepdf from '../img/Natasha_Schmid_Resume.pdf';

 
class Resume extends Component {
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
              <div className="about"><Link to="/about">About</Link></div>
              <div className="resume"><Link to="/resume" className="active">Resume</Link></div>
            </div>
          </div>
          <div className="specialty">
            UX Designer
          </div>
        </section>
        <section className="resume-content">
          {/* (1) open resume in new page, (2) download resume */}
          {/* <a href={resumepdf} target="_blank" open className="resume-download-button">Download Resume PDF</a> */}
          <a href={resumepdf} download className="resume-download-button">Download Resume PDF</a>
          <img src={resumepng} alt="Natasha Schmid Resume" className="resume-image" />
        </section>
      </div>
    )
  }
}
 
export default Resume;