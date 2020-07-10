import React from 'react';
import Main from '../../ReusableComponents/Main';
import NewsCarousel from '../../ReusableComponents/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css'
import { useState } from 'react';
import './Story.css'
import Stories from 'react-insta-stories';
import Fullscreen from "react-full-screen";
import { useEffect } from 'react';
import Highlights from './components/Highlights';



function Home() {
  const [currentStory,setCurrentStory] = useState([])
  const [isStoryVisible,setIsStoryVisible] = useState(false)
  var touches = 0
  const storyData = [
    {url:'https://picsum.photos/1000/1000', header:{
      heading:"Test",
      subheading:'Posted 2h ago',
      profileImage:'https://picsum.photos/1000/1000'      
    }    
  },
  { url: 'https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/Whatsapp%20Status%20New%20Video%20Outer%20Space.mp4?alt=media&token=b46f69d7-83ce-491b-86ff-6ce34da8f2fa', type: 'video', duration: 1000 }
  ]

  useEffect(() => {
    
  }, [])
  return (
      <Main isSlideShow={true}>        
          
        <Highlights />                

    <div>            
      <div >
        
        <br/>

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
        <br/><br/>
        <div className="row mt-10 text-center">          
          <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
          <h1 className="headingFont">
            Recents
          </h1>          
          </ScrollAnimation>         
        
        </div>
         
        
        <br/>
        <br/>          
      </div>
    </div>
    <NewsCarousel />    
    <br/><br/><br/><br/><br/>

    <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/72516b63-a1de-4d6a-8c02-ae0514d59410">
</iframe>

    <div className="row">

    <div class="card-deck ">
    
      <div class="card mb-4 tv ">
    
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
         
          <a class=" btn btn-lg  btn-circle waves-effect"><i class="fas fa-angle-right"></i></a>
    
        </div>
    
      </div>
    
      <div class="card mb-4 tv ">
    
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
    
      <div class="card mb-4 tv ">
    
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
