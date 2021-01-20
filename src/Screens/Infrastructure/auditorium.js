import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const auditorium = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium1.jpg",
    },

    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium6.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium7.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium8.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Auditorium9.jpg",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="auditorium" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default auditorium;
