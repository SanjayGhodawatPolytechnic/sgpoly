import React from "react";

import Main from "../../ReusableComponents/Main";

const laboratories = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories6.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories7.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/Infrastructure/laboratories8.jpg",
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

export default laboratories;
