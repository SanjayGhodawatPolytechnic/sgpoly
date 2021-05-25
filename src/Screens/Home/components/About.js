import React from "react";
import "./About.css";

const AboutHome = () => {
  return (
    <div>
      <div className="about-wrapper">
        <div className=" info">
          <h2 className="title">About SGP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fuga
            laboriosam pariatur, blanditiis officiis consequuntur minus culpa
            ullam provident recusandae quam impedit, amet nisi ducimus voluptate
            ex voluptatem vitae dignissimos beatae. Quibusdam repellat mollitia
            reiciendis iure? Qui laudantium esse vitae mollitia dolores aperiam
            quia nobis minus tenetur. Dolores accusamus totam velit! Quam
            quisquam reprehenderit fugit quasi ad et accusantium quae.
          </p>
        </div>
        <div className=" solid-sec">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FD%20block%20(1).jpg?alt=media&token=c6108113-d285-431d-be79-293d40ebc356"
            alt=""
            className="img-about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
