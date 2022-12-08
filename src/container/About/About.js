import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div id="about" className="app__about ">
      <h2 className="app__head-text">
        {" "}
        About <span> Me </span>
      </h2>
      <h3 className="app__about-st-text">A curiosity-driven Full-stack Developer</h3>
      <div className="app__about-text-container">
        <p className='app__about-text'>
          My first venture into the realm of web development happened to coincide
          with the day I published my thesis (Architectural Exploration of CNNs on SoC). I have thought of
          deploying my thesis project, which is an application of traffic sign recognition, on a webpage that would be valuable to other
          fellows. I enjoy showcasing my work while also learning from others.
          Curiosity then becomes a passion. The desire to bring digital things to
          life through code drives me to pay close attention to detail and to
          value the design of products as much as programming. I've been honing my
          skills ever since!
        </p>
        
        <p className="app__about-text">
          I'm happiest when I'm creating, learning, exploring, and contemplating
          how to improve things. I'm currently completing GOMYCODE's Full-Stack
          JavaScript Bootcamp and looking for a full-time position. Let's work
          together! 😉
        </p>
        <br/>
        <div class="container-txt-link">
                  <a href="./#contact" class="u-line">
                    get in touch!
                  </a>
                </div>
      </div>
    </div>
  );
}

export default About