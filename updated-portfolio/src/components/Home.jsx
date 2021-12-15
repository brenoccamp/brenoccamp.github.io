import React from "react";
import "../css/home.css";

function Home() {
  return (
    <main className="main-home">
      <p className="home-title montserrat">Breno da Cunha Campanha</p>
      <p className="home-paragraph montserrat">
        Developer Full Stack <br />
        Web and Mobile <br />
        Javascript Programmer <br />
        Freelancer <br />
      </p>
      <p className="skills-paragraph montserrat">Main Hard Skills</p>
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
