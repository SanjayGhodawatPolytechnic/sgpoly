import React from "react";
import "./CSS/header.css";
import img from "../assets/logosgp_auto_x2.jpg";
const Header = () => {
  return (
    <div className="banner">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FSGP%20Web%20Logo.jpg?alt=media&token=3a48e4cb-1093-470d-a73a-138dc7339eea"
        className="bannner-img"
      />
    </div>
  );
};

export default Header;
