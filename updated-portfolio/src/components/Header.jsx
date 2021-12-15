import React, { useState } from "react";
import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [openBurguerMenu, setBurguerMenuState] = useState(false);
  return (
    <header className="header">
      <div className="title-container">
        <h2 className="title">
          <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
          &nbsp;Brenoccamp
        </h2>
        <p className="paragraph-description">
          <FontAwesomeIcon className="laptopCode-icon" icon={ faLaptopCode }></FontAwesomeIcon>
          &nbsp;Full Stack Developer
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
          <a><li>Home</li></a>
          <a><li>About</li></a>
          <a><li>Portfolio</li></a>
          <a><li>Contact</li></a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
