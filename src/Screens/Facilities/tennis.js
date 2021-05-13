import React from "react";

import Main from "../../ReusableComponents/Main";

const tennis = () => {
  const Items = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FTennis_Court1.jpg?alt=media&token=9f26765f-8837-40b8-a9da-3809b36b682b",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FTennis_Court2.jpg?alt=media&token=d7cc2e9f-68d3-4b86-914c-a637951544ab",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FTennis_Court3.jpg?alt=media&token=7ef6a427-2b99-4c5e-8d22-beabfac417fe",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FTennis_Court4.jpg?alt=media&token=8b3c960c-9ad4-4ab6-9b4a-59609441c5f8",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FTennis_Court5.jpg?alt=media&token=d5cddc59-4332-47ca-a556-da75fdbbf6b0",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FInfrastructure%2FTennis_Court6.jpg?alt=media&token=242da545-c087-4539-a6df-ac0a9cd955bf",
      },
    
  ];

  return (
    <Main>
      <div className="main">
        <div class="grid-container">
          {Items.map((d, i) => (
            <div>
              <img class={`grid-item grid-item-${i}`} src={d.image} alt="tennis" />
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default tennis;
