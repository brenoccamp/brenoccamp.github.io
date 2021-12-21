import React, { useContext } from "react";
import ApplicationContext from "../context/ApplicationContext";
import "../styles/home.css";

function Home() {
  const { portuguese, setLanguage } = useContext(ApplicationContext);

  return (
    <main className="main-home"  id="home">
      <p
        onClick={ () => setLanguage(!portuguese) }
        className="set-language-anchor"
      >
        {portuguese ? 'Switch to English' : 'Mudar para Português'}
      </p>
      <p className="home-title montserrat">Breno da Cunha Campanha</p>
      <p className="home-paragraph montserrat">
        {portuguese ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'} <br />
        {portuguese ? 'Web e Mobile' : 'Web and Mobile'} <br />
        {portuguese ? 'Programador Javascript' : 'Javascript Programmer'} <br />
        {portuguese ? 'Autônomo' : 'Freelancer'} <br />
      </p>
      <p className="skills-paragraph montserrat">{portuguese ? 'Habilidades em programação' : 'Main Hard Skills'}</p>
      <div className="skills-container">
        <span>HTML</span>
        <span>CSS</span>
        <span>JAVASCRIPT</span>
        <span>SQL</span>
        <span>PYTHON</span>
        <span>MONGODB</span>
        <span>TYPESCRIPT</span>
        <span>HTML</span>
      </div>
      <div className="advance-text-container">
        <a href="#about">
          <p></p>
          <p></p>
          <p></p>
        </a>
      </div>
    </main>
  );
}

export default Home;
