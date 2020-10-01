import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as NavScroll } from 'react-scroll';

import { ImageGroup, Image } from 'react-fullscreen-image';

import ProjectNav from './ProjectNav.js';
import '../App.css';

import proxxmuHero from '../img/proxxmuCover.png';
import interviewsum from '../img/proxxmu-interviewsum.png';
import companal from '../img/proxxmu-companal.png';
import affdiag from '../img/proxxmu-affdiag.png';
import persona1 from '../img/proxxmu-persona1.png';
import persona2 from '../img/proxxmu-persona2.png';
import persona3 from '../img/proxxmu-persona3.png';
import userjourney from '../img/proxxmu-userjourney.png';
import lightbulb from '../img/proxxmu-lightbulb.png';
import connecting from '../img/proxxmu-connecting.png';
import storyboard1 from '../img/proxxmu-storyboard1.png';
import storyboard2 from '../img/proxxmu-storyboard2.png';
import storyboard3 from '../img/proxxmu-storyboard3.png';
import infoarch from '../img/proxxmu-infoarch.png';
import wireframes from '../img/proxxmu-wireframes.png';
import wfscenarios from '../img/proxxmu-wfscenarios.png';
// import wfscenarios from '../img/proxxmu-wfscenarios_blank.png';
import grouppic from '../img/proxxmu-grouppic.png';


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
            description="Proxxmu is a safe platform, connecting neighbors who need help with those who are willing and able to help others. In doing so, it  builds neighborhood community and fosters the formation of genuine relationships."
            // "provides a safe platform for neighbors to seek help and build relationships amongst one another. Focused on connecting partners to foster accountability and mutual support. Conducted competitive analysis and user interviews."
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

        <div className="other-title">Process</div>
        <div className="content process">
          <div className="process-header"><span className="process-number">01</span>Research</div>
          <div className="process-header"><span className="process-number">02</span>Problem Framing</div>
          <div className="process-header"><span className="process-number">03</span>Ideation</div>
          <div className="process-header"><span className="process-number">04</span>Design</div>
          <div className="process-text">
            Interviews <br/> Competitive Analysis <br/> User Personas <br/> User Journey Map
          </div>
          <div className="process-text">
            Problem Statement <br/> Design Question <br/> Design Goals 
          </div>
          <div className="process-text">
            Storyboards <br/> Information Architecture <br/> Sketching <br/> Wireframes
          </div>
          <div className="process-text">
            Design System <br/> High Fidelity Mockups <br/> Interactive Prototype
          </div>
        </div>

        <section className="research" id="research">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>01</span><span className="header">Research</span></div>
          <div className="content-subtitle">Interviews</div>
          <div className="content">
            Our team conducted 4 interviews with potential users to gain qualitative data on the perception and values surrounding neighbors in order to make educated design decisions. This helped us to understand their needs and identify pain points as neighbors look to one another for support. We tried to reach individuals with different levels of connection to their current neighbors to help scope the user group. This helped us to ultimately define intended users and non-users. <br/> <br/>
            <p>During interviews, we aimed to explore the following research questions:</p>
            <div className="research-questions">
              <ul>
                <li>How can we connect those in need with neighbors who can provide?</li>
                <li>What hesitations do individuals have about connecting with neighbors they have not met before? What is the root of these hesitations?</li>
                <li>How often do people look to their neighbors for support?</li>
                <li>What common categories do people find themselves needing aid for? (e.g. food, clothing, place to stay, carpools, nanny, tools, etc.)</li>
                <li>What are the advantages and disadvantages of existing, or similar, solutions?</li>
              </ul>
            </div>
            <img src={interviewsum} alt="graphic summarizing interview participants" className="interview-img" />
          </div>
          <div className="stage-grey">
            <div className="content">
              <bold className="content-subheading">Key Insights</bold>
              <div className="insights-list">
                <div className="insight-number">1</div>
                <div className="insight">Each neighborhood is unique, and the level of community interactions will vary significantly from one to another. Demographics and age in particular have a large impact.</div>
                <div className="insight-number">2</div>
                <div className="insight">Neighbors and a sense of community can be two different things; neighbors are close by proximity, while communities are close people you can rely on in time of need.</div>
                <div className="insight-number">3</div>
                <div className="insight">Organized efforts to help one another or for community building are uncommon in neighborhoods. It is all solely individual efforts (which are also not all that frequent). </div>
                <div className="insight-number">4</div>
                <div className="insight"><bold>INSIGHT #4</bold></div>
                <div className="insight-number">5</div>
                <div className="insight">INSIGHT #5.</div>
              </div>
            </div>
          </div>

          <div className="content-subtitle">Competitive Analysis</div>
          <div className="content">
            We researched existing products that serve to connect neighbors, and analyzed them across certain metrics that we determined from patterns across interviews and market research. This revealed the need for:
            <ul>
              <li>increased prioritization of accountability.</li>
              <li>low, medium, and high commitment opportunities, to reach more users who want to get involved.</li>
              <li>a more balanced emphasis on both community building and providing support. Interviews revealed that people are more likely to help others if they have established rapport, yet no products strongly fulfill <italic>both</italic> of these metrics. </li>
            </ul>
            <img src={companal} alt="competitive analysis summary chart" className="ca-table" />
          </div>

          <div className="content-subtitle">User Personas</div>
          <div className="content">
            <p>At the conclusion of user interviews and competitive analysis, we defined three user groups relevant to our solution, which translate to each of the three personas we eventually created. We matched each of these personas with a "role" that we began to call them moving foward for clarity purposes. The primary persona takes on the role of a "receiver," the secondary persona is known as the "provider," and the tertiary persona is the "connector." To best understand our users, we captured the scenario, goals, desires, and pain points of each.</p>
            <div className="content-subheading">Affinity Diagramming Brainstorm</div>
            <p>For each persona, we began with affinity diagramming to ideate the different characteristics and experiences of our users. Then, we grouped them into logical categories and sub-categories based on common themes.</p>
            <img src={affdiag} alt="affinity diagramming for user personas" className="aff-diag" />
          </div>
          <div className="content">
            In order to ensure that our personas were directly informed from our research, we outlined which interview source(s) evidenced each element of our 3 personas (see <a target="_blank" href="https://docs.google.com/document/d/1dG-7IIQafgaxMJiv0KwlDho5FjEaJ_OnEdcPrGmLVzs/edit?usp=sharing">here</a>). Margaret represents our primary persona (receiver), Iris is secondary (provider), and Noah is tertiary (connector).<br/> <br/>
            <div className="personas slideshow">
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
          <div className="content-subtitle">User Journey Map</div>
          <div className="content">
            We mapped out our primary persona Margaret's user journey, pinpointing her emotions based on various events that occur as she seeks help among neighbors. This really helped us get into the mindset of our user to better visualize and understand the frustrations they might experience.
            <img src={userjourney} alt="margaret's journey map" className="user-journey" />
          </div>
        </section>

        <section className="problem-framing" id="problem">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>02</span><span className="header">Problem Framing</span></div>
          <div className="content">
            {/* <img src={lightbulb} alt="lightbulb" className="lightbulb" /> */}
            From the culmination of our research, it became clear that in order to ensure individuals in a neighborhood are getting the help they need, there needs to be a greater sense of accountability. Many existing solutions utilize social media-like feeds or group chats, which has proven to be innefective, as important information can easily get lost or posts can be ignored. Instead, connecting individuals to form partnerships is much more actionable and reliable, and simultaneously fosters the formation of genuine relationships.<br/> <br/>
            <img src={connecting} alt="connecting individuals is more effective than connecting groups" className="connecting-img" />
          </div>
          <div className="content-subtitle">Needs to Address</div>
          <div className="content">
            <p>Using the information gathered from our interviews and competetive analysis, we came up with the following current (COVID-19) and long-term needs that exist among potential users.</p>
            <div className="problems-table">
              <div className="problems-header">
                {/* Current */}
                COVID-19
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
          <div className="content-subtitle">Problem Statement</div>
          <div className="content">
            In the wake of COVID-19, it has become clear that, within a neighborhood, there are many who are in need of help or assistance, and those who can and want to help others. However, it can be difficult for these individuals to connect with each other, leading to needs remaining unmet and/or inefficient and wasteful solutions. <bold>There remains a need to connect these individuals, so that those in need feel that they can rely on their neighbors for support – with or without COVID-19.</bold> This project aims to create a solution for these current and long-term problems, and build community in the process.
          </div>
          <div className="stage-pink">
            <div className="content-subtitle">Design Question</div>
            <div className="content stage-text design-question">
            How might we connect individuals within a neighborhood who need help with those who want to help others?
            </div>
          </div>
          {/* <div className="content-subtitle">Design Goals</div> */}
          <div className="stage-grey">
            <div className="content">
              <bold className="content-subtitle">Design Goals</bold>
              <div className="goals-list">
                <div className="goal-num">1</div>
                <div className="goal">Help neighbors feel that they can rely on each other for support when in need</div>
                <div className="goal-num">2</div>
                <div className="goal">Build community & foster the formation of genuine relationships</div>
                <div className="goal-num">3</div>
                <div className="goal">Alleviate stress among neighbors who need help and their caregivers</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ideation" id="ideation">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>03</span><span className="header">Ideation</span></div>
          <div className="content-subtitle">Storyboards</div>
          <div className="content">
            We created three storyboards to explore various user interactions that address the design goals. We created two for our primary persona (receiver), which display onboarding procedures and requesting help from a neighbor on the app. The third is from the perspective of our secondary persona (provider) and depicts the user accepting and fulfilling a task. <br/> <br/>
          </div>
          <div className="content storyboards slideshow ">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={storyboard1} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <p><br/><bold>Signing Up + Onboarding</bold></p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={storyboard2} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <p><br/><bold>Requesting Help</bold></p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={storyboard3} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <p><br/><bold>Fulfilling Needs</bold></p>
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
          <div className="content-subtitle">Information Architecture</div>
          <div className="content">
            With the design goals and general user interactions as a guide, we mapped out our possible solution in an information architecture diagram. This helped us to establish a logical app structure and identify core features. <br/> <br/>
            <img src={infoarch} alt="information architecture map" className="info-arch" />
          </div>
          {/* <div className="content-subtitle">Sketching</div>
          <div className="content">
            We then created <a>paper prototypes</a> to visualize key user tasks.
          </div> */}
          <div className="content-subtitle">Wireframes</div>
          <div className="content">
            <p>Using the feedback from usability tests on our initial sketches, we created <a target="_blank" href="https://drive.google.com/file/d/1UDvHQg3qoge4kBkRWixSfG5UuUjgwoP-/view?usp=sharing">annotated wireframes</a> for the full system. In doing so, we also outlined key user scenarios to better visualize the app's user interactions.</p>
            <italic>Reflection Point: Upon completion of these wireframes, it became clear that they were much closer to mid-fidelity rather than low-fidelity as we originally intended. If we were to go back, we would instead make use of filler content, so that there is less focus on the actual text and more on the layout itself. This would have been more beneficial for our subsequent process of receiving feedback and iterating on our designs. </italic>
            <img src={wireframes} alt="digital wireframes" className="wireframe-system" />
            <img src={wfscenarios} alt="wireframes of key user scenarios" className="wireframes" />
          </div>
        </section>

        <section className="design" id="design">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>04</span><span className="header">Design</span></div>
          <div className="interactive-prototype">
            {/* <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="400" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fbubnbaqrb2UeSdqLcQABYu%2FProxxmu%3Fnode-id%3D368%253A8677%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowfullscreen></iframe> */}
            <iframe style={{border: "0px solid rgba(0, 0, 0, 0.1);"}} width="400" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fbubnbaqrb2UeSdqLcQABYu%2FProxxmu%3Fnode-id%3D368%253A8677%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowfullscreen></iframe>
          </div>
        </section>

        <section className="reflection" id="reflection">
          <div className="content-title"><span className="number" style={{color: this.state.color}}>05</span><span className="header">Reflection</span></div>
          <div className="content-subtitle">Takeaways</div>
          <div className="content">
            <div className="takeaways">
              <div className="num">1</div>
              <div className="text first">
                <bold className="title">Scope the user group </bold> <br/>
                Defining a well-scoped and clear user group proved to be so important in reaching a design solution that well addresses user needs and pain points. During the research phase, we quickly realized that our initial user group of "neighbors" was far too broad (as it could include anybody). By narrowing it to individuals in need and those who are willing and able to help, we were able to ideate much more actionable and fulfilling features for our solution.  
              </div>
              <div className="num">2</div>
              <div className="text">
                {/* <bold className="title">Draw clear connections between research and design decisions</bold> <br/> */}
                <bold className="title">Research is SO important</bold> <br/>
                This probably goes without saying, but the importance of research became very clear since we were addressing what originally felt like such a broad problem space (helping people ... help people). I had an "a-ha" moment during one of my interviews (which ended up lasting upwards of 2 hours), as they were sharing personal stories from their neighborhood experiences. This brought about so many new and intriguing insights that really helped scope our problem space and user group. If I could go back, I would have liked to spend more time in the research phase and conduct more interviews as it felt somewhat rushed since we were following along with class deadlines. 
              </div>
              <div className="num">3</div>
              <div className="text">
                <bold className="title">Maintain a balance of synchronous and asynchronous work</bold> <br/>
                Given the unexpected circumstances culminating in a virtual quarter, we completed this entire project remotely. While not being able to interact with one another directly and navigating differing class schedules/timezone differences was certainly challenging, we were able to figure out a comfortable and effective way of doing so. Firstly, it was so important to maintain clear communication regarding overarching goals for each deliverable and asynchronous responsibilities. This made the times we did convene as a group through Zoom productive and extremely  valuable, as it enabled each of us to have a voice in making larger decisions.
                <br/><br/><br/><br/><br/>
              </div>
            </div>
          </div>

          {/* <div className="stage-grey">
            <div className="content-subtitle">Next Steps</div>
            <div className="content">
              <div className="next-steps">
                <div className="num">1</div>
                <div className="text first">
                  <bold className="title">NEXT STEP 1</bold> <br/>
                  Usability tests would be extremely beneficial in order to eliminate potential biases from research and ideation. This would enable us to make the product the most useful for the user group. One question in particular I would hope to explore more is whether the interface and use of iconography is intuitive for those from other cultures.
                </div>
                <div className="num">2</div>
                <div className="text">
                  <bold className="title">NEXT STEP 2</bold> <br/>
                  It is fairly common for older people to use tablets instead of smartphones, due to the larger screen size. Designing a complementary tablet application would make the product more versatile, with the ability to fit a user’s device preferences.
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <img src={grouppic} alt="team photo via zoom" className="image" />
            <div className="img-caption">Shoutout to my team members, Tianyi and Jennifer!</div>
          </div> */}

        </section>

        <div className="thanks">
          <div className="thanks-text">Thanks for reading!</div>
          <div className="thanks-subtext">Check out my other projects below.</div>
        </div>
        <div className="bottom-navigation">
          <Link to="/" className="link link-inactive">All</Link>
          <Link to="/equalicare" className="link link-inactive">EqualiCare</Link>
          <Link to="/proxxmu" className="link link-active">Proxxmu</Link>
          {/* <Link to="/recoverycafe" className="link link-inactive">Recovery Cafe</Link> */}
        </div>

      </section>  
    );
  }
}

export default Proxxmu;