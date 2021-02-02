import React from "react";
import Main from "../../ReusableComponents/Main";
import "./Home.css";
import { useEffect } from "react";
import CSELogo from "./icons/CSE"
import MechLogo from "./icons/Mech";
import CivilLogo from "./icons/Civil";
import ENTCLogo from "./icons/ENTC";
import ElectLogo from "./icons/Elect";
import "./CSS/DeptCard.css"
import Counter from "./components/Counter";

function Home() {
  useEffect(() => {
    // TimelineMax
  }, []);
  return (
    <Main isSlideShow={true}>
      
      {/* <Highlights /> */}
       
      {/* <Updates /> */}
      <div className="">
        <br/>
        <br/>
        <br />
        <br/>
        <br/>
        <br />
        <br/>
        <br/>
        <br />
        
       

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  height="600px" className="d-block w-100" src="https://images.unsplash.com/photo-1611338687497-5a9a59910971?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img  height="600px" className="d-block w-100" src="https://images.unsplash.com/photo-1611332744415-7c20ecb34c11?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img  height="600px" className="d-block w-100" src="https://images.unsplash.com/photo-1611324679967-a7c2bae60638?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="Third slide" />
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
        <br/>
    </div>

{/* <div className="container">
<div className="carousel-container">
<ul class="slider">
    <li>
        <input type="radio" id="slide1" name="slide" checked />
        <label for="slide1"></label>
        <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/872485/coldchase.jpg" alt="Panel 1" />
    </li>
    <li>
        <input type="radio" id="slide2" name="slide" />
        <label for="slide2"></label>
       <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/980517/icehut_sm.jpg" alt="Panel 2" />
    </li>
    <li>
        <input type="radio" id="slide3" name="slide" />
        <label for="slide3"></label>
        <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/943660/hq_sm.jpg" alt="Panel 3" />
    </li>
    <li><a href="http://cssslider.com/">
        <input type="radio" id="slide4" name="slide" />
        <label for="slide4"></label>
        <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/599584/home.jpg" alt="Panel 4" /></a>
    </li>
</ul>
</div> */}





      <Counter />
{/* 
      <div className="row">
        <div className="col-4">
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
        <div className="col-4">
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
        <div className="col-4">
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
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <div className="container-sm text-center">
          <h1 className="text-dark">COURSES</h1>
        <div className="row text-center d-flex justify-content-center">
          
          <div className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2 rounded">
            <div className="rounded py-5 px-4 bg-transparent">
              <CSELogo className="mb-3 cse-logo" width="100px"/>
              <h5 className="mb-0">Computer Science</h5>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 mech-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <MechLogo className="mb-3 mech-logo" width="100px" height="80px" />
              <h5 className="mb-0">Mechanical</h5>
              {/* <span className="small text-uppercase text-muted">CEO - Founder</span> */}
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 civil-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <CivilLogo className="mb-3 civil-logo" width="100px" height="80px" />
              <h5 className="mb-0">Civil</h5>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 etc-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ENTCLogo className="mb-3 etc-logo" width="100px" height="80px" />
              <h5 className="mb-0">E &amp; TC</h5>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 ele-card shadow-lg m-2">
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
