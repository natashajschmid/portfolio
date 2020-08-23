import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


import ProjectNav from './ProjectNav.js';
import equalicareCover from '../img/equalicareCover.png';
import {persona1} from '../img/equalicare-persona1.png';
import {persona2} from '../img/equalicare-persona2.png';
import {persona3} from '../img/equalicare-persona3.png';


class EqualiCare extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      // <div className="body">
        <section className="project-content equalicare">
          <div className="cover">
            <ProjectNav
              hero={equalicareCover}
              title="EqualiCare"
              date="Spring 2019"
              duration="8 weeks"
              team="Natasha Schmid, Alvin Jeong, Brian Lee, Jay Ma"
              role="UX Research, UI/UX Design"
              description="EqualiCare is a mobile medical app that provides universal quality healthcare without barriers. The app is designed for all users, but has a strong focus on accommodating the needs of elderly immigrants."
            />
          </div>
          <div className="introduction">
            {/* Fill this in later (introduction.overview) */}
          </div>
          <div className="research">
            <div className="content-title">Research</div>
            <div className="content-subtitle">Competetive Analysis</div>
            <div className="content-subtitle">Interviews</div>
              <div className="content">
                We conducted three semi-structured interviews, which included the following participants: <br/>
                <div className="list">
                • An elderly immigrant <br/>
                • An elderly immigrant's family member who accompanies them to appointments <br/>
                • A healthcare provider
                </div> <p/>
                
                After compiling and analyzing all of the interviews, we came up with the following key insights: <br/>
                <div className="list">
                  1. Interpreters are helpful because they are <bold>familiar with medical terminology</bold> <br/>
                  2. It is often <bold>difficult to use video chat</bold> to communicate with interpreters <br/>
                  3. Family members do not prefer to discuss medical issues in detail with their parent, to <bold>prevent them from overthinking</bold> <br/>
                  4. Waiting for an interpreter can <bold>take up a lot of time</bold> for the healthcare provider <br/>
                  5. Crucial medical information can be <bold>lost in translation</bold> <br/>
                </div>

                <div className="personas">





                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={persona1} alt="First slide" />
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={persona2} alt="Second slide" />
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={persona3} alt="Third slide" />
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>





                </div>
              </div>

          </div>
        </section>
      // </div>
    );
  }
}

export default EqualiCare;