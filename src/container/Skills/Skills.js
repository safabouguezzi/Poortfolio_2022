import React from 'react'
import images from '../../constants/images'
import "./Skills.scss"
// import "../Work/Work.scss"


const Skills = () => {
  return (
    <div className='app__skill'>

    <section id="skills" className="skills">
      <div id="container_skill" className="container" data-aos="fade-up">

      <h2 className='app__head-text'>Ski<span>lls</span></h2>

        <div className="section-title">
          <p className='app__about-text'>Here are some of the technologies I use on a day-to-day basis.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="count-box">
              <img src={images.html} alt="HTML icon"/>
              <h4>HTML</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <img src={images.css} alt="CSS icon"/>
              <h4>CSS</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <img src={images.javascript} alt="JavaScript icon"/>
              <h4>JavaScript</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <img src={images.react} alt="React icon"/>
              <h4>React</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <img src={images.redux} alt="Redux icon"/>
              <h4>Redux</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <img src={images.node} alt="Node.js icon"/>
              <h4>Node.js</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <img src={images.git} alt="Git icon"/>
              <h4>Git</h4>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <img src={images.sass} alt="Git icon"/>
              <h4>Sass</h4>
            </div>
          </div> */}

        </div>

      </div>
    </section>

    </div>
  )
}

export default Skills