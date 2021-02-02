import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <li><Link to="" className="a">HOME</Link></li>
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
                    <Link to="" className="a">ABOUT US</Link>
                    <ul>
                        <li><Link to="" className="a">About Our Logo</Link></li>
                        <li><Link to="" className="a">About SG Polytechnic</Link></li>
                        <li><Link to="" className="a">Philosophy Of SGP</Link></li>
                        <li><Link to="" className="a">Vision, Mission, Goal</Link></li>
                        <li><Link to="" className="a">Quality Policy</Link></li>
                        <li><Link to="" className="a">Quality Objectives</Link></li>
                        <li><Link to="" className="a">Affiliations & Certifications</Link></li>
                        <li><Link to="" className="a">Differentiators</Link></li>
                        <li><Link to="" className="a">Achievements</Link></li>
                        <li><Link to="" className="a">Activitie</Link></li>
                        <li><Link to="" className="a">Social Responsibilities</Link></li>
                        <li><Link to="" className="a">Why SGP ?</Link></li>
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
                ><Link to="" className="a">MANAGEMENT</Link>
                    <ul>
                        <li><Link to="/management/trust" className="a">About Trust</Link></li>
                        <li><Link to="/management/board" className="a">Trust Board Of Directors</Link></li>
                        <li><Link to="/management/chairman" className="a">Chairman’s Message</Link></li>
                        <li><Link to="/management/secretary" className="a">A Word From Secretory</Link></li>
                        <li><Link to="/management/trustee" className="a">Trustees Thoughts</Link></li>
                        <li><Link to="/management/principal" className="a">Principals Desk</Link></li>
                        <li><Link to="/management/directors" className="a">SGI Board Of Directors</Link></li>
                        <li><Link to="/management/govern" className="a">Governing Body</Link></li>
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
                ><Link to="" className="a">ACADEMICS</Link>
                    <ul>
                        <li><Link to="" className="a">Academic Calendar</Link></li>
                        <li><Link to="" className="a">Result</Link></li>
                        <li><Link to="" className="a">Committees</Link></li>
                        <li><Link to="" className="a">Ragging Act 1999</Link></li>
                        <li><Link to="" className="a">Capitation Fee Act 1987</Link></li>
                        <li><Link to="" className="a">Audit Reports</Link></li>
                        <li><Link to="" className="a">Institute News Letters</Link></li>
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
                ><Link to="" className="a">INFRASTRUCTURE</Link>
                    <ul>

                        <li><Link to="/infrastructure/about" className="a">About Infrastructure</Link></li>
                        <li><Link to="" className="a">Campus Overview</Link></li>
                        <li><Link to="/infrastructure/overview" className="a">Admin Building</Link></li>
                        <li><Link to="/infrastructure/classroom" className="a">classNamerooms</Link></li>
                        <li><Link to="/infrastructure/workshop" className="a">Workshop</Link></li>
                        <li><Link to="/infrastructure/auditorium" className="a">Auditorium</Link></li>
                        <li><Link to="/infrastructure/foodcourt" className="a">Foodcourt</Link></li>
                        <li><Link to="/infrastructure/conference" className="a">Conference Hall</Link></li>
                        <li><Link to="/amphi" className="a">Amphi Theatre</Link></li>
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
                ><Link to="" className="a">DEPARTMENTS</Link>
                    <ul>
                        <li><Link to="" className="a">Department Information</Link></li>
                        <li><Link to="" className="a">HOD Desk</Link></li>
                        <li><Link to="" className="a">Vision and Mission</Link></li>
                        <li><Link to="" className="a">PEO PO PSO</Link></li>
                        <li><Link to="" className="a">Faculty Profile</Link></li>
                        <li><Link to="" className="a">Technical Staff</Link></li>
                        <li><Link to="" className="a">Infrastructure & Laboratories</Link></li>
                        <li><Link to="" className="a">Academic Calender</Link></li>
                        <li><Link to="" className="a">Activities</Link></li>
                        <li><Link to="" className="a">Achievement</Link></li>
                        <li><Link to="" className="a">Syllabus</Link></li>
                        <li><Link to="" className="a">MoU</Link></li>
                        <li><Link to="" className="a">Consultancy</Link></li>
                        <li><Link to="" className="a">Newsletter</Link></li>
                        <li><Link to="" className="a">Alumni</Link></li>
                        <li><Link to="" className="a">Downloads</Link></li>
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
                ><Link to="" className="a">ADMISSIONS</Link>
                    <ul>
                        <li><Link to="" className="a">Courses Offered</Link></li>
                        <li><Link to="" className="a">Admission Process</Link></li>
                        <li><Link to="" className="a">Eligibility Criteria</Link></li>
                        <li><Link to="" className="a">Fee Structure</Link></li>
                        <li><Link to="" className="a">Education Loan</Link></li>
                        <li><Link to="" className="a">Admission Cell</Link></li>
                        <li><Link to="" className="a">Scholorship</Link></li>
                        <li><Link to="" className="a">Cut Off List</Link></li>
                        <li><Link to="" className="a">FAQ</Link></li>
                        <li><Link to="" className="a">Education Fairs</Link></li>
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
                ><Link to="" className="a">FACILITIES</Link>
                    <ul>
                        <li><Link to="/facilities/hostel" className="a">Hostel</Link></li>
                        <li><Link to="/facilities/laboratories" className="a">Laboratories</Link></li>
                        <li><Link to="/facilities/gymnasium" className="a">Gymnasium</Link></li>
                        <li><Link to="/facilities/pool" className="a">Swimming Pool</Link></li>
                        <li><Link to="/infrastructure/foodcourt" className="a">Cafeteria</Link></li>
                        <li><Link to="" className="a">Health Care</Link></li>
                        <li><Link to="" className="a">ATM</Link></li>
                        <li><Link to="/facilities/ground" className="a">Playing Ground</Link></li>
                        <li><Link to="/facilities/tennis" className="a">Tennis Court</Link></li>
                        <li><Link to="/facilities/more" className="a">More...</Link></li>
                        
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
                ><Link to="" className="a">CONTACT</Link>
                    <ul className="contact-links">
                        <li><Link to="" className="a">Location Map</Link></li>
                        <li><Link to="" className="a">Principal</Link></li>
                        <li><Link to="" className="a">Administrative Department</Link></li>
                        <li><Link to="" className="a">Admission Cell</Link></li>
                        <li><Link to="" className="a">Head of Departments</Link></li>
                        <li><Link to="" className="a">IT Cell</Link></li>
                        <li><Link to="" className="a">Transport Department</Link></li>
                        <li><Link to="" className="a">Contact Form</Link></li>
                    </ul>
                </li>
    
                <li><Link to="" className="a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
    
                
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
