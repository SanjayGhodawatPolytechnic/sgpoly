import React from "react";

import Footer from "./Footer";
import MenuBar from "./Menu";

const Main = ({
  title = "My Title",
  description = "My description",
  className = "container-lg",
  children,
  isSlideShow = false,
}) => {
  const Slideshow = () => {
    if (isSlideShow) {
      return (
        <div className="container">
          <img src="../img/banner.png" alt="" />
        </div>
      );
    }
  };
  return (
    <div className="backcolor">
      <br />
      <div>
        <img src={require("../img/banner.png")} alt="" className="img-fluid" />
      </div>
      <br />
      <br />
      <div className="">
        <MenuBar />
      </div>
      <br />
      <br />

      <div className={className} id="page-wrap">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
