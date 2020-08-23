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
      <div>
      <div className="header header-project">
        <div className="navigation">
            <div className="natasha"><Link to="/" className="active">Natasha Schmid</Link></div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="inactive">Work</Link></div>
              <div className="about"><Link to="/about" className="inactive">About</Link></div>
              <div className="resume"><Link to="/resume" className="inactive">Resume</Link></div>
            </div>
        </div>
      </div>
      <div className="project-info">
        <img src={this.props.hero} alt="Hero" className="project-hero" />
        <div className="project-title">{this.props.title}</div>

        <div className="project-header-container">
          <div className="project-details col-7">
            <div className="project-details-description row">{this.props.description}</div>
            {/* TODO: fix this formatting */}
            <div className="project-details-description row hide">.</div>
          </div>

          <div className="project-details col-1">
            <div className="project-details-title row">Date</div>
            <div className="project-details-title row">Duration</div>
            <div className="project-details-title row">Team</div>
            <div className="project-details-title row hide">Team</div>
            <div className="project-details-title row">Role</div>
          </div>

          <div className="project-details col-4">
            <div className="project-details-text row">{this.props.date}</div>
            <div className="project-details-text row">{this.props.duration}</div>
            <div className="project-details-text row">{this.props.team}</div>
            <div className="project-details-text row">{this.props.role}</div>
          </div>
        </div>


      </div>
    </div>
    );
  }
}

export default ProjectNav;






// <div className="project-details-description col">{this.props.description}</div>


// <div className="project-info">
//         <img src={this.props.hero} alt="Hero" className="project-hero" />
//         <div className="project-title">{this.props.title}</div>
//         <div className="project-details row">
//             <div className="project-details-title col-1">Date</div>
//             <div className="project-details-text col-10">{this.props.date}</div>
//         </div>
//         <div className="project-details row">
//           <div className="project-details-title col-1">Duration</div>
//           <div className="project-details-text col-10">{this.props.duration}</div>
//         </div>
//         <div className="project-details row">
//           <div className="project-details-title col-1">Team</div>
//           <div className="project-details-text col-10">{this.props.team}</div>
//         </div>
//         <div className="project-details row">
//           <div className="project-details-title col-1">Role</div>
//           <div className="project-details-text col-10">{this.props.role}</div>
//         </div>
//       </div>