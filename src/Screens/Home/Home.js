import React from "react";
import Main from "../../ReusableComponents/Main";

import ScrollAnimation from "react-animate-on-scroll";
import "./Home.css";
import "./Story.css";
import { useEffect } from "react";
import Highlights from "./components/Highlights";
import NewsCarousel from "./components/Carousel";
import Updates from "./components/Updates";
import CSELogo from "./icons/CSE"
import MechLogo from "./icons/Mech";
import CivilLogo from "./icons/Civil";
import ENTCLogo from "./icons/ENTC";
import ElectLogo from "./icons/Elect";
import "./CSS/DeptCard.css"
// import { TimelineMax } from "gsap";

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
      <Updates />
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
      
      <div className="container-lg text-center">
          <h1 className="text-dark">COURSES</h1>
        <div className="row text-center d-flex justify-content-center">
          
          <div className="col-xl-3 col-sm-6 mb-5 cse-card shadow-sm mr-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <CSELogo className="mb-3 cse-logo" width="100px"/>
              <h5 className="mb-0">Computer Science</h5>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 mech-card shadow-sm mr-2 ml-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <MechLogo className="mb-3 mech-logo" width="100px" height="80px" />
              <h5 className="mb-0">Mechanical</h5>
              {/* <span className="small text-uppercase text-muted">CEO - Founder</span> */}
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 civil-card shadow-sm mr-2 ml-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <CivilLogo className="mb-3 civil-logo" width="100px" height="80px" />
              <h5 className="mb-0">Civil</h5>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 etc-card shadow-sm mr-2 ml-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ENTCLogo className="mb-3 etc-logo" width="100px" height="80px" />
              <h5 className="mb-0">E &amp; TC</h5>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 ele-card shadow-sm mr-2 ml-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ElectLogo className="mb-3 ele-logo" width="100px" height="80px" />
              <h5 className="mb-0">Electrical</h5>
              
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;
