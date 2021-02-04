import React from "react";
import Footer from "./Footer";
import './CSS/main.css'
import NavBar from "./NavBar";
import Header from "./Header"
import img from "./CSS/sguni.jpg"
import { useState } from "react";
import { useEffect } from "react";

const Main = ({
  title = "My Title",
  description = "My description",
  className = "",
  children,
  isSlideShow = false,
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    let ele = document.getElementById("modal")
    ele.style.animationDirection = "reverse"
    setIsModalOpen(false);
  }
  return (
    <div className="">
      <df-messenger
      intent="WELCOME"
      chat-title="SGPbot"
      agent-id="72516b63-a1de-4d6a-8c02-ae0514d59410"
      language-code="en"
      ></df-messenger>

      
      <Header />
      <div className={isModalOpen ? "modal" : "modal closed-modal"} id="modal">
      <div class="modal-content">
      <div className="close-btn" onClick={closeModal}><i aria-hidden="true" className="fas fa-times-circle fa-2x"></i></div>
        <img src={img} alt="modal" />
      </div>
      </div>
      <div className="backcolor">
        
        <NavBar />
      <br />
      <br />

      <div className={className} id="page-wrap">
        {children}
        </div>
        <br />
        <br />
        <br/>
      <Footer />      
    </div>
    </div>
  );
};

export default Main;
