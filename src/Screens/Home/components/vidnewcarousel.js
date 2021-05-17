import React, { Component } from "react";
// import $ from "jquery";
import "./vidcarousel.css";

const Vidnewcarousel = () => {
  return (
    <div className="vid-container">
      <div className="m-0 p-0">
        <h4 className="news-title"> Videos</h4>
        <div className="news-line" />
      </div>
      <div class=" vid-wrapper ">
        <div className=" vid">
          <iframe src="https://www.youtube.com/embed/uPeV5NvaAfI"></iframe>
        </div>
        <div className=" vid">
          <iframe src="https://www.youtube.com/embed/ONTY9knqIBA"></iframe>
        </div>
        <div className=" vid">
          <iframe src="https://www.youtube.com/embed/Ar8O_351z9s"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Vidnewcarousel;
