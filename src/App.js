import './App.scss';
import {About, Footer, Skills, Work, Testimonial, Header}  from "./container"
import { Navbar } from './components'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  );
}

export default App;
