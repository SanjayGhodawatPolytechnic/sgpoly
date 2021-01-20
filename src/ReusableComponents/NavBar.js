import React from 'react';
import { useState } from 'react';
import "./CSS/NavBar.css"
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

    
    return (
        <header>
        <div className="logo">LOGO</div>
        <nav className={isOpen ? "active" : ""}>
            <ul>
                <li><a href="#">HOME</a></li>
                <li 
                className={openSubmenuIndex === 1 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 1) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(1);
                    }
                }}
                >
                    <a href="#">ABOUT US</a>
                    <ul>
                        <li><a href="#">About Our Logo</a></li>
                        <li><a href="#">About SG Polytechnic</a></li>
                        <li><a href="#">Philosophy Of SGP</a></li>
                        <li><a href="#">Vision, Mission, Goal</a></li>
                        <li><a href="#">Quality Policy</a></li>
                        <li><a href="#">Quality Objectives</a></li>
                        <li><a href="#">Affiliations & Certifications</a></li>
                        <li><a href="#">Differentiators</a></li>
                        <li><a href="#">Achievements</a></li>
                        <li><a href="#">Activitie</a></li>
                        <li><a href="#">Social Responsibilities</a></li>
                        <li><a href="#">Why SGP ?</a></li>
                    </ul>
    
                </li>
    
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 2 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 2) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(2);
                    }
                }}
                ><a href="#">MANAGEMENT</a>
                    <ul>
                        <li><a href="#">About Trust</a></li>
                        <li><a href="#">Trust Board Of Directors</a></li>
                        <li><a href="#">Chairman’s Message</a></li>
                        <li><a href="#">A Word From Secretory</a></li>
                        <li><a href="#">Trustees Thoughts</a></li>
                        <li><a href="#">Principals Desk</a></li>
                        <li><a href="#">SGI Board Of Directors</a></li>
                        <li><a href="#">Governing Body</a></li>
                    </ul>
    
                </li>
    
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 3 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 3) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(3);
                    }
                }}
                ><a href="#">ACADEMICS</a>
                    <ul>
                        <li><a href="#">Academic Calendar</a></li>
                        <li><a href="#">Result</a></li>
                        <li><a href="#">Committees</a></li>
                        <li><a href="#">Ragging Act 1999</a></li>
                        <li><a href="#">Capitation Fee Act 1987</a></li>
                        <li><a href="#">Audit Reports</a></li>
                        <li><a href="#">Institute News Letters</a></li>
                    </ul>
                </li>
    
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 4 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 4) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(4);
                    }
                }}
                ><a href="#">INFRASTRUCTURE</a>
                    <ul>
                        <li><a href="#">About Infrastructure</a></li>
                        <li><a href="#">Campus Overview</a></li>
                        <li><a href="#">Admin Building</a></li>
                        <li><a href="#">classNamerooms</a></li>
                        <li><a href="#">Workshop</a></li>
                        <li><a href="#">Auditorium</a></li>
                        <li><a href="#">Foodcourt</a></li>
                        <li><a href="#">Conference Hall</a></li>
                        <li><a href="#">Amphi Theatre</a></li>
                    </ul>
                </li>
                
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 5 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 5) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(5);
                    }
                }}
                ><a href="#">DEPARTMENTS</a>
                    <ul>
                        <li><a href="#">Department Information</a></li>
                        <li><a href="#">HOD Desk</a></li>
                        <li><a href="#">Vision and Mission</a></li>
                        <li><a href="#">PEO PO PSO</a></li>
                        <li><a href="#">Faculty Profile</a></li>
                        <li><a href="#">Technical Staff</a></li>
                        <li><a href="#">Infrastructure & Laboratories</a></li>
                        <li><a href="#">Academic Calender</a></li>
                        <li><a href="#">Activities</a></li>
                        <li><a href="#">Achievement</a></li>
                        <li><a href="#">Syllabus</a></li>
                        <li><a href="#">MoU</a></li>
                        <li><a href="#">Consultancy</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Alumni</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </li>
    
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 6 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 6) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(6);
                    }
                }}
                ><a href="#">ADMISSIONS</a>
                    <ul>
                        <li><a href="#">Courses Offered</a></li>
                        <li><a href="#">Admission Process</a></li>
                        <li><a href="#">Eligibility Criteria</a></li>
                        <li><a href="#">Fee Structure</a></li>
                        <li><a href="#">Education Loan</a></li>
                        <li><a href="#">Admission Cell</a></li>
                        <li><a href="#">Scholorship</a></li>
                        <li><a href="#">Cut Off List</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Education Fairs</a></li>
                    </ul>
                </li>
    
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 7 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 7) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(7);
                    }
                }}
                ><a href="#">FACILITIES</a>
                    <ul>
                        <li><a href="#">Hostel</a></li>
                        <li><a href="#">Laboratories</a></li>
                        <li><a href="#">Computer Lab</a></li>
                        <li><a href="#">Drawing Hall</a></li>
                        <li><a href="#">Reading Hall</a></li>
                        <li><a href="#">Transportation</a></li>
                        <li><a href="#">Gymnasium</a></li>
                        <li><a href="#">Swimming Pool</a></li>
                        <li><a href="#">Cafeteria</a></li>
                        <li><a href="#">Health Care</a></li>
                        <li><a href="#">ATM</a></li>
                        <li><a href="#">Playing Ground</a></li>
                        <li><a href="#">Tennis Court</a></li>
                        <li><a href="#">Photocopy & Stationary</a></li>
                        <li><a href="#">Parking</a></li>
                    </ul>
                </li>
    
                <li 
                className="sub-menu"
                className={openSubmenuIndex === 8 ? "sub-menu active" : "sub-menu"}
                onClick={(e) => {
                    e.preventDefault()
                    if(openSubmenuIndex === 8) {
                        setOpenSubmenuIndex(null);
                    }
                    else{
                        setOpenSubmenuIndex(8);
                    }
                }}
                ><a href="#">CONTACT</a>
                    <ul>
                        <li><a href="#">Location Map</a></li>
                        <li><a href="#">Principal</a></li>
                        <li><a href="#">Administrative Department</a></li>
                        <li><a href="#">Admission Cell</a></li>
                        <li><a href="#">Head of Departments</a></li>
                        <li><a href="#">IT Cell</a></li>
                        <li><a href="#">Transport Department</a></li>
                        <li><a href="#">Contact Form</a></li>
                    </ul>
                </li>
    
                <li><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
    
                
            </ul>
        </nav>
        <div className="menu-toggle" onClick={() => {
            setIsOpen(!isOpen);
        }}><i className="fa fa-bars" aria-hidden="true"></i></div>
        </header>
    );
}

export default NavBar;


{/* <div className="main-nav">
            <div onClick={() => {
                expandNav()
            }}>
                <ul className="ul">
                    <li className="item" ><i className="fas fa-bars"></i></li>
                    <div className="nav-circle"></div>
                </ul>
            </div>
            <div id="navbar" className={isOpen ? " open" : ""}>
                <div className="close-btn" onClick={(e) => {
                    closeNav(e)
                }}>
                </div>
                <div className="nav-item">
                    <span className="item-text">HOME</span>
                </div>
                
                <div className="nav-item">
                    <span className="item-text">PROJECTS</span>
                </div>
                <div className="nav-item">
                    <span className="item-text">SKILL SET</span>
                </div>
                <div className="nav-item">
                    <span className="item-text">BLOGS</span>
                </div>
            </div>
        </div> */}