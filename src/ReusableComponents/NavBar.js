import React from 'react';
import { useState } from 'react';
import "./CSS/NavBar.css"
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    function expandNav(e){
        console.log("opening")
        setIsOpen(true);
    }
    
    const closeNav = (e) => {
        
        console.log("closing")
        setIsOpen(false);
    }

    
    return (
        <div className="main-nav">
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
        </div>
    );
}

export default NavBar;
