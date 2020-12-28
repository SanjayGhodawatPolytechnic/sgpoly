import React, { Component } from "react";
// import './CSS/Menu.css';
// import $ from "jquery"

import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { PushMenu, usePushMenu } from "react-push-menu";
import "./CSS/Menu.css"

class MenuBar extends Component {

  // expandNav() {
  //   let ele = document.querySelector('.navbar')
  //   ele.style.height = "100vh";
  //   ele.style.width = "100vh";

  // }

  // closeNav() {
  //   let ele = document.querySelector('.navbar')
  //   ele.style.height = "0%";
  //   ele.style.width = "0%"
  // }

  closeMenu(){
  document.getElementById("navbar").style.height = "0%";
}
  openMenu(){
    console.log("opening")
  document.getElementById("navbar").style.height = "100%";
}
  render() {

    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //    <img
        //     className="navbar-brand logo"
        //     src={require("../assets/logo.png")}
        //   /> 
        // <div class="">
        // <ul>
        //     <li class="item" onclick={this.expandNav}><i class="fas fa-bars"></i></li>
        //     <div class="nav-circle"></div>
        // </ul>
        // </div>
        // <div class="navbar">
        //     <div class="close-btn" onclick={this.closeNav}>
        //     </div>
        //     <div class="nav-item">
        //         <span class="item-text">HOME</span>
        //     </div>
        //     <div class="nav-item">
        //         <span class="item-text">PROJECTS</span>
        //     </div>
        //     <div class="nav-item">
        //         <span class="item-text">SKILL SET</span>
        //     </div>
        //     <div class="nav-item">
        //         <span class="item-text">BLOGS</span>
        //     </div>
        // </div>
        //   <img
        //     className="navbar-brand logo"
        //     src={require("../assets/logo.png")}
        //   />
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        //   <button
        //     className="navbar-toggler"
        //     type="button"
        //     data-toggle="collapse"
        //     data-target="#navbarNavAltMarkup"
        //     aria-controls="navbarNavAltMarkup"
        //     aria-expanded="false"
        //     aria-label="Toggle navigation"
        //   >
        //     <span className="navbar-toggler-icon"></span>
        //   </button>
        //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //     <div className="navbar-nav">
        //       <Link to="/">
        //         <a className="nav-item nav-link active ">Home </a>
        //       </Link>

        //       <li className="nav-item dropdown ">
        //         <a
        //           className="nav-link dropdown-toggle active "
        //           href="#"
        //           id="navbarDropdown"
        //           data-toggle="dropdown"
        //         >
        //           Management
        //         </a>
        //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //           <a className="dropdown-item" href="/management/trust">
        //             About Trust
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/board">
        //             Trust Board of Directions
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/chairman">
        //             Chairmans's Message
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/secretary">
        //             A word from Secretary
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/trustee">
        //             Trustee's Thought
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/principal">
        //             Principal's Desk
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/directors">
        //             SGI Board of Directors
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/management/govern">
        //             Governing Body
        //           </a>
        //         </div>
        //       </li>

        //       <a className="nav-item nav-link active " href="#">
        //         Academics{" "}
        //       </a>

        //       <li className="nav-item dropdown ">
        //         <a
        //           className="nav-link dropdown-toggle active "
        //           href="#"
        //           id="navbarDropdown"
        //           data-toggle="dropdown"
        //         >
        //           Infrastructure
        //         </a>
        //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //           <a className="dropdown-item" href="/infrastructure/about">
        //             About Infrastructure
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/infrastructure/overview">
        //             Campus Overview
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="#">
        //             Admin Building
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/infrastructure/classroom">
        //             Classrooms
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/infrastructure/workshop">
        //             Workshop
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a
        //             className="dropdown-item"
        //             href="/infrastructure/auditorium"
        //           >
        //             Auditorium
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/infrastructure/foodcourt">
        //             Food Court
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a
        //             className="dropdown-item"
        //             href="/infrastructure/conference"
        //           >
        //             Conference Hall
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="amphi">
        //             Amphi Theatre
        //           </a>
        //         </div>
        //       </li>

        //       <li className="nav-item dropdown ">
        //         <a
        //           className="nav-link dropdown-toggle active "
        //           href="#"
        //           id="navbarDropdown"
        //           data-toggle="dropdown"
        //         >
        //           Department
        //         </a>
        //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //           <Link to="/department/cse" className="dropdown-item">
        //             Computer Science &amp; Engineering{" "}
        //           </Link>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="#">
        //             Mechanical Engineering
        //           </a>{" "}
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="#">
        //             Civil Engineering
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="#">
        //             Electrical Engineering
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <Link className="dropdown-item" to="/department/entc">
        //             Elotronics &amp; telecomunication Engineering
        //           </Link>
        //         </div>
        //       </li>

        //       <a className="nav-item nav-link active " href="#">
        //         Admission
        //       </a>

        //       <li className="nav-item dropdown ">
        //         <a
        //           className="nav-link dropdown-toggle active "
        //           href="#"
        //           id="navbarDropdown"
        //           data-toggle="dropdown"
        //         >
        //           Facilities
        //         </a>
        //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //           <a className="dropdown-item" href="/facilities/hostel">
        //             Hostel
        //           </a>
        //           <div className="dropdown-divider"></div>

        //           <a className="dropdown-item" href="/facilities/laboratories">
        //             Laboratories
        //           </a>
        //           <div className="dropdown-divider"></div>

        //           <a className="dropdown-item" href="/facilities/gymnasium">
        //             Gymnasium
        //           </a>
        //           <div className="dropdown-divider"></div>

        //           <a className="dropdown-item" href="/facilities/pool">
        //             Swimming Pool
        //           </a>
        //           <div className="dropdown-divider"></div>

        //           <a className="dropdown-item" href="/infrastructure/foodcourt">
        //             Cafeteria
        //           </a>
        //           <div className="dropdown-divider"></div>

        //           <a className="dropdown-item" href="/facilities/ground">
        //             Playing Ground
        //           </a>
        //           <div className="dropdown-divider"></div>

        //           <a className="dropdown-item" href="/facilities/tennis">
        //             Tennis Court
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/facilities/more">
        //             More...
        //           </a>
        //         </div>
        //       </li>

        //       <li className="nav-item dropdown ">
        //         <a
        //           className="nav-link dropdown-toggle active "
        //           href="#"
        //           id="navbarDropdown"
        //           data-toggle="dropdown"
        //         >
        //           About Us
        //         </a>
        //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //           <a className="dropdown-item" href="/about/logo">
        //             About Our Logo{" "}
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/sgp">
        //             About SG Polytechnic
        //           </a>{" "}
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/philosophy">
        //             Philosophy of SGP
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/vision">
        //             Vision,Mission &amp; Goal
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/quality">
        //             Quality Policy &amp; Objectives
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/Affiliation">
        //             Affiliations &amp; Certifications
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/differentiator">
        //             Differentiators
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/achievements">
        //             Achievements
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="/about/activities">
        //             Activities
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a
        //             className="dropdown-item"
        //             href="/about/socialresponsiblities"
        //           >
        //             Social Responsibilities
        //           </a>
        //           <div className="dropdown-divider"></div>
        //           <a className="dropdown-item" href="#">
        //             Why SGP?
        //           </a>
        //         </div>
        //       </li>

        //       <Link to="/contact">
        //         <a className="nav-item nav-link active ">Contact Us </a>
        //       </Link>
        //       <a href="/students" className="nav-item nav-link active ">
        //         <button className="btn btn-light my-2 my-sm-0 nav-item nav-link active ">
        //           Student
        //         </button>
        //       </a> 
        //     </div>
        //   </div>
        // </nav> 
        // <a href="/students" className="nav-item nav-link active ">
        //   <button className="btn btn-light my-2 my-sm-0 nav-item nav-link active ">
        //     Student
        //   </button>
        // </a>
        // <div>
        //   <div className="button">
        //     <div className="fa fa-bars" />
        //   </div>
        //   <div className="menu">
        //     <nav>
        //       <ul>
        //         <li>
        //           <a href="home_is_visible">Home</a>
        //         </li>
        //         <li>
        //           <a href="aboutus_is_visible">About</a>
        //         </li>
        //         <li>
        //           <a href="clients_is_visible">Clients</a>
        //         </li>
        //         <li>
        //           <a href="contactus_is_visible">Contact Us</a>
        //         </li>
        //       </ul>
        //     </nav>
        //   </div>
        
        // </div>
        <div>

        <div class="container">
          <span class="menu-icon" onclick={this.openMenu}>&#9776;</span>
          <img src="data:image/jpeg;base64,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" class="image" />
        </div>

        <div class="menu-container" id="navbar">
          <span class="closebtn" onclick={this.closeMenu}>&times;</span>
          <div class="menu-content">
            <a href="#">HOME</a>
            <a href="#">PRICE</a>
            <a href="#">ABOUT</a>
            <a href="#">LOGIN</a>
          </div>
        </div>
        
        <div className="headerr">
          <div class="hero-text-box">
            <h1>SANJAY GHODAWAT<br />POLYTECHNIC</h1>
          </div>
        </div>
        </div>
    );
  }
}
export default MenuBar;
