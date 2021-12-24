import React, { useContext } from "react";
import ApplicationContext from "../context/ApplicationContext";
import '../styles/footer.css';

function Footer() {
  const { portuguese } = useContext(ApplicationContext); 
  return (
    <footer className="application-footer">
      {portuguese ? (
        <div>
          <div className="back-to-top-container">
            <a href="#home">
              <p></p>
              <p></p>
              <p></p>
            </a>
          </div>
          <p className="back-to-top-text">Voltar ao topo</p>
        </div>
        ) : (
          <div>
            <div className="back-to-top-container">
              <a href="#home" className="link-to-top">
                <p></p>
                <p></p>
                <p></p>
              </a>
            </div>
            <p className="back-to-top-text">Back to top</p>
          </div>
        )}
      <div className="footer-container">
        <p class="copyright">&copy; Copyright 2021.</p>
      </div>
    </footer>
  );
}

export default Footer;
