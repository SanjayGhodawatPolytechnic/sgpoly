import React from "react";

//imports for carousel

import "react-multi-carousel/lib/styles.css";

import "./carousel.css";

//importing firebase
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

// TODO:Delete This Component
const Carousel = ({ setIsCarouselLoading }) => {
  const [data, setData] = useState([]);

  const getCaro = async () => {
    setIsCarouselLoading(true);
    let dataRef = firebase.database().ref("carousel");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        console.log(result);
        setData(result);
        setIsCarouselLoading(false);
      }
    });
  };

  useEffect(() => {
    getCaro();
  }, []);

  return (
    <div className="container css-caro">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {data.map((d, i) => {
            if (i == 0) {
              return (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={i}
                  className="active"
                />
              );
            }
            return (
              <li data-target="#carouselExampleIndicators" data-slide-to={i} />
            );
          })}
        </ol>
        <div className="carousel-inner">
          {data.map((d, i) => {
            if (i == 0) {
              return (
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={data[0].URL}
                    alt={data[0].ImageName}
                  />
                </div>
              );
            }
            return (
              <div className="carousel-item">
                <img className="d-block w-100" src={d.URL} alt={d.ImageName} />
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
