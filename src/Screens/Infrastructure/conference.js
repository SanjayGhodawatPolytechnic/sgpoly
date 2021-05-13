import React from "react";
import "./CSS/Overview.css";
import Main from "../../ReusableComponents/Main";

const conference = () => {
  const Items = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference1.jpg?alt=media&token=bea51cac-dda1-4588-b2b0-b236be206d40",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference2.jpg?alt=media&token=d0dc8e5d-577c-466c-8bdd-e5dc15cb099c",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference3.jpg?alt=media&token=4c9ce79b-ab58-4855-a8f5-dfcc6b5acaf3",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference4.jpg?alt=media&token=16448767-34b3-4435-8c67-f9377836c98b",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference5.jpg?alt=media&token=80624fbe-7272-48e5-8458-2b23c2e55285",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference6.jpg?alt=media&token=16f8a34f-2149-4162-9bb2-e09cd0b8b1fc",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference7.jpg?alt=media&token=53a52f18-031a-4c21-a8ff-adc58132218c",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference8.jpg?alt=media&token=5becad48-b4a2-47ca-ac6b-ca9fad7f6911",
      },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FConference9.jpg?alt=media&token=c2c1bcba-22a8-4c1a-bb6f-c75db98045b2",
    },

  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="conference" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default conference;
