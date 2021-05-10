import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swiper, { Navigation, Pagination, Mousewheel } from "swiper";
import "./swiper.css";
import * as firebase from "firebase";

const SwiperEg = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  Swiper.use([Navigation, Pagination, Mousewheel]);

  const [data, setData] = useState([]);

  const getAllUpdates = async () => {
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
        // if (result.length > 3) {
        //   let first3 = result.slice(0, 3);
        //   let last3 = result.slice(3, 6);
        //   let combined = [first3, last3];
        //   setData(combined);
        // } else {
        //   let ar = [result];
        //   setData(ar);
        // }
        setData(result);
      }
    });
  };

  useEffect(() => {
    getAllUpdates();

    var swiper = new Swiper(".blog-slider", {
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      autoHeight: true,

      // autoHeight: true,
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
    <div>
      <div className="training-title col-3 text-right swiper-title">
        <h4 className="reports-title">Important Reports</h4>
        <div className="reports-line" />
      </div>
      <div className="swiper-cont">
        <div class="blog-slider">
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
            {/* <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?{" "}
              </div>
              <a href="#" class="blog-slider__button">
                READ MORE
              </a>
            </div>
          </div>
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
              <div class="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <a href="#" class="blog-slider__button">
                READ MORE
              </a>
            </div>
          </div>

          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <a href="#" class="blog-slider__button">
                READ MORE
              </a>
            </div>
          </div> */}
          </div>
          <div class="blog-slider__pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default SwiperEg;
