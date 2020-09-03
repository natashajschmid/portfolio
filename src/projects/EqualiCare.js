import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


import ProjectNav from './ProjectNav.js';
import equalicareHero from '../img/equalicare-img01.png';
import img02 from '../img/equalicare-img02.png';
import img03 from '../img/equalicare-img03.png';
import img04 from '../img/equalicare-img04.png';
import img05 from '../img/equalicare-img05.png';
import img06 from '../img/equalicare-img06.png';
import persona1 from '../img/equalicare-persona1.png';
import persona2 from '../img/equalicare-persona2.png';
import persona3 from '../img/equalicare-persona3.png';
import img10 from '../img/equalicare-img10.png';
import img11 from '../img/equalicare-img11.png';
import img12 from '../img/equalicare-img12.png';
import img13 from '../img/equalicare-img13.png';
import img14 from '../img/equalicare-img14.png';
import img15 from '../img/equalicare-img15.png';
import img16 from '../img/equalicare-img16.png';

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
              hero={equalicareHero}
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
          <section className="research">
            <div className="content-title"><span className="number">01</span><span className="header">Research</span></div>
            <div className="content-subtitle">Competitive Analysis</div>
            <div className="content">
              We conducted a competitive analysis on existing solutions for improving the healthcare of elderly immigrants in the U.S. This enabled us to understand what is currently working, as well as opportunities for improvement within our problem space.
            </div>
            <div className="content-subtitle">Interviews</div>
            <div className="content">
              <p>We conducted three semi-structured interviews, which included the following participants: </p>
              <div className="interviews row">
                <div className="col-4">
                  <img src={img02} alt="elderly immigrant icon" className="interview-icon" />
                  <br/> Elderly immigrant
                </div>
                <div className="col-4">
                  <img src={img03} alt="healthcare professional icon" className="interview-icon" />
                  <br/> Healthcare professional
                </div><div className="col-4">
                  <img src={img04} alt="family member icon" className="interview-icon" />
                  <br/> Family member of elderly immigrant who assists them to appointments
                </div>
              </div>
              <br/>
              After compiling and analyzing all of the interviews, we came up with the following key insights:
              <div className="insights-list">
                  <div className="insight-number">1</div>
                  <div className="insight">Interpreters are helpful because they are <bold>familiar with medical terminology</bold>.</div>
                  <div className="insight-number">2</div>
                  <div className="insight">It is often <bold>difficult to use video chat</bold> to communicate with interpreters.</div>
                  <div className="insight-number">3</div>
                  <div className="insight">Family members do not prefer to discuss medical issues in detail with their parent, to <bold>prevent them from overthinking</bold>.</div>
                  <div className="insight-number">4</div>
                  <div className="insight">Waiting for an interpreter can <bold>take up a lot of time</bold> for the healthcare provider.</div>
                  <div className="insight-number">5</div>
                  <div className="insight">Crucial medical information can be <bold>lost in translation</bold>.</div>
              </div>
            </div>

            <div className="content-subtitle">Survey</div>
            <div className="content">
              <p>We distributed two separate surveys through Google Forms. One went out to family translators of elderly immigrants (10 responses) and the other to healthcare professionals (13 responses).</p>
              <div className="survey">
                <div className="survey-icon">
                  <p className="icon-title">Family Translators</p>
                  <img src={img05} alt="family translators icon" className="survey-img" />
                </div>
                <div className="survey-insight">
                <p>Many participants found that translating between the doctor and their relatives and filling out forms were <bold>difficult due to their limited medical vocabulary</bold>. </p>
                <p>When participants were asked how they think their elderly relatives would feel without them to translate, many were worried that their relatives would get <bold>nervous, not understand their healthcare, or be unable to communicate their concerns/discomfort</bold>.</p>
                </div>
                <div className="survey-icon">
                  <p className="icon-title">Healthcare Professionals</p>
                  <img src={img06} alt="healthcare professionals icon" className="survey-img health" />
                </div>
                <div className="survey-insight">
                <p>All participants said that interpreters are important to have as they usually <bold>share the same cultures and language with the patient</bold> and act as a bridge between the doctors and the patients.</p>
                <p>Interpreters are also great for translating <bold>medical terminology</bold> and to act as an <bold>unbiased voice</bold> when speaking of embarrassing or difficult topics, such as sexuality or death, since they do not have an emotional attachment to the patient that a translating relative may.</p>
                </div>
              </div>
            </div>    

            <div className="content-subtitle personas">User Personas</div>
            <div className="content">
              Based on our research findings, we created three personas that embody the primary (elderly immigrant), secondary (healthcare professional), and tertiary (family member) archetypes of our user group.<br/> <br/>
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
          </section>

          <section className="problem-framing">
            <div className="content-title"><span className="number">02</span><span className="header">Problem Framing</span></div>
            <div className="content-subtitle">Problem Statement</div>
            <div className="content">
            Many elderly immigrants face <bold>language barriers, cultural differences, and technological barriers</bold> that impact their communication with healthcare providers, reducing the quality of their care. Though many healthcare systems have begun implementing translation devices and interpreters, there are still opportunities to allow elderly immigrants to <bold>better understand their health and play a larger role in their healthcare decisions</bold>.
            </div>
            <div className="stage-teal">
              <div className="content-subtitle">Design Question </div>
              <div className="content stage-text">
                How might we enable elderly immigrants to better understand their health and play a larger role in their healthcare decisions?
              </div>
            </div>
            <div className="stage-grey">
              <div className="content-subtitle">Design Requirements</div>
              <div className="content stage-text design-reqs">
                <img src={img10} alt="time efficient icon" className="icon" />
                <img src={img11} alt="thorough and honest icon" className="icon" />
                <img src={img12} alt="time efficient icon" className="icon" />
                <img src={img13} alt="thorough and honest icon" className="icon" />
                <div className="icon-title">Time Efficient</div>
                <div className="icon-title">Thorough & Honest</div>
                <div className="icon-title">Accessible</div>
                <div className="icon-title">Secure</div>
                <div className="icon-caption">Translation time should be as efficient as possible to reduce delay in between appointments and maximize time with the healthcare provider.</div>
                <div className="icon-caption">The information provided by health providers should be thorough and honest so that patients have a strong and accurate understanding of their health.</div>
                <div className="icon-caption">The use of technology should account for language differences and possible hearing, visual, and technological disabilities.</div>
                <div className="icon-caption">Patients should be confident that their healthcare data is kept private and secure.</div>
              </div>
            </div>
          </section>

          <section className="ideation">
            <div className="content-title"><span className="number">03</span><span className="header">Ideation</span></div>
              <div className="content-subtitle">Considered Solutions</div>
              <div className="content cons-sol">
                Based on our user research findings, we began ideating on different possible solutions that address the design requirements. The considered solutions are summarized in the table below.
                <img src={img14} alt="considered solutions table summary" className="table" />
              </div>
              <div className="content-subtitle">Selected Solution</div>
              <div className="content">
                We constructed a new solution that incorporates the core aspects of our 4 possible solutions listed above, extracting the most important elements of each that would combine for the best overall user experience. This combined solution focuses on increased communication between the patient and healthcare provider, through forms completed in their native language. There is also an emphasis on post-appointment care, through video tutorials and live chat options. <br/>
              </div>
              <div className="stage-teal solution">
                <div className="sel-sol">
                  <img src={img15} alt="equalicare phone mockup" className="icon" />
                  <div className="icon-caption">
                    <bold>Format:</bold> phone/tablet app <br/>
                    • Accessible at home, available "on the go" <br/>
                    • Does not completely take away from in-person appointments <br/>
                    • Doctors and patients are both connected through a single platform
                  </div>
                </div>
              </div>
              <div className="content">
                <img src={img16} alt="usage timeline graphic" className="timeline"/>
              </div>

          </section>


        </section>
    );
  }
}

export default EqualiCare;