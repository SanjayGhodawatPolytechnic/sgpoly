import React from "react";

//imports for carousel

import "react-multi-carousel/lib/styles.css";

import "./carousel.css";


//importing firebase
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

// TODO:Delete This Component 
const Carousel = () => {
  const [data, setData] = useState([]);
  const [isPopUp, setisPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async () => {
    setIsLoading(true);
    let dataRef = firebase.database().ref("updates");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let contactKey = Object.keys(dataSnapshot.val());
        contactKey.forEach((value, key) => {
          result[key]["key"] = value;
        });
        result.forEach((v, i) => {
          let date = new Date(v.postedOn);
          let dateData = [];
          dateData.push(date.getDate());
          dateData.push(date.getMonth());
          dateData.push(date.getFullYear());
          dateData.push(date.getHours());
          dateData.push(date.getMinutes());
          dateData.push(date.getSeconds());
          v.postedOn = dateData;
        });
        result.reverse();
        data.push(result);
        setData(data[0]);
        // console.log(data)
        // console.log(result)
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="container css-caro">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
                
  )
}

export default Carousel;
