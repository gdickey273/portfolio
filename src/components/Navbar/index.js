import * as React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar(props) {

  return (
    <div className="toolbar">
      <div className="toolbar-nav">
        <Link className="toolbar-logo" to="/">Graham Dickey</Link>
        <div className="spacer"></div>
        <div className="toolbar-nav-items mr-5">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="horns">Horns</Link>
            </li>
            <li>
              <a href="assets/resume.pdf" download>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;