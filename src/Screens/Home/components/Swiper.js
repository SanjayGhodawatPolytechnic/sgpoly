import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swiper, { Navigation, Pagination, Mousewheel, Autoplay } from "swiper";
import "./swiper.css";
import * as firebase from "firebase";

// TODO: ====================Lot to work to make it responsive================================
const SwiperEg = ({ setIsRecentsLoading }) => {
  // const [activeIndex, setActiveIndex] = useState(1);
  Swiper.use([Navigation, Pagination, Mousewheel, Autoplay]);

  const [data, setData] = useState([]);

  const getAllUpdates = async () => {
    setIsRecentsLoading(true);
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
          dateData.push(date.getDate().toString());
          dateData.push((date.getMonth() + 1).toString());
          dateData.push(date.getFullYear().toString());
          v.postedOn = dateData.join("/");
        });
        result.reverse();
        setData(result);
        setIsRecentsLoading(false);
      }
    });
  };

  useEffect(() => {
    getAllUpdates();

    var swiper = new Swiper(".blog-slider", {
      observer: true,
      loop: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
      },
      observeParents: true,
      spaceBetween: 30,
      effect: "fade",
      autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
      direction: "vertical",
      slidesPerView: 1,
      slideActiveClass: "swiper-slide-active",
      allowTouchMove: false,
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container m-0 p-0">
      <div className="swiper-cont container m-0 p-0 row">
        <div className=" col-12 text-center swiper-title m-0">
          <h4 className="title">Important Reports</h4>
          <div className="reports-line swiper-line" />
        </div>
        <div class="blog-slider col-12">
          <div class="blog-slider__wrp swiper-wrapper">
            {data.map((val, idx) => (
              <div class="blog-slider__item swiper-slide" key={idx}>
                <div class="blog-slider__img">
                  <img src={val.imageDownloadUrl} alt="" />
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">{val.postedOn}</span>
                  <div class="blog-slider__title">{val.title}</div>
                  <div class="blog-slider__text">{val.description}</div>
                  <a href="#" class="blog-slider__button">
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div class="blog-slider__pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default SwiperEg;
