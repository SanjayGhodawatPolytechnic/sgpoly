import React, { useState, useEffect } from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";

const StudentHome = () => {
  const [data, setData] = useState([]);

  const getPic = async () => {
    setData([]);
    let dataRef = firebase.database().ref("student_pics");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());

        setData(result);
      }
    });
  };

  useEffect(() => {
    getPic();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const chintan = () => {
    var i = 0;
    for (i = 0; i < data.length; i++) {
      return (        
          
            <div id="mdb-lightbox-ui">
          <div className=" carousel-item  text-center active">
            <figure className="col-md-4 d-md-inline-block">
              <a href={data[i].imageDownloadUrl} data-size="1600x1067">
                <img src={data[i].imageDownloadUrl} className="img-fluid" />
                <div className="carousel-caption">
                  <h3 className="h3-responsive">{data[i].fullName}</h3>
                  <p>{data[i].department}</p>
                </div>
              </a>
            </figure>
          </div>
          {i++}
          <div className=" carousel-item  text-center ">
            <figure className="col-md-4 d-md-inline-block">
              <a href={data[i].imageDownloadUrl} data-size="1600x1067">
                <img src={data[i].imageDownloadUrl} className="img-fluid" />
                <div className="carousel-caption">
                  <h3 className="h3-responsive">{data[i].fullName}</h3>
                  <p>{data[i].department}</p>
                </div>
              </a>
            </figure>
          </div>
          {i++}
          <div className=" carousel-item  text-center ">
            <figure className="col-md-4 d-md-inline-block">
              <a href={data[i].imageDownloadUrl} data-size="1600x1067">
                <img src={data[i].imageDownloadUrl} className="img-fluid" />
                <div className="carousel-caption">
                  <h3 className="h3-responsive">{data[i].fullName}</h3>
                  <p>{data[i].department}</p>
                </div>
              </a>
            </figure>
          </div>
          <div class="carousel-item">
      <div class="col-12 col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg"
            alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title font-weight-bold">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>            
    </div>
          </div>
        
      );
    }
  };

  return (
    <div>
      <Main isSlideShow={true}>
        <br /> <br />
        <a href="/students/uploadimage">
          <button className="btn btn-elegant">Add a photo</button>
        </a>
        <br />
        <br />
        <h2 class="text-monospace">Top 10 Clicks By Students</h2>
        {/*Carousel Wrapper*/}
        <div
          id="carousel-example-2"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-2"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carousel-example-2" data-slide-to={1} />
            <li data-target="#carousel-example-2" data-slide-to={2} />
            <li data-target="#carousel-example-2" data-slide-to={3} />
            <li data-target="#carousel-example-2" data-slide-to={4} />
            <li data-target="#carousel-example-2" data-slide-to={5} />
            <li data-target="#carousel-example-2" data-slide-to={6} />
            <li data-target="#carousel-example-2" data-slide-to={7} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item ">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <div className="mask rgba-black-strong" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Strong mask</h3>
                <p>chintan</p>
              </div>
            </div>
          </div>
          {/*/.Slides*/}
          {/*Controls*/}
          <a
            className="carousel-control-prev"
            href="#carousel-example-2"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example-2"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/*/.Controls*/}
        </div>
        {/*/.Carousel Wrapper*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4 class="text-monospace">Clicks By Students</h4>
        {/*Carousel Wrapper*/}
        <div
          id="carousel-with-lb"
          className="carousel slide carousel-multi-item v-2"
          data-ride="carousel"
        >
          <center>
            <div class="controls-top">
              <a
                class=" btn btn-floating btn-secondary"
                href="#carousel-with-lb"
                data-slide="prev"
              >
                <i class="fas fa-chevron-left"></i>
              </a>
              <a
                class="btn btn-floating btn-secondary"
                href="#carousel-with-lb"
                data-slide="next"
              >
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </center>

          <ol class="carousel-indicators">
    <li data-target="#carousel-example-multi" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-multi" data-slide-to="1"></li>
    <li data-target="#carousel-example-multi" data-slide-to="2"></li>
    <li data-target="#carousel-example-multi" data-slide-to="3"></li>
    <li data-target="#carousel-example-multi" data-slide-to="4"></li>
    <li data-target="#carousel-example-multi" data-slide-to="5"></li>
  </ol>

          {/*Slides and lightbox*/}
          
            {/*First slide*/}
            <div className="carousel-inner mdb-lightbox v-2" role="listbox">
            {chintan()}
            </div>
            {/*/.First slide*/}            
          
          {/*/.Slides*/}
        </div>
        {/*/.Carousel Wrapper*/}
      </Main>
    </div>
  );
};

export default StudentHome;
