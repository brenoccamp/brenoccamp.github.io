import React, { useContext } from "react";
import ApplicationContext from "../context/ApplicationContext";
import "../styles/home.css";

function Home() {
  const { language, setLanguage } = useContext(ApplicationContext);

  return (
    <main className="main-home"  id="home">
      <p
        onClick={ () => setLanguage(!language) }
        className="set-language-anchor"
      >
        {!language ? 'Portuguese' : 'Inglês'}
      </p>
      <p className="home-title montserrat">Breno da Cunha Campanha</p>
      <p className="home-paragraph montserrat">
        {language ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'} <br />
        {language ? 'Web e Mobile' : 'Web and Mobile'} <br />
        {language ? 'Programador Javascript' : 'Javascript Programmer'} <br />
        {language ? 'Autônomo' : 'Freelancer'} <br />
      </p>
      <p className="skills-paragraph montserrat">{language ? 'Principais Habilidades' : 'Main Hard Skills'}</p>
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
    </main>
  );
}

export default Home;
