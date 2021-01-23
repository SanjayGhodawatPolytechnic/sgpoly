import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const classroom = () => {
  const Items = [
    {
      image: "http://www.sgipolytechnic.in/infrastructure/classrooms1.jpg",
    },
    {
      image: "http://www.sgipolytechnic.in/infrastructure/classrooms2.jpg",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img alt="class" class={`grid-item grid-item-${i}`} src={d.image} />
            </div>
          ))}
        </div>
        <p>
          Academic ambience would be the highest priority for all Class rooms &
          Labs which will be constructed as per and more than AICTE, DTE, MSBTE
          norms
        </p>
      </div>
    </Main>
  );
};

export default classroom;
