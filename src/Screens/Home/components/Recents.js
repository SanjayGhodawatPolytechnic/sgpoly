import React from "react";
import "./Recents.css";
import * as firebase from "firebase";
import { useEffect } from "react";
import { useState } from "react";
import SwiperEg from "./Swiper";
const Recents = ({ setIsRecentsLoading }) => {
  const [data, setData] = useState([[]]);

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
        if (result.length > 3) {
          let first3 = result.slice(0, 3);
          let last3 = result.slice(3, 6);
          let combined = [first3, last3];
          setData(combined);
        } else {
          let ar = [result];
          setData(ar);
        }
        setIsRecentsLoading(false);
      }
    });
  };

  useEffect(() => {
    getAllUpdates();
  }, []);

  return (
    <div id="skew1" className="cus-div">
      <div className="folll">
        <section className="pt-1 pb-1">
          <div className="givmargin">
            <div className="row">
              {/* <div className="col-6">
                <h3 className="mb-3">Important Reports</h3>
              </div> */}
              <div className="training-title col-3 text-right">
                <h4 className="reports-title">Important Reports</h4>
                <div className="reports-line" />
              </div>
              <div className="col align-self-end text-right">
                <a
                  className="btn btn-primary mb-3 mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-arrow-left" />
                </a>
                <a
                  className="btn btn-primary mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right" />
                </a>
              </div>
              <div className="col-12">
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        {data[0].map((val, idx) => (
                          <div className="col-md-4 mb-3">
                            <div className="card h-100">
                              <img
                                className="update-img"
                                width="100%"
                                height="280px"
                                alt="100%x280"
                                src={val.imageDownloadUrl}
                              />
                              <div className="card-body">
                                <h4 className="card-title">{val.title}</h4>
                                <p className="card-text">{val.description}</p>
                                <p className="card-text">
                                  <b>POSTED ON:</b> {val.postedOn}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {data[1] && (
                      <div className="carousel-item">
                        <div className="row">
                          {data[1].map((val, idx) => (
                            <div className="col-md-4 mb-3">
                              <div className="card">
                                <img
                                  className="update-img"
                                  width="100%"
                                  height="280px"
                                  alt="100%x280"
                                  src={val.imageDownloadUrl}
                                />
                                <div className="card-body">
                                  <h4 className="card-title">{val.title}</h4>
                                  <p className="card-text">{val.description}</p>
                                  <p className="card-text">
                                    <b>POSTED ON:</b> {val.postedOn}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SwiperEg />
    </div>
  );
};

export default Recents;
