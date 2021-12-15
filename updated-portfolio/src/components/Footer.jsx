import React from "react";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="date-container">
        {/* <p class="date">{`Last update(Última atualização): ${new Date().toLocaleTimeString()}`}</p> */}
        <p class="copyright">&copy; Copyright 2021.</p>
      </div>
    </footer>
  );
}

export default Footer;
