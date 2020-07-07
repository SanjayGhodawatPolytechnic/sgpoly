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



function Home() {
  const [currentStory,setCurrentStory] = useState([])
  const [isStoryVisible,setIsStoryVisible] = useState(false)
  var touches = 0
  const storyData = [
    {url:'https://picsum.photos/1000/1000', header:{
      heading:"Test",
      subheading:'Posted 2h ago',
      profileImage:'https://picsum.photos/1000/1000'
    }}
  ]

  useEffect(() => {
    
  }, [])
  return (
      <Main isSlideShow={true}>        
          <Fullscreen enabled={isStoryVisible} onChange={f => setIsStoryVisible(f)}>
            {isStoryVisible && (
              <div onTouchMove={e => {
                e.preventDefault()
                  touches += 16;
                  console.log(touches)
                  if(touches > 500){
                    setIsStoryVisible(false)                
                  }
                }}                
                >
              <Stories
              stories={currentStory}
              defaultInterval={2000}
              width={window.outerWidth}
              height={window.outerHeight}              
            />
            </div>
            )}
        </Fullscreen>        
        <div class="scrolling-wrapper">          
          <img src={storyData[0].url} className="rounded-circle" style={{width:50, height:50, margin:2}} onClick={() => {
            currentStory.push(storyData[0])
            setIsStoryVisible(true)
            }} />
        </div>

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
