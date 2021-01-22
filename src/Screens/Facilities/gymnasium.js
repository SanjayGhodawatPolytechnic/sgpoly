import React from "react";

import Main from "../../ReusableComponents/Main";

const gymnasium = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Gym1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Gym2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Gym3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Gym4.jpg",
    },
    
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="gym" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default gymnasium;
