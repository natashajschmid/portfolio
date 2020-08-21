import React, { Component } from 'react';
import './App.css';

import linkedin from './img/linkedin-logo.png';
import email from './img/email-logo.png';

class Footer extends Component {
  state = {
    linkedin: linkedin,
    email: email
  }

  render () {
    return (
      <div className="footer">
        <div className="footer-statement">
          Let's connect!
        </div>
        <div className="social-links">
          {/* <div className="social"> */}
          <div className="social">
            <a href="https://www.linkedin.com/in/natashajschmid/" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={this.state.linkedin} alt="LinkedIn Logo" />
            </a>
          </div>
          <div className="social-last">
            <a href="mailto:njschmid@uw.edu" target="_blank" rel="noopener noreferrer">
              <img className="email" src={this.state.email} alt="Email Logo" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2020 Natasha Schmid. Designed & coded from scratch.
        </div>
      </div>
    );
  }
}

export default Footer;