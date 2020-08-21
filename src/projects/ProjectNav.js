import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ProjectNav extends Component {
  state = {

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="header-project">
        <div className="navigation">
            <div className="natasha"><Link to="/" className="active">Natasha Schmid</Link></div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="inactive">Work</Link></div>
              <div className="about"><Link to="/about" className="inactive">About</Link></div>
              <div className="resume"><Link to="/resume" className="inactive">Resume</Link></div>
            </div>
        </div>
        <div className="project-info">
          <img src={this.props.hero} alt="Hero" className="project-hero" />
          <div className="project-title">{this.props.title}</div>
          <div className="project-details">
            <div className="project-details-title">Date</div>
            <div className="project-details-text">{this.props.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectNav;