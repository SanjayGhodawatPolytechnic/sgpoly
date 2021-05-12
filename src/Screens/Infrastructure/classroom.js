import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const classroom = () => {
  const Items = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fclassrooms1.jpg?alt=media&token=2ecb124f-cd69-4153-8bdf-4703ac99bf3e",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2Fclassrooms2.jpg?alt=media&token=20a7cc77-172e-46e6-b115-6d587a802323",
    },
  ];

  return (
    <Main>
      <div className="main">
        <div class="row my-2">
          {Items.map((d, i) => (
            <div className="col-4 border border-dark p-2 mx-2 rounded shadow-lg">
              <img alt="class" class="img-fluid" src={d.image} />
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
