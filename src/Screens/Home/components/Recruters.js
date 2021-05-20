import React from "react";
import Marquee from "react-fast-marquee";
import "./ImgCarousel.css";

import "./Recruters.css";
const Recruters = () => {
  const Image = ({ src, alt }) => (
    <div className="container p-0 m-0" style={{ width: "auto" }}>
      <img
        src={src}
        alt={alt}
        style={{ height: "100px", marginRight: "20px" }}
        className="img img-fluid"
      />
    </div>
  );
  return (
    <div className="img-gallery-container">
      <div className="courses-title">
        <h4 className=" imp-title">Recruiters</h4>
        <div className="courses-line imp-line" />
      </div>
      <div class="Marquee">
        <div class="Marquee-content">
          <div class="Marquee-tag">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F-1200-80.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruters;
