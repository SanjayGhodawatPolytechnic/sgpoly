import React from "react";
import "./ImgCarousel.css";
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

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
        <div class="Marquee-content">
          {data.map((d, i) => {
            return (
              <div class="Marquee-tag">
                <img src={d.URL} alt="" />
              </div>
            );
          })}

          {/* <div class="Marquee-tag">
            <img
              src="https://images.unsplash.com/photo-1621467092735-823551499c31?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://images.unsplash.com/photo-1611095968462-3dc56b14454a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://images.unsplash.com/photo-1621467092735-823551499c31?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
          <div class="Marquee-tag">
            <img
              src="https://images.unsplash.com/photo-1611095968462-3dc56b14454a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ImgCarousel;
