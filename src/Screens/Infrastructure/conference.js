import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const conference = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference6.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference7.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference8.jpg",
      },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Conference9.jpg",
    },

  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="conference" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default conference;
