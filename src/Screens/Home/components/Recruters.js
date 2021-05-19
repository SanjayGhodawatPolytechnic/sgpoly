import React from "react";
import Marquee from "react-fast-marquee";
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
    <div>
      <div className="m-0 p-0">
        <h4 className="news-title"> Our Recruters</h4>
        <div className="news-line" />
      </div>
      <Marquee speed={90} gradient={true} pauseOnHover={true}>
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="google"
        />
        <Image
          src="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
          alt="microsoft"
        />
        <Image
          src="data:image/png;base64,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"
          alt="infosys"
        />
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png"
          alt="accenture"
        />
        <Image
          src="https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F-1200-80.jpg"
          alt="uber"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt="amazon"
        />
      </Marquee>
    </div>
  );
};

export default Recruters;
