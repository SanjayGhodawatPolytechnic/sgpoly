import React from "react";
import "./CSS/header.css";
import img from "../assets/logosgp_auto_x2.jpg";
const Header = () => {
  return (
    <div className="banner">
      <div className="contact-info-cont">
        <div className="phone">
          <i className="fas fa-phone mr-3 txt-color" /> 0230 - 2463800
        </div>
        <div className="email">
          <i className="fas fa-envelope mr-3" />
          principal@sgipolytechnic.in
        </div>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FSGP%20Web%20Logo.jpg?alt=media&token=3a48e4cb-1093-470d-a73a-138dc7339eea"
        className="bannner-img"
      />
    </div>
  );
};

export default Header;
