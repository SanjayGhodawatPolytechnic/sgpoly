import React from 'react';
import './CSS/Menu.css';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#e3f2fd"}} >        
        

        <img className="navbar-brand logo" src={require('../assets/logo.png')}/>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/"><a className="nav-item nav-link active effect">Home </a></Link>


            <a className="nav-item nav-link active effect" href="#">Management</a>
            <a className="nav-item nav-link active effect" href="#">Academics </a>
            <a className="nav-item nav-link active effect" href="#">Infrastructure </a>


            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle active effect" href="#" id="navbarDropdown"  data-toggle="dropdown">
                Department
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Computer Science &amp; Engineering </a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Mechanical Engineering</a> <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Civil Engineering</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Electrical Engineering</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Elotronics &amp; telecomunication Engineering</a>
              </div>
            </li>

            <a className="nav-item nav-link active effect" href="#">Admission</a>
            <a className="nav-item nav-link active effect" href="#">Facilities</a>



            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle active effect" href="#" id="navbarDropdown"  data-toggle="dropdown">
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/about/logo">About Our Logo </a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/sgp">About SG Polytechnic</a> <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/philosophy">Philosophy of SGP</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/vision">Vision,Mission & Goal</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/quality">Quality Policy & Objectives</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/Affiliation">Affiliations & Certifications</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/differentiator">Differentiators</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/about/achievements">Achievements</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Activities</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Social Responsibilities</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Why SGP?</a>
                
              </div>
            </li>
            <Link to="contact/map"><a className="nav-item nav-link active effect">Contact Us </a></Link>
            
            
          </div>
        </div>
      </nav> 
            
    </div>
  );
}

export default Menu;
