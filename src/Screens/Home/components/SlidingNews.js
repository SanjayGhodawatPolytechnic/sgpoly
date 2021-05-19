import React from "react";
import Marquee from "react-fast-marquee";

const SlidingNews = () => {
  return (
    <div>
      <Marquee speed={50} gradient={true}>
        I can be a React component, multiple React components, or just some
        text.
        <h3>Stay Home, Stay Safe</h3>
      </Marquee>
    </div>
  );
};

export default SlidingNews;
