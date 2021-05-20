import React from "react";
import "./ImgCarousel.css";
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

function ImgCarousel() {
  const [data, setData] = useState([]);

  const getImg = () => {
    let dataRef = firebase.database().ref("imgGallery");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        console.log("hii" + result);
        setData(result);
      }
    });
  };

  useEffect(() => {
    getImg();
  }, []);
  return (
    <div className="img-gallery-container">
      <div className="courses-title">
        <h4 className=" imp-title">Image-Gallery</h4>
        <div className="courses-line imp-line" />
      </div>
      <div class="Marquee">
        <Marquee
          speed={100}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <div class="">
            {data.map((d, i) => {
              return (
                <div class="Marquee-tag">
                  <img src={d.URL} alt="" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default ImgCarousel;
