import React from 'react';
import Main from '../../ReusableComponents/Main';
import NewsCarousel from '../../ReusableComponents/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css'


function Home() {
  return (
      <Main isSlideShow={true}>

    <div>            
      <div className="container">
        
        <br/>
        
        <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
          <h1>
            Recents
          </h1>
        </ScrollAnimation>
         
        
        <br/>
        <br/>          
      </div>
    </div>
    <NewsCarousel />
    <br/><br/><br/>

    <div className="row">

    <div class="card-deck ">
    
      <div class="card mb-4 rainbow ">
    
        <div class="view overlay">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
            alt=""/>
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
    
        <div class="card-body">
    
          <h2 class="card-title">Sanjay Ghodawat</h2>
          <h4 className="card-title">Chairman</h4>
          <br/>
         
          <a class=" btn btn-lg btn-outline-danger btn-circle waves-effect"><i class="fas fa-angle-right"></i></a>
    
        </div>
    
      </div>
    
      <div class="card mb-4 rainbow">
    
        <div class="view overlay">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
            alt=""/>
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
    
        <div class="card-body">
    
        <h2 class="card-title">Vinayak Bhosale</h2>
        <h4 className="card-title">Trustee</h4>
        <br/>
        <a class=" btn btn-lg btn-outline-danger btn-circle waves-effect"><i class="fas fa-angle-right"></i></a>
         
    
        </div>
    
      </div>
    
      <div class="card mb-4 rainbow ">
    
        <div class="view overlay">
          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
            alt="Card image cap"/>
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
    
        <div class="card-body">
    
        <h2 class="card-title">Virat Giri</h2>
        <h4 className="card-title">Principal</h4>
        <br/>
        <a class=" btn btn-lg btn-outline-danger btn-circle waves-effect"><i class="fas fa-angle-right"></i></a>
         
    
        </div>
    
      </div>
    
    </div>
    
    
    </div>
    <br/><br/><br/><br/>

    </Main>
  );
}

export default Home;
