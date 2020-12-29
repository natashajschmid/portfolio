import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';

import ProjectNav from './ProjectNav.js';
import '../App.css';
import Project from '../Project.js';


import slide1 from '../img/medpad-slide1.png';
import slide2 from '../img/medpad-slide2.png';
import slide3 from '../img/medpad-slide3.png';
import slide4 from '../img/medpad-slide4.png';
import slide5 from '../img/medpad-slide5.png';
import slide6 from '../img/medpad-slide6.png';
import slide7 from '../img/medpad-slide7.png';
import slide8 from '../img/medpad-slide8.png';
import slide9 from '../img/medpad-slide9.png';
import slide10 from '../img/medpad-slide10.png';
import freshpres from '../img/AmazonFresh Usability Study Presentation.pdf';
import freshrep from '../img/AmazonFresh Final Report.pdf';


class ExtraWorks extends Component {
  state = {
    color: "#4088F4"
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content extra-works">
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
        <div className="extra-page-title">Extra Works</div>
          <div className="extra-page-subtitle">
            A growing collection of side projects I have worked on!
        </div>

        <section className="content medpad">
          <div className="extra-title">MedPad</div>
          <div className="extra-text">
            This project was completed during a 30-hour Protothon, responding to the prompt: <span className="prompt">Your task is to design a mobile or tablet (preferred) application that allows nurses to seamlessly check-in new patients and communicate with patients, care providers, and rooms so there’s more time for patients and less paperwork.</span> This was a huge learning experience, working under such a tight timeline to tackle a relevant, real-world issue.
          </div>
          <div className="content medpad slideshow">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={slide1} alt="Cover page" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide2} alt="Identity" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide3} alt="Logo" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide4} alt="Iconography" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide5} alt="Color" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide6} alt="Typography" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide7} alt="Image" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide8} alt="Mobile" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide9} alt="Thank you page" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={slide10} alt="Thank you page" />
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

        </section>

        <br/><br/>

        <section className="content amazonfresh">
          <div className="extra-title">AmazonFresh Usability Test</div>
          <div className="extra-text">For a class project, I worked in a team of three to perform an exhaustive usability study to evaluate the learnability and satisfaction of the AmazonFresh platform for new users. See our final presentation below (note: black boxes can be clicked to view video evidence) or check out the <a target="_blank" href="https://drive.google.com/file/d/1-3qJDEMOv3-QwY6qazX8WEfSuvuV-EVW/view?usp=sharing">final report</a> for a comprehensive overview of our testing process, key findings, and recommendations.</div>
          <embed src={freshpres} width="100%" height="550px" className="fresh-pres"></embed>
          {/* <embed src={freshrep} width="100%" height="700px" className="fresh-rep"></embed> */}
        </section>

        <section className="content airquality">
          <div className="extra-title">Air Quality Interactive Web App</div>
          <div className="extra-text">Over the course of 2 weeks, I worked together with a peer to design and build an interactive web application that takes a location input and returns data for the air quality and corresponding recommendations. To make our product more accessible, users can provide either text or speech input in any language. Moreover, audio is implemented to autoplay suggestions for what people should do based on the air conditions in their searched location. This project involved mashing three different APIs (Weatherbit.io – Current Air Quality, Google Geolocation, and Google Web Speech) and development in Python with HTML/CSS/JavaScript. Unfortunately, the Air Quality API that we used has since become unavailable, casuing our original prototype to no longer work. Instead, check out the video demonstration of the web app below.</div>

          {/* <div className="air-video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mBZHRWszuRs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}

          {/* For other video options, Google search: "youtube embed generator" */}
          <div className="air-video-container">
            <iframe src="https://www.youtube.com/embed/mBZHRWszuRs?modestbranding=1&rel=0" width="560" height="315" frameborder="0" allowfullscreen></iframe>
          </div>
        </section>

        <br/><br/><br/>

        <div className="thanks">
          <div className="thanks-text">Thanks for reading!</div>
          <div className="thanks-subtext">Check out my other projects below.</div>
        </div>
        <div className="bottom-navigation">
          <Link to="/" className="link link-inactive">All</Link>
          <Link to="/proxxmu" className="link link-inactive">Proxxmu</Link>
          <Link to="/equalicare" className="link link-inactive">EqualiCare</Link>
          <Link to="/recovery-cafe" className="link link-inactive">Recovery Café</Link>
          <Link to="/extra-works" className="link link-active">Extra Works</Link>
        </div>

      </section>
    );
  }
}

export default ExtraWorks;
