import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const amphi = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Amphi_Theatre1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Amphi_Theatre2.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Amphi_Theatre3.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Amphi_Theatre4.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Amphi_Theatre5.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/Amphi_Theatre6.jpg",
    },
    

  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="amphi" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default amphi;
