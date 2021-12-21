import React, { useContext, useState } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import ApplicationContext from "../context/ApplicationContext";

function Header() {
  const [openBurguerMenu, setBurguerMenuState] = useState(false);
  const { portuguese } = useContext(ApplicationContext);

  return (
    <header className="header">
      <div className="title-container">
        <h2 className="title">
          <a
            href="https://github.com/brenoccamp"
            target="_blank"
            rel="noopener noreferrer">
          <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
          &nbsp;Brenoccamp
          </a>
        </h2>
        <p className="paragraph-description">
          <FontAwesomeIcon className="laptopCode-icon" icon={ faLaptopCode }></FontAwesomeIcon>
          {portuguese ? ' Desenvolvedor Full Stack' : ' Full Stack Developer'}
        </p>
      </div>
      <div
        className={openBurguerMenu ? 'menu-btn open' : 'menu-btn'}
        onClick={ () => setBurguerMenuState(!openBurguerMenu) }
      >
        <div className="menu-btn__burger"></div>
      </div>
      <nav className={openBurguerMenu ? 'nav active' : 'nav'}>
        <ul className="ul-menu">
          <li><a href="#home">{portuguese ? 'Início' : 'Home'}</a></li>
          <li><a href="#about">{portuguese ? 'Sobre' : 'About'}</a></li>
          <li><a href="#projects">{portuguese ? 'Projetos': 'Projects'}</a></li>
          <li><a href="#contact">{portuguese ? 'Contato' : 'Contact'}</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
