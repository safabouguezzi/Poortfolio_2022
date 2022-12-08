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
          <div className="portfolio-wrap">
            <a href="https://todo-modern.netlify.app/" rel="noreferrer" target="_blank" className="">
              
                <img src={images.todo} className="img-fluid" alt="TODO website"/> </a>
                <div className="portfolio-info">
                <a href="https://todo-modern.netlify.app/" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><h4>TODO</h4></a>
                <a href="https://github.com/safabouguezzi/Todo_app" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><h4>Source Code</h4></a>
                  {/* <div className="portfolio-links">
                    <a href="https://todo-modern.netlify.app/" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-plus"></i></a>
                  </div> */}
                </div>
              </div>
            
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          
            <div className="portfolio-wrap">
            <a href="https://movie-sea.netlify.app/" rel="noreferrer" target="_blank" className="">
              <img src={images.movie} className="img-fluid" alt="movie search app"/> </a>
              <div className="portfolio-info">
              <a href="https://movie-sea.netlify.app/" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><h4>MOVIES</h4></a>
              <a href="https://github.com/safabouguezzi/movie_redux_pagination" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><h4>Source Code</h4></a>

              

                {/* <div className="portfolio-links">
                 <a href="https://movie-sea.netlify.app/" rel="noreferrer" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-plus"></i></a>
                </div> */}
              </div> 
            </div>
            
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap ">
              <div className="img-fluid "> 
              <img src={images.quizzical} className="img-fluid blur" alt="Blurred out hero of Quizzical"/>
              </div>
              <div className="portfolio-info comming-soon">
                  
                <h4>QUIZZICAL</h4>
                <h4>Coming Soon!</h4>
                  
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