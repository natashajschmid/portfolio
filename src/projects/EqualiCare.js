import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';
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
import img17 from '../img/equalicare-img17.png';
import img17b from '../img/equalicare-img17b.png';
import img18 from '../img/equalicare-img18.png';
import img19 from '../img/equalicare-img19.png';
import img20 from '../img/equalicare-img20.png';
import img21 from '../img/equalicare-img21.png';
import img22 from '../img/equalicare-img22.png';
import img23 from '../img/equalicare-img23.gif';
import img24 from '../img/equalicare-img24.gif';
import img25 from '../img/equalicare-img25.gif';
import img26 from '../img/equalicare-img26.gif';
import img27 from '../img/equalicare-img27.png';


class EqualiCare extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // let nav = document.querySelector("#main");
  // let topOfNav = nav.offsetTop;

  render() {
    return (
      // <div className="body">
        <section className="project-content equalicare">
          <div className="cover" id="top">
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

          <section className="research" id="research">
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

          <section className="ideation" id="ideation">
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
                <div className="content-subtitle">App Usage Timeline</div>
                <p>We aim to provide assistance throughout the entire healthcare process [ADD MORE EXPLANATION HERE]</p>
                <img src={img16} alt="usage timeline graphic" className="timeline"/>
              </div>
              <div className="content-subtitle">Low Fidelity Wireframes</div>
              <div className="content">
                We began early ideation with brainstorming sketches and low fidelity wireframes that address the design requirements and the core aspects of our selected solution. <br/> <br/>

                <div className="lofi-wireframes">
                  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={img18} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <p><bold>Heath Summary (Main Page)</bold></p>
                          <h5>(1/5)</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={img19} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <p><bold>Make Appointment</bold></p>
                          <h5>(2/5)</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={img20} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <p><bold>Current Care</bold></p>
                          <h5>(3/5)</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={img21} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <p><bold>Current Care</bold></p>
                          <h5>(4/5)</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={img22} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <p><bold>Questions/Concerns</bold></p>
                          <h5>(5/5)</h5>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>


          </section>

          <section className="design" id="design">
            <div className="content-title"><span className="number">04</span><span className="header">Design</span></div>
              {/* <div className="content-subtitle">Design System</div> */}
              <div className="content">
                {/* {insert text about coming up with design system} */}
              </div>
              <div className="design-sys">
                <img src={img17b} alt="design system" className="image" />
                <div className="content image-text">
                  <br/><bold>Font</bold>
                  <p>Fonts that are most suitable for accessibility should be clean and simple, while maintaining large size and contrast between texts. Lato fits all of the above. It is a modern, professional-looking, sans serif font that is easy to read and comfortable to the eyes. It also has many font weight options, which are needed to aid in establishing visual text hierarchy.</p> <br/>
                  <bold>Color</bold>
                  <p>In deciding our color scheme, we first selected colors from the <a href="https://www.ichs.com/" target="_blank" open>International Community Health Services (ICHS)</a> website because we communicated with them to determine the problems that need to be addressed. Then, we added a few others we felt were necessary to complete the palette. For instance, we used a dark grey for text rather than a harsher black. </p>
                  <p>One thing we considered is that older people need contrast between the text and background. To address this, we incorporated  many different shades of teal and grey, to allow for dark text on a light shade or light text on a dark shade.</p>
                </div>
              </div>
              <div className="content-subtitle">Prototype & Scenarios</div>
              <div className="prototypes">
                <div className="prototype right">
                  <div className="details">
                    <div className="title">Onboarding</div>
                    <div className="description">
                      Users are introduced to EqualiCare through a series of screens, which allow them to customize language and text size preferences. They are also given an overview of the core application features.<br/> <br/>
                      <bold className="pain-points">Pain Points Solved</bold> <br/>
                      • <bold>Accessible</bold> for elderly immigrants, through language, text size, and audio options. <br/>
                      • User data is kept <bold>secure</bold> using login token provided by healthcare provider.
                    </div>
                  </div>
                  <img src={img23} alt="onboarding prototype" className="image" />
                </div>
                <div className="prototype left">
                  <div className="details">
                    <div className="title">Schedule an Appointment</div>
                    <div className="description">
                      Scheduling appointments is easy and time efficient. After selecting an available date and time, users fill out pre-screening questions in their native language which will be translated and then sent to the doctor ahead of time. Based on the patient's responses, they may be provided with a predicted diagnosis determined from a constantly updating healthcare database. <br/> <br/>
                      <bold className="pain-points">Pain Points Solved</bold> <br/>
                      • Pre-screening promotes <bold>time efficiency</bold>, allowing patients to fill out forms in advance in their native language. <br/>
                      • Drop-down suggestions for symptoms save <bold>time and effort</bold>.
                    </div>
                  </div>
                  <img src={img24} alt="make appointment prototype" className="image" />
                </div>
                <div className="prototype right">
                  <div className="details">
                    <div className="title">Review Current Care</div>
                    <div className="description">
                      At any point, whether the user is at home or on the go, they are able to access information on their current care, including their medical diagnosis and treatment plan (prescribed medications, dietary suggestions, etc). <br/> <br/>
                      <bold className="pain-points">Pain Points Solved</bold> <br/>
                      • The technology is <bold>accessibile</bold> by accounting for possible hearing, visual, and technological disabilities, as well as language barriers. This is seen through the video tutorials with closed captioning and audio playback options. <br/>
                      • Accessing treatment plans and medical information through EqualiCare is much more <bold>effective</bold> than the traditional method of printed documents. This information can be accessed at any time and in the patient's <bold>native language</bold>. This enables them to <bold>better comprehend their healthcare</bold> and not rely on the assistance of relatives as much.
                    </div>
                  </div>
                  <img src={img25} alt="review current care prototype" className="image" />
                </div>
                <div className="prototype left">
                  <div className="details">
                    <div className="title">Ask Doctor a Question</div>
                    <div className="description">
                      If, at any point, the patient has a question for a doctor, they have many options to go about obtaining an answer, including sending a translated message, live chat, or calling a healthcare professional who speaks their native language.<br/> <br/>
                      <bold className="pain-points">Pain Points Solved</bold> <br/>
                      • <bold>Thorough and honest</bold> communication, from information presented in the patient's native language and the ability to get in contact with a healthcare provider who speaks the same language and shares cultural context. <br/>
                      • <bold>Time efficient</bold> through live chat and call options available 24/7 and access to audio recordings of previous calls.
                    </div>
                  </div>
                  <img src={img26} alt="ask question prototype" className="image" />
                </div>
              </div>
          </section>

          <section className="reflection" id="reflection">
            <div className="content-title"><span className="number">05</span><span className="header">Reflection</span></div>
            <div className="learned">
              <img src={img27} alt="photo of me & my group" className="image" />
              <div className="details">
                <div className="content-subtitle">What I Learned</div>
                <div className="content">
                  what i learned here blah blah
                </div>
              </div>
            </div>
            <div className="content-subtitle">Next Steps</div>
            <div className="content">
              next steps here blah blah
              <br/><br/>
            </div>
          </section>

          <div className="thanks">
            <div className="thanks-text">Thanks for reading!</div>
          </div>
          <div className="bottom-navigation">

          </div>

        </section>
    );
  }
}

export default EqualiCare;