import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';

import ProjectNav from './ProjectNav.js';
import '../App.css';

import hero from '../img/recovery-hero.png';
import brandidentity from '../img/recovery-brandidentity.png';
import site from '../img/recovery-site.png';
import site2 from '../img/recovery-site2.png';
import logoideation from '../img/recovery-logoideation.png';
import logoideation2 from '../img/recovery-logoideation2.png';
import iconideation from '../img/recovery-iconideation.png';
import iconography from '../img/recovery-iconography.png';
import iconography2 from '../img/recovery-iconography2.png';
import color from '../img/recovery-color.png';
import color2 from '../img/recovery-color2.png';
import typography from '../img/recovery-typography.png';
import typography2 from '../img/recovery-typography2.png';
import logo from '../img/recovery-logo.png';
import logos from '../img/recovery-logos.png';
import infoarch from '../img/recovery-infoarch.png';
import book1 from '../img/recovery-book1.png';
import book2 from '../img/recovery-book2.png';
import book3 from '../img/recovery-book3.png';
import book4 from '../img/recovery-book4.png';
import book5 from '../img/recovery-book5.png';
import book6 from '../img/recovery-book6.png';
import book7 from '../img/recovery-book7.png';
import book8 from '../img/recovery-book8.png';
import book9 from '../img/recovery-book9.png';


class RecoveryCafe extends Component {
  state = {
    // color: "#DFBBA6"
    color: "#BA462C"
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content recovery">
        <div className="cover" id="top">
          <ProjectNav
            hero={hero}
            title="Recovery Café"
            date="Winter 2020"
            duration="5 weeks"
            team="Solo"
            role="Research, Branding, UI Design"
            description="A rebrand for a local Seattle café that helps individuals fight homelessness, addiction, & mental health challenges. I refreshed Recovery Café's brand identity by developing a cohesive system that enhances their mission & core values."
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
              to="identity"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Identity
            </NavScroll>
          </li>
          {/* <li className="scroll-item">
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
          </li> */}
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
              to="book"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Brand Book
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

        {/* <div>
          <br/>
          <a href="#design" class="final-product-link">
            View Final Product <span class="text-span-28"> ↓ <br/> &zwj;</span>
          </a>
            <input type="button" onClick="document.getElementById('design').scrollIntoView();" />
        </div> */}

        {/* <a href="#down">Click Here to Smoothly Scroll Down</a>
        <div id="down">
          <h1>You are down!</h1>
        </div> */}




        <div className="other-title">Process</div>
        <div className="content process">
          <div className="process-header"><span className="process-number">01</span>Research</div>
          <div className="process-header"><span className="process-number">02</span>Identity</div>
          <div className="process-header"><span className="process-number">03</span>Design</div>
          <div className="process-header"><span className="process-number">04</span>Brand Book</div>
          <div className="process-text">
            Client Background <br/> Brand Audit <br/> Site Audit <br/> Communication Goals
          </div>
          <div className="process-text">
            Logo <br/> Iconography <br/> Color <br/> Typography <br/>
          </div>
          <div className="process-text">
            Information Architecture <br/> Wireframes <br/> High Fidelity Prototype
          </div>
          <div className="process-text">
            {/* Mobile Screens <br/> Brand Books */}
          </div>
        </div>

        <section className="research" id="research">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>01</span><span className="header">Research</span></div>
          <div className="content-subtitle">Client Background</div>
          <div className="content">
            Recovery Café is a Seattle non-profit that guides suffering individuals toward healing and recovery. The organization's brand is unaligned with their mission and core values, while the website is difficult to navigate.<br/><br/>
          </div>

          <div className="content">
            <div className="content-subheading">Audience</div>
            <ul>
              <li><bold className="grey">Primary:</bold> Individuals traumatized by homelessness, addiction and other mental health challenges</li>
              <li><bold className="grey">Secondary:</bold> Volunteers, cafe companions, medical case managers, and donors</li>
            </ul>
            <br/>
          </div>

          <div className="stage-red">
            <div className="content">
              <div className="client">
                <div className="stage-title">MISSION STATEMENT</div>
                {/* <div className="content-subtitle">Mission Statement</div> */}
                <div className="stage-title principles">GUIDING PRINCIPLES</div>
                <div>We are a community of individuals who have been traumatized by homelessness, addiction and other mental health challenges, coming to know ourselves as loved with gifts to share. At Recovery Café, our community fosters stability, healing, & recovery.</div>
                <div>
                  <ul>
                    <li>Connect with divine love in ourselves and others</li>
                    <li>Show respect</li>
                    <li>Cultivate compassion</li>
                    <li>Practice forgiveness</li>
                    <li>Encourage growth</li>
                    <li>Give back</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="content">
            <br/><br/>
            <div className="content-subheading">Audience</div>
            <ul>
              <li><bold className="grey">Primary:</bold> Individuals traumatized by homelessness, addiction and other mental health challenges</li>
              <li><bold className="grey">Secondary:</bold> Volunteers, cafe companions, medical case managers, and donors</li>
            </ul>
          </div> */}
          
