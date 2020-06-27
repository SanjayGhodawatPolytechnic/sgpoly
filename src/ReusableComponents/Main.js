import React from 'react';
import './CSS/Menu.css';
import Menu from './Menu';
import Footer from './Footer';


const Main = ({
    title="My Title",
    description="My description",
    className="container-lg",    
    children,
    isSlideShow=false,
}) => {


  const Slideshow=()=>{
    if(isSlideShow){
      return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require('../img/1.jpg')} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('../img/2.jpg')} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('../img/3.jpg')} alt="Third slide"/>
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
      )
    }
  }
  return (
    <div className="backcolor"> 
      {Slideshow()}
      <div className="">
        <Menu />
      </div>     
      
     <div className={className} >
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default Main;
