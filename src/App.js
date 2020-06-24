import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        
        <a  href="#" ></a>

        <img className="navbar-brand logo" src={require('./logo.png')}/>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active effect" href="#">Home </a>

            <a className="nav-item nav-link active effect" href="#">Management</a>
            <a className="nav-item nav-link active effect" href="#">Academics </a>
            <a className="nav-item nav-link active effect" href="#">Infrastructure </a>


            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle active effect" href="#" id="navbarDropdown"  data-toggle="dropdown">
                Department
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Computer Science & Engineering </a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Mechanical Engineering</a> <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Civil Engineering</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Electrical Engineering</a><div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Elotronics & telecomunication Engineering</a>
              </div>
            </li>

            <a className="nav-item nav-link active effect" href="#">Admission</a>
            <a className="nav-item nav-link active effect" href="#">Facilities</a>
            <a className="nav-item nav-link active effect" href="#">About Us </a>
            <a className="nav-item nav-link active effect" href="#">Contact Us </a>
            
            
          </div>
        </div>
      </nav> 
      
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require('./img/1.jpg')} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('./img/2.jpg')} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('./img/3.jpg')} alt="Third slide"/>
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
        </div>
        <br/>
        <br/>
        <br/>
        <h1>Top News</h1>
        <br/>
        <br/>

        

        
      </div>
    </div>
  );
}

export default App;
