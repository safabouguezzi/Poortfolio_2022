import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div id="about" className="app__about ">
      <h2 className="app__head-text">
        About <span> Me </span>
      </h2>
      <h3 className="app__about-st-text">A curiosity-driven Full-stack Developer</h3>
      <div className="app__about-text-container">
        <p className='app__about-text '>
          My first venture into the realm of web development happened to coincide
          with the day I published my thesis <span className="about-text highlight ">(Architectural Exploration of CNNs on SoC)</span>. I have thought of
          deploying my thesis project, which is an application of traffic sign recognition, on a webpage that would be <span className="about-text highlight ">valuable to other
          fellows</span>. I enjoy showcasing my work while also learning from others.
          Curiosity then becomes a passion. The desire to bring digital things to
          life through code drives me to pay close <span className="about-text highlight ">attention to detail</span> and to
          <span className="about-text highlight ">value the design of products as much as programming.</span> I've been honing my
          skills ever since!
        </p>
        
        <p className="app__about-text">
          I'm happiest when I'm creating, learning, exploring, and contemplating
          how to improve things. I'm currently completing <span className="about-text highlight ">GOMYCODE's Full-Stack
          JavaScript Bootcamp</span> and looking for a full-time position. Let's work
          together! 😉
        </p>
        <br/>
        <div className="container-txt-link">
                  <a href="./#contact" className="u-line">
                    get in touch!
                  </a>
                </div>
      </div>
    </div>
  );
}

export default About