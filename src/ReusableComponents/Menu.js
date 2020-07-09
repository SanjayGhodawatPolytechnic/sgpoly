import React from 'react';
import './CSS/Menu.css';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img
          className="navbar-brand logo"
          src={require("../assets/logo.png")}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/">
              <a className="nav-item nav-link active effect">Home </a>
            </Link>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle active effect"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                Management
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/management/trust">
                  About Trust
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/board">
                  Trust Board of Directions
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/chairman">
                  Chairmans's Message
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/secretary">
                  A word from Secretary
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/trustee">
                  Trustee's Thought
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/principal">
                  Principal's Desk
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/directors">
                  SGI Board of Directors
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/management/govern">
                  Governing Body
                </a>
              </div>
            </li>

            <a className="nav-item nav-link active effect" href="#">
              Academics{" "}
            </a>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle active effect"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                Infrastructure
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/infrastructure/about">
                  About Infrastructure
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/infrastructure/overview">
                  Campus Overview
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Admin Building
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/infrastructure/classroom">
                  Classrooms
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/infrastructure/workshop">
                  Workshop
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/infrastructure/auditorium">
                  Auditorium
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/infrastructure/foodcourt">
                  Food Court
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/infrastructure/conference">
                  Conference Hall
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="amphi">
                  Amphi Theatre
                </a>
              </div>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle active effect"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                Department
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Computer Science &amp; Engineering{" "}
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Mechanical Engineering
                </a>{" "}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Civil Engineering
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Electrical Engineering
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Elotronics &amp; telecomunication Engineering
                </a>
              </div>
            </li>

            <a className="nav-item nav-link active effect" href="#">
              Admission
            </a>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle active effect"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                Facilities
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/facilities/hostel">
                  Hostel
                </a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/facilities/laboratories">
                  Laboratories
                </a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/facilities/gymnasium">
                  Gymnasium
                </a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/facilities/pool">
                  Swimming Pool
                </a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/infrastructure/foodcourt">
                  Cafeteria
                </a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/facilities/ground">
                  Playing Ground
                </a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="/facilities/tennis">
                  Tennis Court
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/facilities/more">
                  More...
                </a>
              </div>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle active effect"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/about/logo">
                  About Our Logo{" "}
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/sgp">
                  About SG Polytechnic
                </a>{" "}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/philosophy">
                  Philosophy of SGP
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/vision">
                  Vision,Mission &amp; Goal
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/quality">
                  Quality Policy &amp; Objectives
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/Affiliation">
                  Affiliations &amp; Certifications
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/differentiator">
                  Differentiators
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/achievements">
                  Achievements
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/activities">
                  Activities
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="/about/socialresponsiblities"
                >
                  Social Responsibilities
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Why SGP?
                </a>
              </div>
            </li>
            <Link to="contact/map">
              <a className="nav-item nav-link active effect">Contact Us </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
