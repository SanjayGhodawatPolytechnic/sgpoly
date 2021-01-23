import React from 'react';
import { useState } from 'react';
import "./CSS/NavBar.css"
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

    
    return (
        <div>
        <header>
            <div className="banner"></div>
                <div className="contains">
                 <div className="logo">LOGO</div>
        <nav className={isOpen ? "active" : ""}>
            <ul>
                <li><a href="path">HOME</a></li>
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
                    <a href="path">ABOUT US</a>
                    <ul>
                        <li><a href="path">About Our Logo</a></li>
                        <li><a href="path">About SG Polytechnic</a></li>
                        <li><a href="path">Philosophy Of SGP</a></li>
                        <li><a href="path">Vision, Mission, Goal</a></li>
                        <li><a href="path">Quality Policy</a></li>
                        <li><a href="path">Quality Objectives</a></li>
                        <li><a href="path">Affiliations & Certifications</a></li>
                        <li><a href="path">Differentiators</a></li>
                        <li><a href="path">Achievements</a></li>
                        <li><a href="path">Activitie</a></li>
                        <li><a href="path">Social Responsibilities</a></li>
                        <li><a href="path">Why SGP ?</a></li>
                    </ul>
    
                </li>
    
                <li
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
                ><a href="path">MANAGEMENT</a>
                    <ul>
                        <li><a href="path">About Trust</a></li>
                        <li><a href="path">Trust Board Of Directors</a></li>
                        <li><a href="path">Chairman’s Message</a></li>
                        <li><a href="path">A Word From Secretory</a></li>
                        <li><a href="path">Trustees Thoughts</a></li>
                        <li><a href="path">Principals Desk</a></li>
                        <li><a href="path">SGI Board Of Directors</a></li>
                        <li><a href="path">Governing Body</a></li>
                    </ul>
    
                </li>
    
                <li 
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
                ><a href="path">ACADEMICS</a>
                    <ul>
                        <li><a href="path">Academic Calendar</a></li>
                        <li><a href="path">Result</a></li>
                        <li><a href="path">Committees</a></li>
                        <li><a href="path">Ragging Act 1999</a></li>
                        <li><a href="path">Capitation Fee Act 1987</a></li>
                        <li><a href="path">Audit Reports</a></li>
                        <li><a href="path">Institute News Letters</a></li>
                    </ul>
                </li>
    
                <li 
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
                ><a href="path">INFRASTRUCTURE</a>
                    <ul>
                        <li><a href="path">About Infrastructure</a></li>
                        <li><a href="path">Campus Overview</a></li>
                        <li><a href="path">Admin Building</a></li>
                        <li><a href="path">classNamerooms</a></li>
                        <li><a href="path">Workshop</a></li>
                        <li><a href="path">Auditorium</a></li>
                        <li><a href="path">Foodcourt</a></li>
                        <li><a href="path">Conference Hall</a></li>
                        <li><a href="path">Amphi Theatre</a></li>
                    </ul>
                </li>
                
                <li 
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
                ><a href="path">DEPARTMENTS</a>
                    <ul>
                        <li><a href="path">Department Information</a></li>
                        <li><a href="path">HOD Desk</a></li>
                        <li><a href="path">Vision and Mission</a></li>
                        <li><a href="path">PEO PO PSO</a></li>
                        <li><a href="path">Faculty Profile</a></li>
                        <li><a href="path">Technical Staff</a></li>
                        <li><a href="path">Infrastructure & Laboratories</a></li>
                        <li><a href="path">Academic Calender</a></li>
                        <li><a href="path">Activities</a></li>
                        <li><a href="path">Achievement</a></li>
                        <li><a href="path">Syllabus</a></li>
                        <li><a href="path">MoU</a></li>
                        <li><a href="path">Consultancy</a></li>
                        <li><a href="path">Newsletter</a></li>
                        <li><a href="path">Alumni</a></li>
                        <li><a href="path">Downloads</a></li>
                    </ul>
                </li>
    
                <li 
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
                ><a href="path">ADMISSIONS</a>
                    <ul>
                        <li><a href="path">Courses Offered</a></li>
                        <li><a href="path">Admission Process</a></li>
                        <li><a href="path">Eligibility Criteria</a></li>
                        <li><a href="path">Fee Structure</a></li>
                        <li><a href="path">Education Loan</a></li>
                        <li><a href="path">Admission Cell</a></li>
                        <li><a href="path">Scholorship</a></li>
                        <li><a href="path">Cut Off List</a></li>
                        <li><a href="path">FAQ</a></li>
                        <li><a href="path">Education Fairs</a></li>
                    </ul>
                </li>
    
                <li 
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
                ><a href="path">FACILITIES</a>
                    <ul>
                        <li><a href="path">Hostel</a></li>
                        <li><a href="path">Laboratories</a></li>
                        <li><a href="path">Computer Lab</a></li>
                        <li><a href="path">Drawing Hall</a></li>
                        <li><a href="path">Reading Hall</a></li>
                        <li><a href="path">Transportation</a></li>
                        <li><a href="path">Gymnasium</a></li>
                        <li><a href="path">Swimming Pool</a></li>
                        <li><a href="path">Cafeteria</a></li>
                        <li><a href="path">Health Care</a></li>
                        <li><a href="path">ATM</a></li>
                        <li><a href="path">Playing Ground</a></li>
                        <li><a href="path">Tennis Court</a></li>
                        <li><a href="path">Photocopy & Stationary</a></li>
                        <li><a href="path">Parking</a></li>
                    </ul>
                </li>
    
                <li 
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
                ><a href="path">CONTACT</a>
                    <ul>
                        <li><a href="path">Location Map</a></li>
                        <li><a href="path">Principal</a></li>
                        <li><a href="path">Administrative Department</a></li>
                        <li><a href="path">Admission Cell</a></li>
                        <li><a href="path">Head of Departments</a></li>
                        <li><a href="path">IT Cell</a></li>
                        <li><a href="path">Transport Department</a></li>
                        <li><a href="path">Contact Form</a></li>
                    </ul>
                </li>
    
                <li><a href="path">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
    
                
            </ul>
        </nav>
        <div className="menu-toggle" onClick={() => {
            setIsOpen(!isOpen);
        }}><i className="fa fa-bars" aria-hidden="true"></i></div>   
                </div>
        
            </header>
        </div>
        
    );
}

export default NavBar;
