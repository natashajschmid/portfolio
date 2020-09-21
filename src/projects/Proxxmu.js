import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';

import ProjectNav from './ProjectNav.js';
import '../App.css';

import proxxmuHero from '../img/proxxmuCover.png';
import persona1 from '../img/proxxmu-persona1.png';
import persona2 from '../img/proxxmu-persona2.png';
import persona3 from '../img/proxxmu-persona3.png';


class Proxxmu extends Component {
  state = {
    color: "#FF977C"
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content proxxmu">
        <div className="cover" id="top">
          <ProjectNav
            hero={proxxmuHero}
            title="Proxxmu"
            date="Spring 2020"
            duration="8 weeks"
            team="Natasha Schmid, Jennifer Lukban, Tianyi Ren"
            role="UX Research, UI/UX Design"
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

        <div className="process-title">Process</div>
        <div className="content process">
          <div className="process-header"><span className="process-number">01</span>Research</div>
          <div className="process-header"><span className="process-number">02</span>Problem Framing</div>
          <div className="process-header"><span className="process-number">03</span>Ideation</div>
          <div className="process-header"><span className="process-number">04</span>Design</div>
          <div className="process-text">
            Interviews <br/> Competitive Analysis <br/> User Personas <br/> User Journey
          </div>
          <div className="process-text">
            Problem Statement <br/> Design Question <br/> Design Requirements 
          </div>
          <div className="process-text">
            Storyboarding <br/> Information Architecture <br/> Sketching <br/> Wireframes
          </div>
          <div className="process-text">
            Design System <br/> High Fidelity Mockups <br/> Interactive Prototype
          </div>
        </div>

        <section className="research" id="research">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>01</span><span className="header">Research</span></div>
          
          <div className="content-subtitle">Interviews</div>
          <div className="content">
            Our team conducted 4 interviews with potential users to gain qualitative data on the perception and values surrounding neighbors and interactions within a neighborhood. This helped us to understand their needs and identify pain points as neighbors look to one another for support. We tried to reach individuals with different levels of connection to their current neighbors to help scope the user group. This helped us to ultimately define intended users and non-users. <br/> <br/>
            <p>During interviews, we aimed to explore the following research questions:</p>
            <div className="research-questions">
              <ul>
                <li>How can we connect those in need with neighbors who can provide?</li>
                <li>What hesitations do individuals have about connecting with neighbors they have not met before? What is the root of these hesitations?</li>
                <li>How often do people look to their neighbors for support?</li>
                <li>What are issues with existing, or similar, solutions?</li>
                <li>Who does this solution appeal to and how can we encourage others to utilize the platform?</li>
                <li>What common categories do people find themselves needing aid for? (e.g. food, clothing, place to stay, carpools, nanny, tools, etc.)</li>
              </ul>
            </div> <br/>
            [INSERT INFO/GRAPHIC ABOUT INTERVIEW PARTICIPANTS]
            After compiling and analyzing all of the interviews, we came up with the following key insights:
            <div className="insights-list">
              <div className="insight-number">1</div>
              <div className="insight">INSIGHT #1</div>
              <div className="insight-number">2</div>
              <div className="insight"><bold>INSIGHT #2</bold></div>
              <div className="insight-number">3</div>
              <div className="insight">INSIGHT #3.</div>
              <div className="insight-number">4</div>
              <div className="insight"><bold>INSIGHT #4</bold></div>
              <div className="insight-number">5</div>
              <div className="insight">INSIGHT #5.</div>
            </div>
          </div>

          <div className="content-subtitle">Competitive Analysis</div>
          <div className="content"></div>

          <div className="content-subtitle personas">User Personas</div>
          <div className="content">
            PERSONA INTRODUCTION/DESCRIPTION HERE !!! <br/> <br/>
            <div className="personas">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={persona1} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={persona2} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={persona3} alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="problem-framing" id="problem">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>02</span><span className="header">Problem Framing</span></div>
          <div className="content-subtitle">Problem Statement</div>
          <div className="content">
            In the wake of COVID-19, it has become clear that, within a neighborhood, there are many who are in need of help or assistance, and those who can and want to help others. However, it can be difficult for these individuals to connect with each other, leading to needs remaining unmet and/or inefficient and wasteful solutions. There remains a need to connect these individuals, so that those in need feel that they can rely on their neighbors for support – with or without COVID-19. This project aims to create a solution for these current and long-term problems, while building community in the process.
          </div>
          <div className="content-subtitle">Problems to Address</div>
          <div className="content">
            <div className="problems-table">
              <div className="problems-header">
                Current
              </div>
              <div className="problems-header">
                Long-Term
              </div>
              <div>
                <ul>
                  <li>Grocery runs, access to groceries without being exposed to the virus</li>
                  <li>Users more prone to COVID-19 are more restricted to isolation</li>
                  <li>Community emergency need </li>
                  <li>Babysitting for people who work in medical field</li>
                  <li>Places to stay for those who are being forced out of current living situations (e.g. students)</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Providing services: giving rides/organizing carpools, nannying/babysitting</li>
                  <li>Helping families with meals/giving leftovers</li>
                  <li>Buying/selling items</li>
                  <li>Letting neighbors borrow tools/groceries</li>
                  <li>Warning about crime (information sharing and incident recording system/amber alert for neighborhood)</li>
                  <li>Making friends and meeting people who share same hobbies and interests</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="stage-pink">
            <div className="content-subtitle">Design Question </div>
            <div className="content stage-text">
              How might we efficiently and safely connect people within a neighborhood who need help with those who want to help others, while creating a community that can depend on one another?</div>
          </div>
        </section>

        <section className="ideation" id="ideation">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>03</span><span className="header">Ideation</span></div>
        </section>

        <section className="design" id="design">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>04</span><span className="header">Design</span></div>
        </section>

        <section className="reflection" id="reflection">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>05</span><span className="header">Reflection</span></div>
        </section>

        <div className="thanks">
          <div className="thanks-text">Thanks for reading!</div>
          <div className="thanks-subtext">Check out my other projects below.</div>
        </div>
        <div className="bottom-navigation">
          <Link to="/" className="link link-inactive">All</Link>
          <Link to="/equalicare" className="link link-inactive">EqualiCare</Link>
          <Link to="/proxxmu" className="link link-active">Proxxmu</Link>
          <Link to="/recoverycafe" className="link link-inactive">Recovery Cafe</Link>
        </div>

      </section>  
    );
  }
}

export default Proxxmu;