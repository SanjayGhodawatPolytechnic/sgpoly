import React from "react";
import Main from "../../ReusableComponents/Main";

import ScrollAnimation from "react-animate-on-scroll";
import "./Home.css";
import "./Story.css";
import { useEffect } from "react";
import Highlights from "./components/Highlights";
import MenuBar from "../../ReusableComponents/Menu";
import NewsCarousel from "./components/Carousel";
import { TimelineMax } from "gsap";

function Home() {
  useEffect(() => {
    // TimelineMax
  }, []);
  return (
    <Main isSlideShow={true}>
      
      <Highlights />

      <div>
        <div>
          <br />

          {/*<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require('../../img/1.jpg')} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('../../img/2.jpg')} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('../../img/3.jpg')} alt="Third slide"/>
            </div>            
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>*/}
          <br />
          <br />
          <div className="row mt-10 text-center">
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <h1 className="headingFont">Recents</h1>
            </ScrollAnimation>
          </div>

          <br />
          <br />
        </div>
      </div>
      <NewsCarousel />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mr. Sanjay D. Ghodawat</h5>
              <p className="card-text">
                Chairman
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mr. Vinayak V. Bhosale</h5>
              <p className="card-text">
                Trustee
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mr. Virat V. Giri</h5>
              <p className="card-text">
                Principal
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row mt-10 text-center">
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h1 className="headingFont">Courses</h1>
        </ScrollAnimation>
      </div>
        
      {/* /
      /
      /
      /
      /
      /
       */}
      
      <div className="container">
        <div className="row text-center">
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="./website.png" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Computer Science</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              
            </div>
          </div>{/* End */}
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              
            </div>
          </div>{/* End */}
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              
            </div>
          </div>{/* End */}
          {/* Team item */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              
            </div>
          </div>{/* End */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;
