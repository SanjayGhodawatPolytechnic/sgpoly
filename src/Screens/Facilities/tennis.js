import React from "react";

import Main from "../../ReusableComponents/Main";

const tennis = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Tennis_Court1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Tennis_Court2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Tennis_Court3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Tennis_Court4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Tennis_Court5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Tennis_Court6.jpg",
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

export default tennis;