          <div className="content-subtitle">Brand Audit</div>
          <div className="content">
            Before diving into the redesign, I took a closer look at Recovery Café's current brand identity. Overall, the design language is inconsistent and could be improved to more closely support the organization's mission and values. <br/><br/>
            <img src={brandidentity} alt="recovery café's current brand identity" className="brand-identity" />
          </div>

          <div className="content-subtitle">Site Audit</div>
          <div className="content">
            {/* <img src={site} alt="screenshot of Recovery Café website" className="website" /> */}
            <img src={site2} alt="screenshot of Recovery Café website" className="website" />
          </div>

          {/* <div className="stage-grey"> */}
            {/* <div className="content-subtitle">Key Insights</div>
            <div className="content">
              <div className="insights-list">
                <div className="insight-number">1</div>
                <div className="insight">Recovery Café .</div>
                <div className="insight-number">2</div>
                <div className="insight">It is often <bold>difficult to use video chat</bold> to communicate with interpreters.</div>
                <div className="insight-number">3</div>
                <div className="insight">Family members do not prefer to discuss medical issues in detail with their parent, to <bold>prevent them from overthinking</bold>.</div>
                <div className="insight-number">4</div>
                <div className="insight">Waiting for an interpreter can <bold>take up a lot of time</bold> for the healthcare provider.</div>
                <div className="insight-number">5</div>
                <div className="insight">Crucial medical information can be <bold>lost in translation</bold>.</div>
              </div>
            </div> */}
          {/* </div> */}

          <div className="stage-grey">
            <div className="content-subtitle">Communication Goals</div>
            <div className="content">
              Based on my client research, I outlined three main communicataion goals that guided the rest of my re-brand:
              <div className="insights-list">
                <div className="insight-number">1</div>
                <div className="insight"><bold>Love</bold>
                  <br/>Ensure that all members feel loved and supported in their road to recovery.</div>
                <div className="insight-number">2</div>
                <div className="insight"><bold>Healing</bold> 
                  <br/>Embrace the healing process, and connect individuals with the resources they need to achieve this.</div>
                <div className="insight-number">3</div>
                <div className="insight"><bold>Community</bold>
                  <br/>Foster a community that welcomes individuals from all backgrounds.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="identity" id="identity">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>02</span><span className="header">Identity</span></div>
          <div className="content-subtitle">Logo</div>
          <div className="content">
            <bold className="content-subheading">Ideation</bold>
            <p>I started out with some sketching to ideate different ways that I could combine all three communication goals in a new logo. Then, I transformed 3 of them into low-fidelity digital versions, which I received feedback on from my peers.</p>
            <img src={logoideation2} alt="ideation sketches for logo" className="logo-ideation" />
            {/* <p>Then, I transformed 3 of these sketches into low-fidelity digital versions. </p>
            <img src={logos} alt="3 mid-fidelity logo iterations" className="logo-iterations" /> */}
            
            <bold className="content-subheading">Final Logo</bold>
            <p>I converged on the following final logo design, which incorporates all 3 communication goals.</p>
            <img src={logo} alt="final logo design" className="logo" />

          </div>
          <div className="content-subtitle">Iconography</div>
          <div className="content">
            <bold className="content-subheading">Ideation</bold>
            <img src={iconideation} alt="ideation sketches for icons" className="icon-ideation" />
            <bold className="content-subheading">Final Icons</bold>
            <p>I designed 5 cohesive icons, each representing an important call to action from the website. They are simple, yet intuitive and collectively embody the communication goals. Moreover, they maintain the repetition of hearts to mirror the values of love and support reflected in the logo and Recovery Café's mission.</p>
            <img src={iconography} alt="4 icons used in the app" className="iconography" />
          </div>
          <div className="content-subtitle">Color</div>
          <div className="content">
            Building off of the original color palette, I updated it to make visitors feel comfortable and welcome – like they are at home. Color is used sparingly, in order to maintain simplicitly and highlight the most important information.
            {/* <img src={color} alt="color palette" className="color-palette" /> */}
            <img src={color2} alt="color palette" className="color-palette" />
          </div>
          <div className="content-subtitle">Typography</div>
          <div className="content">I implemented a serif and sans serif typeface pairing that well complement each other and work together to improve readability and establish a sense of hierarchy. <br/><br/> </div>
          <div className="typography">
            <img src={typography2} alt="2 typefaces used for mobile screen text" className="image" />
            <div className="content image-text">
              {/* I implemented a serif and sans serif typeface pairing that well complement each other and work together to improve readability and establish a sense of hierarchy.  */}
              <br/> <br/> Minion Pro (serif) is mainly used for headings and is always displayed in bold. The serifs provide a comforting and familiar feel to mirror the intended Recovery Café experience. 
              <br/><br/><br/><br/><br/><br/>
              <br/> <br/> Avenir (sans serif) is a superfamily typeface, making it very versatile. It provides a clean, modern, and refreshing look to the Recovery Café brand. Avenir is primarily used for paragraph text.
            </div>
          </div>


