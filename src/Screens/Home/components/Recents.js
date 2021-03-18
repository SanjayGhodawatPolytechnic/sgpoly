import React from "react";
import "./Recents.css";
import * as firebase from "firebase";
import { useEffect } from "react";
import { useState } from "react";

const Recents = () => {
  const [data, setData] = useState([[]]);

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
        if (result.length > 3) {
          let first3 = result.slice(0, 3);
          let last3 = result.slice(3, 6);
          let combined = [first3, last3];
          setData(combined);
        } else {
          let ar = [result];
          setData(ar);
        }
      }
    });
  };

  useEffect(() => {
    getAllUpdates();
  }, []);

  return (
    <div className="folll">
      <section className="pt-5 pb-5">
        <div className="givmargin">
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Important Reports</h3>
            </div>
            <div className="col-6 text-right">
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
                      {/* <div className="col-md-4 mb-3">
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d" />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698" />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a" />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div> */}
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
                        {/* <div className="col-md-4 mb-3">
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4" />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840" />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e" />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div> */}
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
  );
};

export default Recents;
