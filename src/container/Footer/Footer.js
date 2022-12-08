import React  from 'react';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

  const Footer = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div id="contact" className="container mt-5">
    <h2 className="app__head-text chat">Take a coffee & <span>chat</span> with me</h2>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required />
      </div>
      <button className="btn btn-danger" type="submit">
        {formStatus}
      </button>
    </form>

    <footer>
        <section className="foot"> 2022 © Developed by Safa Bouguezzi
        <a href="https://github.com/safabouguezzi" rel="noreferrer" target="_blank"> SB </a>
        </section>
          {/* Made with
            <span> ❤ </span>
            by */}
          
    </footer>
  </div>

  );
};


export default Footer;