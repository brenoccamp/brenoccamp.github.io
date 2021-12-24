import React, { useContext } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import '../styles/contact.css';
import githubIcon from '../images/github-square-brands.svg';
import linkedinIcon from '../images/linkedin-brands.svg';
import instagramIcon from '../images/instagram-square-brands.svg';

function Contact() {
  const { portuguese } = useContext(ApplicationContext);
  return (
    <section className="contact-section" id="contact">
      <div className="contact-title-container">
        <h1 className="contact-title">
          {portuguese ? 'Contato' : 'Contact'}
        </h1>
      </div>
      {portuguese ? (
        <div className="contact-container">
          <p className="contact-pagraph">
            Precisa de um desenvolvedor Full Stack? Entre em contato comigo através das <b>redes sociais</b> ou <b>email</b>! <br />
          </p>
          <p className="icons-suggestion">Clique no ícone desejado!</p>
          <div className="social-networks-container">
            <a href="https://github.com/brenoccamp" target="_blank" rel="noreferrer">
              <img className="icons github" alt="GitHub Icon" src={ githubIcon } />
            </a>
            <a href="https://www.linkedin.com/in/brenocunha/" target="_blank" rel="noreferrer">
              <img className="icons linkedin" alt="Linkedin Icon" src={ linkedinIcon } />
            </a>
            <a href="https://www.instagram.com/brenoccamp/" target="_blank" rel="noreferrer">
              <img className="icons instagram" alt="Instagram Icon" src={ instagramIcon } />
            </a>
          </div>
          <p className="footer"><b>Email: brenoccamp@gmail.com</b></p>
        </div>
      ) : (
        <div className="contact-container">
          <p className="contact-pagraph">
            Need a Full Stack Developer? Contact me through my <b>social networks</b> or <b>email</b>! <br />
          </p>
          <p className="icons-suggestion">Click on the desired icon!</p>
          <div className="social-networks-container">
            <a href="https://github.com/brenoccamp" target="_blank" rel="noreferrer">
              <img className="icons github" alt="GitHub Icon" src={ githubIcon } />
            </a>
            <a href="https://www.linkedin.com/in/brenocunha/" target="_blank" rel="noreferrer">
              <img className="icons linkedin" alt="Linkedin Icon" src={ linkedinIcon } />
            </a>
            <a href="https://www.instagram.com/brenoccamp/" target="_blank" rel="noreferrer">
              <img className="icons instagram" alt="Instagram Icon" src={ instagramIcon } />
            </a>
          </div>
          <p className="footer"><b>Email: brenoccamp@gmail.com</b></p>
        </div>
      )}
    </section>
  );
}

export default Contact;
