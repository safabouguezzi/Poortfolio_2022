import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import {images} from "../../constants"
import "./Header.scss"

const Header = () => {
  const [index, setIndex] = useState(0);

    let texts = [" coffee ☕", " chocolate (though I'm trying to cut back) 🍫", " books 📚", " cats 🐈"]
    useEffect(() => {
      setTimeout(() => {
        let next = index + 1;
        setIndex(next % texts.length);
      }, 3 * 1000);
    }, [index, texts.length]);


  return (
    <div id="home" className='app__header app__flex'>
        <motion.div
        whileInView={{x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 0.5}}
        className="app__header-info"
        >

          <div className='app__header-badge'>
            <div className='badge-cmp app__flex '>
              <h1 className=' header-text app__flex' >
                <div className="parg-text">Hey there! I'm <span className="hero-name-text">Safa! 👋</span></div>
                <div className="parg-text">I'm a <span className="head-text-title">Researcher turned Developer. </span></div>
                <div className="parg-text">I enjoy exploring and making things that are both useful and beautiful.</div>
                <div className="parg-text">
                  I love
                  <span   
                  className="badge-loopText"> 
                  {texts[index]}
                  </span>
                </div>
              </h1>
            </div>



            <div className="tag-cmp app__flex" id="cv"><a href="https://drive.google.com/file/d/1gm6HATi69CYgRORBEPVxInCcbOAbWLtR/view?usp=sharing" rel="noreferrer" target="_blank" className="p-text bold-text aref"> MY RESUME <svg stroke="currentColor"  strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,9 L12,18 M8,15 L12,19 L16,15"></path></svg></a></div>




          </div>
        </motion.div>


        <div className='app__header-react'>
          {/* <img className='header-icons' src={images.logosHeader} /> */}
          <img className='header-myImage' src={images.myImage} alt=""/>






        </div>
    </div>
  )
}

export default Header