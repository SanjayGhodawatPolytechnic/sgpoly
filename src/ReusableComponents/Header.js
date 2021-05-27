import React from "react";
import "./CSS/header.css";
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
        src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FSgp2.jpg?alt=media&token=e8a73779-e847-4fcd-b99e-7798ad304b10"
        className="bannner-img"
      />
    </div>
  );
};

export default Header;
