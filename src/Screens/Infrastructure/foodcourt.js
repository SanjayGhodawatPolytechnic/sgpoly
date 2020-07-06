import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const foodcourt = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court1.jpg",
    },

    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court6.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court7.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court8.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court9.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court10.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court11.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court12.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court13.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court14.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court15.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Food_Court16.jpg",
      },
    
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default foodcourt;
