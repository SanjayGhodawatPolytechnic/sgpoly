import React from "react";

import Main from "../../ReusableComponents/Main";

const ground = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround6.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround7.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround8.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround9.jpg",
    },

    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround10.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround11.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/PlayGround12.jpg",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="grounds" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default ground;
