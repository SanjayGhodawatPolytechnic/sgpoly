import React from "react";

import Main from "../../ReusableComponents/Main";

const pool = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool6.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool7.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool8.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool9.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool10.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool11.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool12.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool13.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool14.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool15.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool16.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool17.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool18.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool19.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/SwimPool20.jpg",
    },

  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="pool" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default pool;
