import React from "react";
import Footer from "./Footer";
import './CSS/main.css'
import NavBar from "./NavBar";

const Main = ({
  title = "My Title",
  description = "My description",
  className = "",
  children,
  isSlideShow = false,
}) => {
  return (
    <div className="">
      <df-messenger
      intent="WELCOME"
      chat-title="SGPbot"
      agent-id="72516b63-a1de-4d6a-8c02-ae0514d59410"
      language-code="en"
    ></df-messenger>
    <div className="backcolor">
        <NavBar />
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
