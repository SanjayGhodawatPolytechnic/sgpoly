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
        <div className="container">
          <img src="../img/banner2.jpg" alt=""/>
        </div>
      )
    }
  }
  return (          
    <div className="backcolor">       
    <div className="container">
          <img src={require("../img/banner.jpg")} alt="" className="img-fluid"/>
        </div>
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
