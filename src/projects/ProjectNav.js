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
      <img src={this.props.hero} alt="Hero" className="project-hero" />
      <div className="project-info-container">
        <div className="content project-info">
          <div className="project-title">{this.props.title}</div>
          <div className="project-description">{this.props.description}
            {/* <br/>
            <a href="#design" class="final-product-link">
              View Final Product <span class="text-span-28"> ↓ <br/> &zwj;</span>
            </a> */}
            {/* <input type="button" onClick="document.getElementById('design').scrollIntoView();" /> */}

          </div>
          <div className="title date">Date</div>
          <div className="text">{this.props.date}</div>
          <div className="title duration">Duration</div>
          <div className="text">{this.props.duration}</div>
          <div className="title team">Team</div>
          <div className="text">{this.props.team}</div>
          <div className="title role">Role</div>
          <div className="text">{this.props.role}</div>
        </div>
      </div>

    </div>
    );
  }
}

export default ProjectNav;




// .link-2 {
//   box-shadow: none;
//   font-family: proxima-nova, sans-serif;
//   color: #3da2ff;
//   font-size: 18px;
//   font-weight: 500;
// }