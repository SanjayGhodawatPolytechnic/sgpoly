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
            src="https://images.unsplash.com/photo-1620983379290-71e02d8ca563?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt=""
            className="img-about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
