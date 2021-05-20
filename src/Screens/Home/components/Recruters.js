import React from "react";
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

import "./Recruters.css";
const Recruters = () => {
  const [data, setData] = useState([]);

  const getRec = async () => {
    let dataRef = firebase.database().ref("recruiters");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        setData(result);
      }
    });
  };

  useEffect(() => {
    getRec();
  }, []);

  return (
    <div className="img-gallery-container">
      <div className="courses-title">
        <h4 className=" imp-title">Recruiters</h4>
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
        </div>
      </div>
    </div>
  );
};

export default Recruters;
