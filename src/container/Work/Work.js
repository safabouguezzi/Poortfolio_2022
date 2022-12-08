import React from 'react'
import images from '../../constants/images'
import "./Work.scss"

const Work = () => {
  return (
    <div id="work" className="app__work ">
    <h2 className="app__head-text">
      My Port<span>folio</span>
    </h2>
    

    <section id="projects" className="portfolio section-bg">
      <div id="container" className="container col-lg-11" data-aos="fade-up">

        <div className="section-title">
          <p className='app__about-text'>Here are some of the projects that I've built or are currently in the works!</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <a href="https://mc6hte.csb.app/" rel="noreferrer" target="_blank" className="">
              <div className="portfolio-wrap">
                <img src={images.todo} className="img-fluid" alt="TODO website"/>
                <div className="portfolio-info">
                  <h4>TODO</h4>
                  <div className="portfolio-links">
                    <a href="https://mc6hte.csb.app/" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </a>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <a href="https://39qkir.csb.app/" rel="noreferrer" target="_blank" className="">
            <div className="portfolio-wrap">
              <img src={images.movie} className="img-fluid" alt="movie search app"/>
              <div className="portfolio-info">
                <h4>MOVIE SEARCH</h4>
                {/* <p>Coming Soon!</p> */}
                <div className="portfolio-links">
                <a href="https://39qkir.csb.app/" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap ">
              <div className="img-fluid"> 
              <img src={images.quizzical} className="img-fluid blur" alt="Blurred out hero of Quizzical"/>
              </div>
              <div className="portfolio-info">
                <h4>QUIZZICAL</h4>
                <p>Coming Soon!</p>
                <div className="portfolio-links">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    
  </div>
  )
}

export default Work