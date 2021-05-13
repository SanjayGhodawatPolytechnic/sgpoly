import React from "react";
import "./CSS/header.css";
import img from "../assets/logosgp_auto_x2.jpg";
const Header = () => {
  return (
    <div className="banner">
      <img src={img} className="img img-fluid bannerimg" />
    </div>
  );
};

export default Header;
