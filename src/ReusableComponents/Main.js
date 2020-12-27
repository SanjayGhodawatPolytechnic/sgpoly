import React from "react";

import Footer from "./Footer";
import MenuBar from "./Menu";
import './CSS/main.css'

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
    <div>
      <df-messenger
      intent="WELCOME"
      chat-title="SGPbot"
      agent-id="72516b63-a1de-4d6a-8c02-ae0514d59410"
      language-code="en"
    ></df-messenger>
    <div className="backcolor">
      
        <MenuBar />
      <div className="">
      </div>
      <br />
      <br />

      <div className={className} id="page-wrap">
        {children}
      </div>
      <Footer />      
    </div>
    </div>
  );
};

export default Main;
