import React from "react";

import Main from "../../ReusableComponents/Main";

const more = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/computer_lab.jpg",
      caption: "Computer Lab",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/drawing_hall.jpg",
      caption: "Drawing Hall",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/reading_hall.jpg",
      caption: "Reading Hall",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Bus1.jpg",
      caption: "Transportation",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Health_Care01.jpg",
      caption: "Health Care",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/ATM01.jpg",
      caption: "ATM",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/ATM01.jpg",
      caption: "Stationary",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} />
              <span className="badge badge-secondary">{d.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default more;
