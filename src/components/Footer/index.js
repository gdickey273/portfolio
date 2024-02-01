/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer(props) {
  return (
    <footer className="footer">
    <div className="row">
      <div className="col-md-12 mt-2 mb-0">
        <p className="mb-0">
          <a href="https://github.com/gdickey273"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
          <a href="https://www.linkedin.com/in/graham-dickey-a5239a198/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
          <a href="https://www.instagram.com/g_dickey/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
        </p>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-12 copyright">
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Copyright</p>
      </div>
    </div>

    
  </footer>
  );
}

export default Footer;