          {/* <div className="content">
            I implemented a serif and sans serif typeface pairing that well complement each other and work together to improve readability and establish a sense of hierarchy. Minion Pro (serif) is mainly used for headings and is always displayed in bold. The serifs provide a comforting and familiar feel to mirror the intended Recovery Café experience. Avenir (sans serif) is a superfamily typeface, making it very versatile. It provides a clean, modern, and refreshing look to the Recovery Café brand. Avenir is primarily used for paragraph text.
            <img src={typography} alt="2 typefaces used for mobile screen text" className="typography" />
          </div> */}
        </section>

        <section className="design" id="design">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>03</span><span className="header">Design</span></div>
          <div className="content-subtitle">Information Architecture</div>
          <div className="content">
            I mapped out the site's information architecture to provide a much more intuitive experience finding the information you need. Despite diagramming the whole thing, I only created high fidelity screens for the first sub-page of each hamburger menu item due to time constraints.
            <img src={infoarch} alt="information architecture diagram" className="info-arch" />
          </div>
          <div className="content">
            <div className="content-subtitle">High Fidelity Prototype</div>
            <div className="content">Check out the high-fidelity prototype for Recovery Café's mobile website! You are able to scroll as normal, but please note that not all items are clickable, as I only prototyped main screens and not the entire mobile website. (Not working? <a href="https://www.figma.com/proto/xUDVZ4nliDnxbsq4xUouCX/Portfolio-Assets?node-id=383%3A4234&scaling=scale-down" target="_blank" className="prototype-link"><bold>Click here</bold></a> to view full screen in Figma.)</div>
            <div className="interactive-prototype">
              {/* ADDED THIS TO THE END TO REMOVE "last edited ..." : %26hide-ui=1 */}
              <iframe style={{border: "none"}} width="400" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxUDVZ4nliDnxbsq4xUouCX%2FPortfolio-Assets%3Fnode-id%3D383%253A4234%26scaling%3Dscale-down%26hide-ui=1" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        
        <section className="book" id="book">
          <div className="content-title remove-padding"><span className="number" style={{color: this.state.color}}>04</span><span className="header">Brand Book</span></div>
          <div className="content brandbook slideshow">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={book1} alt="Cover page" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book2} alt="Identity" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book3} alt="Logo" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book4} alt="Iconography" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book5} alt="Color" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book6} alt="Typography" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book7} alt="Image" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book8} alt="Mobile" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={book9} alt="Thank you page" />
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

        <section className="reflection" id="reflection">
          
          <div className="content-title"><span className="number" style={{color: this.state.color}}>05</span><span className="header">Reflection</span></div>
          
          <div className="stage-grey">
          <div className="content-subtitle">Takeaways</div>
          <div className="content">
            <div className="takeaways">
              <div className="num">1</div>
              <div className="text first">
                <bold className="title">The power of branding </bold> <br/>
                Branding is identity. It tells an instant story that connects values to a like-minded audience. The presence of a cohesive brand allows an organization to have a stronger impact by building more personal connections with users and providing an instantaneous sense of purpose and direction.
              </div>
              <div className="num">2</div>
              <div className="text">
                {/* <bold className="title">Draw clear connections between research and design decisions</bold> <br/> */}
                <bold className="title">Every part contributes to the whole</bold> <br/>
                It was extremely helpful approaching this rebrand one step at a time. Meticulously reviewing & refreshing every single visual element of Recovery Café's brand, one by one, helped me ensure that each item had a clear purpose in contributing to the greater goal of supporting the Café's core mission & values. 
              </div>
              <br/><br/>
            </div>
          </div>
          </div>

          {/* <div className="stage-grey"> */}
            <div className="content-subtitle">Next Steps</div>
            <div className="content">
              <div className="next-steps">
                <bold>Visit Recovery Café</bold> <br/>
                Unfortunately, I never got the chance to visit Recovery Café due to constraints of the class. I would love to visit and volunteer at the café to experience the work they do in person. If they expressed interest, I would also hope to present my brand guidelines and work with them to implement changes. 
              </div>
            </div>
          {/* </div> */}
        </section>

        <div className="thanks">
          <div className="thanks-text">Thanks for reading!</div>
          <div className="thanks-subtext">Check out my other projects below.</div>
        </div>
        <div className="bottom-navigation">
          <Link to="/" className="link link-inactive">All</Link>
          <Link to="/proxxmu" className="link link-inactive">Proxxmu</Link>
          <Link to="/equalicare" className="link link-inactive">EqualiCare</Link>
          <Link to="/recovery-cafe" className="link link-active">Recovery Café</Link>
          <Link to="/extra-works" className="link link-inactive">Extra Works</Link>
        </div>
      </section>
    );
  }
}

export default RecoveryCafe;