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
                Hi, I'm Natasha!<br/><br/>
                <p>I am a junior at the University of Washington majoring in <a target="_blank" href="https://www.hcde.washington.edu/">Human Centered Design & Engineering</a> (HCDE) with a concentration in Human Computer Interaction. I am also pursuing a minor in diversity.</p>

                <p>Coming into college, I wanted to be a Biomedical Engineer, since I thought this was the best way to have a meaningful and direct impact on others' lives. It wasn't until I took an introductory user-centered design course that I found UX design as a means to interact directly with humans and create impactful products that serve diverse communities. </p>
                
               <p>As a designer, I strive to create meaningful experiences that advocate for the story of my user. It is always my goal to exercise empathy and compassion to amplify user voices and have a positive impact on people's lives. </p>

                <p>When I am not designing, I love to go on hikes (Mt. Rainier on the left!), play water polo, and make all kinds of smoothies.</p>
{/* 
                I am an empathetic problem solver, 
                <p>I am also a course assistant for an introductory user-centered design class at UW. I love being able to educate others about responsible human centered design practices and share my passion for UX.</p> */}
                </div>

                <div>
                  {/* <span className="about-title">Section 1</span><br/> */}
                  {/* advocate for other's stories    

                  Fugiat nulla aute est anim ad. Aliquip veniam ullamco pariatur veniam ut proident irure proident sunt. Minim consectetur duis ullamco Lorem sint ipsum elit officia do sunt ut quis.<br/><br/> */}
                </div>
                <div>
                  {/* <span className="about-title">Section 2</span><br/> */}
                  {/* Fugiat nulla aute est anim ad. Aliquip veniam ullamco pariatur veniam ut proident irure proident sunt. Minim consectetur duis ullamco Lorem sint ipsum elit officia do sunt ut quis.<br/><br/><br/> */}
                </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
 
export default About;