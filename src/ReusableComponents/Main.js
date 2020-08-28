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
      {/* <div className="chatButton">
        <button className="btn btn-danger rounded-circle w-100 h-100" style={{fontSize:30, alignItems:'center'}}>
          <i class="far fa-comment-dots m-0"></i>
        </button>
      </div> */}
      <df-messenger
      intent="WELCOME"
      chat-title="SGPbot"
      agent-id="72516b63-a1de-4d6a-8c02-ae0514d59410"
      language-code="en"
    ></df-messenger>
      {/* <div className="chatBox">        
        <iframe
      allow="microphone;"
      width="350"
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/72516b63-a1de-4d6a-8c02-ae0514d59410"        
      children={(<button className="btn btn-info">close</button>)}
      >      
      </iframe>
      </div> */}
    <div className="backcolor">
      
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
    </div>
  );
};

export default Main;
