import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';

import ProjectNav from './ProjectNav.js';
import '../App.css';

import equalicareHero from '../img/equalicare-img01b.png';
import compAnl from '../img/equalicare-img1.png';
import img02 from '../img/equalicare-img02.png';
import img03 from '../img/equalicare-img03.png';
import img04 from '../img/equalicare-img04.png';
import img05 from '../img/equalicare-img05.png';
import img06 from '../img/equalicare-img06.png';
import img07 from '../img/equalicare-img07.png';
import img08 from '../img/equalicare-img08.png';
import img09 from '../img/equalicare-img09.png';
import img10 from '../img/equalicare-img10.png';
import img11 from '../img/equalicare-img11.png';
import img12 from '../img/equalicare-img12.png';
import img13 from '../img/equalicare-img13.png';
import img14 from '../img/equalicare-img14.png';
import img15 from '../img/equalicare-img15.png';
import img16 from '../img/equalicare-img16.png';
import img17 from '../img/equalicare-img17.png';
import img17b from '../img/equalicare-img17b.png';
// import img18 from '../img/equalicare-img18.png';
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

        <div className="other-title">Introduction</div>
        <div className="content">
          <p>While brainstorming project problem spaces, my team members and I found that something we all had in common is immigrant grandparents living in the Unites States. Each time one of my grandparents has a doctor appointment, my mom assists them to act as an interpreter and translator. In our experience, this not only takes time, but can also result in miscommunication between the doctor and my grandparents. Regardless, this has become the healthcare norm for my family,  my group members, as well as countless others with elderly immigrant family members. </p>
          <p>EqualiCare is a mobile application that aims to tackle this problem space and therefore, improve the quality of healthcare and treatment experiences for elderly immigrants living in the United States.</p>
        </div>

        <div className="other-title">Process</div>
        <div className="content process">
          <div className="process-header"><span className="process-number">01</span>Research</div>
          <div className="process-header"><span className="process-number">02</span>Problem Framing</div>
          <div className="process-header"><span className="process-number">03</span>Ideation</div>
          <div className="process-header"><span className="process-number">04</span>Design</div>
          <div className="process-text">
            Competitive Analysis <br/> Interviews <br/> Surveys <br/> User Personas
          </div>
          <div className="process-text">
            Problem Statement <br/> Design Question <br/> Design Goals
          </div>
          <div className="process-text">
            Considered Solutions <br/> Wireframes
          </div>
          <div className="process-text">
            Design System <br/> Prototype & Scenarios
          </div>
        </div>

        <section className="research" id="research">
          <div className="content-title"><span className="number">01</span><span className="header">Research</span></div>
          <div className="content-subtitle">Competitive Analysis</div>
          <div className="content">
            We conducted a competitive analysis on existing solutions for improving the healthcare of elderly immigrants in the U.S. This enabled us to understand what is currently working and opportunities for improvement within our problem space. At the conclusion, we determined that all existing solutions are aware that there is a need for improved communication between immigrants and healthcare providers.<br/>
            <img src={compAnl} alt="table displaying competitive analysis findings" className="ca-table" />
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

          <div className="content-subtitle">Surveys</div>
          <div className="content">
            <p>We distributed two separate surveys through Google Forms. One went out to <a target="_blank" href="https://docs.google.com/spreadsheets/d/1fSOU1hi9pGVrxmZKe60zyyt-xsY-xovF_971vLH7xrI/edit?usp=sharing">family translators</a> of elderly immigrants (10 responses) and the other to <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ik19n2RxKE9BqkyaD98q-R89fnpNzUpUpRrlc7hd-wY/edit?usp=sharing">healthcare professionals</a> (13 responses).</p>
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
              <p>Interpreters are also great for translating <bold>medical terminology</bold> and to act as an <bold>unbiased voice</bold> when speaking of embarrassing or difficult topics, such as sexuality or death, since they do not have an emotional attachment to the patient that a translating relative may. That said, they add a significant amount of time to appointments and generally do not communicate the patient's emotions.</p>
              </div>
            </div>
          </div>    

          <div className="content-subtitle personas">User Personas</div>
          <div className="content">
            Based on our research findings, we created three personas that embody the primary (elderly immigrant), secondary (healthcare professional), and tertiary (family member) archetypes of our user group.<br/> <br/>
            <div className="slideshow">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={img07} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img08} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img09} alt="Third slide" />
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
            <div className="content-subtitle">Design Goals</div>
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
              Based on our user research findings, we began ideating on different possible solutions that address the design goals. The considered solutions are summarized in the table below.
              <img src={img14} alt="considered solutions table summary" className="table" />
            </div>
            <div className="stage-teal solution">
              <div className="sel-sol">
                <img src={img15} alt="equalicare phone mockup" className="icon" />
                <ul className="icon-caption">
                  <bold>Format:</bold> phone/tablet app
                  <li>Accessible at home, available "on the go"</li>
                  <li>Does not completely take away from in-person appointments</li>
                  <li>Doctors and patients are both connected through a single platform</li>
                </ul>
              </div>
            </div>
            <div className="content-subtitle">Low Fidelity Wireframes</div>
            <div className="content">
              Drawing inspiration from the outlined solutions considered, we began early ideation with brainstorming sketches and low fidelity wireframes that address the design goals. In particular, we kept the unique needs of elderly immigrants in mind while approaching visual design elements. A major part of this was keeping in mind visual/aural disabilities, language differences, and technological literacy. <br/>
              <div className="slideshow lofi-wireframes">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={img19} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <p><bold>Heath Summary (Main Page)</bold></p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={img20} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <p><bold>Make Appointment</bold></p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={img21} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <p><bold>Current Care</bold></p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={img22} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <p><bold>Questions/Concerns</bold></p>
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
            {/* <div className="content-subtitle">Selected Solution</div> */}
            <div className="content">
              Ultimately, we constructed a solution that incorporates the core aspects of our 4 possible brainstormed solutions, extracting the most important elements of each that would combine for the best overall user experience. This combined solution focuses on increased communication between the patient and healthcare provider, through forms completed in their native language. There is also an emphasis on post-appointment care, through video tutorials and live chat options. <br/>
            </div>
            {/* <div className="content">
              <div className="content-subtitle">App Usage Timeline</div>
              <p>We aim to provide assistance throughout the entire healthcare process [ADD MORE EXPLANATION HERE]</p>
              <img src={img16} alt="usage timeline graphic" className="timeline"/>
            </div> */}
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
            <div className="content">
              <div className="content-subtitle">App Usage Timeline</div>
              <p>Our design solution hopes to create a more well-rounded experience for elderly immigrants <italic>throughout their entire healthcare journey</italic>. Interpreters are great to have during appointments at the doctor’s office, however patients should feel well supported and confident in their care whether they are at the clinic, or at home. By incorporating features that address a patient's situation at any point in their healthcare journey, they are able to play a larger role in their healthcare through better comprehension and opportunities to ask questions in their native language. </p>
              <img src={img16} alt="usage timeline graphic" className="timeline"/>
            </div>
            <div className="content-subtitle">Prototype & Scenarios</div>
            <div className="prototypes">
              <div className="prototype right">
                <div className="details">
                  <div className="title">Onboarding</div>
                  <div className="description">
                    Users are introduced to EqualiCare through a series of screens, which allow them to customize language and text size preferences. They are also given an overview of the core application features.<br/> <br/>
                    <bold className="pain-points">Pain Points Solved</bold> <br/>
                    <ul>
                      <li><bold>Accessible</bold> for elderly immigrants, through language, text size, and audio options.</li>
                      <li>User data is kept <bold>secure</bold> using login token provided by healthcare provider.</li>
                    </ul>
                  </div>
                </div>
                <img src={img23} alt="onboarding prototype" className="image" />
              </div>
              <div className="prototype left">
                <div className="details">
                  <div className="title">Schedule an Appointment</div>
                  <div className="description">
                    Scheduling appointments is easy and time efficient. After selecting an available date and time, users fill out pre-screening questions in their native language which will be translated and then sent to the doctor ahead of time. Based on the patient's responses, they may be provided with a predicted diagnosis determined from a constantly updating healthcare database. <br/> <br/>
                    <bold className="pain-points">Pain Points Solved</bold>
                    <ul>
                      <li>Pre-screening promotes <bold>time efficiency</bold>, allowing patients to fill out forms in advance in their native language.</li>
                      <li>Drop-down suggestions for symptoms save <bold>time and effort</bold>.</li>
                    </ul>
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
                    <ul>
                      <li>The technology is <bold>accessibile</bold> by accounting for possible hearing, visual, and technological disabilities, as well as language barriers. This is seen through the video tutorials with closed captioning and audio playback options.</li>
                      <li>Accessing treatment plans and medical information through EqualiCare is much more <bold>effective</bold> than the traditional method of printed documents. This information can be accessed at any time and in the patient's <bold>native language</bold>. This enables them to <bold>better comprehend their healthcare</bold> and not rely on the assistance of relatives as much.</li>
                    </ul>
                  </div>
                </div>
                <img src={img25} alt="review current care prototype" className="image" />
              </div>
              <div className="prototype left">
                <div className="details">
                  <div className="title">Ask Doctor a Question</div>
                  <div className="description">
                    If, at any point, the patient has a question for a doctor, they have many options to go about obtaining an answer. This includes sending a translated message, live chatting, or calling a healthcare professional who speaks their native language.<br/> <br/>
                    <bold className="pain-points">Pain Points Solved</bold> <br/>
                    <ul>
                      <li><bold>Thorough and honest</bold> communication, from information presented in the patient's native language and the ability to get in contact with a healthcare provider who speaks the same language and shares cultural context.</li>
                      <li><bold>Time efficient</bold> through live chat and call options available 24/7 and access to audio recordings of previous calls.</li>
                    </ul>
                  </div>
                </div>
                <img src={img26} alt="ask question prototype" className="image" />
              </div>
            </div>
        </section>

        <section className="reflection" id="reflection">
          <div className="content-title"><span className="number">05</span><span className="header">Reflection</span></div>
          <div className="learned row">
            <div className="col-6 image-col ">
              <img src={img27} alt="photo of me & my group" className="image" />
              <div className="img-caption">INFO 200 Best Final Project Award Winners<br/> <span className="img-thanks">Special thanks to my TA (Jojo), team members (Brian, Jay, and Alvin), and professor (Mr. Barker)!</span> </div>
            </div>
            <div className="col-6">
              <div className="details">
                {/* <div className="content-subtitle">What I Learned</div> */}
                <div className="caption">
                As my first ever end to end design project, I learned so much from this experience. This project was my introduction to the user-centered design world and is what ultimately made me want to pursue this career path. This project was extremely rewarding, given that all of my group members and I have immigrant grandparents living in the U.S., who are affected by a lower quality of healthcare due to language, cultural, and technological barriers. Being able to research and design a solution that would directly benefit underrepresented groups, such as my grandparents, is something that I am eager to address more in the future. I am extremely thankful to have had the opportunity to work with an amazing team as well. Working with others throughout the design process is a great way to learn from each other, and incorporate many different and valuable perspectives. 
                {/* <br/> <br/>Special thanks to my team members (Brian, Jay, and Alvin), my TA (Jojo), and my professor (Mr. Barker)! */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="learned row">
            <img src={img27} alt="photo of me & my group" className="image" />
            <div className="image-caption">INFO 200 Best Final Project Award Winners<br/> Special thanks to my TA (Jojo), team members (Brian, Jay, and Alvin), and professor (Mr. Barker)! </div>
            <div className="details">
              <div className="content-subtitle">What I Learned</div>
              <div className="caption">
              As my first ever end to end design project, I learned so much from this experience. This project was my introduction to the user-centered design world and is what ultimately made me want to pursue this career path. This project was extremely rewarding, given that all of my group members and I have immigrant grandparents living in the U.S., who are affected by a lower quality of healthcare due to language, cultural, and technological barriers. Being able to research and design a solution that would directly benefit underrepresented groups, such as my grandparents, is something that I am eager to address more in the future. I am extremely thankful to have had the opportunity to work with an amazing team as well. Working with others throughout the design process is a great way to learn from each other, and incorporate many different and valuable perspectives. 
              <br/> <br/>Special thanks to my team members (Brian, Jay, and Alvin), my TA (Jojo), and my professor (Mr. Barker)!
              </div>
            </div>
          </div> */}

          <div className="stage-grey">
            <div className="content-subtitle">Next Steps</div>
            <div className="content">
              <div className="next-steps">
                <div className="step-num">1</div>
                <div className="step first">
                  <bold className="step-title">Conduct usability tests among elderly immigrants</bold> <br/>
                  Usability tests would be extremely beneficial in order to eliminate potential biases from research and ideation. This would enable us to make the product the most useful for the user group. One question in particular I would hope to explore more is whether the interface and use of iconography is intuitive for those from other cultures.
                </div>
                <div className="step-num">2</div>
                <div className="step">
                  <bold className="step-title">Design a tablet version of the application</bold> <br/>
                  It is fairly common for older people to use tablets instead of smartphones, due to the larger screen size. Designing a complementary tablet application would make the product more versatile, with the ability to fit a user’s device preferences.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="thanks">
          <div className="thanks-text">Thanks for reading!</div>
          <div className="thanks-subtext">Check out my other projects below.</div>
        </div>
        <div className="bottom-navigation">
          <Link to="/" className="link link-inactive">All</Link>
          <Link to="/equalicare" className="link link-active">EqualiCare</Link>
          <Link to="/proxxmu" className="link link-inactive">Proxxmu</Link>
          {/* <Link to="/recoverycafe" className="link link-inactive">Recovery Cafe</Link> */}
        </div>
      </section>
    );
  }
}

export default EqualiCare;