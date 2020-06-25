import React from 'react';
import Main from '../../ReusableComponents/Main';
import NewsCarousel from '../../ReusableComponents/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';



function Home() {
  return (
      <Main isSlideShow={true}>

    <div>            
      <div className="container">
        
        <br/>
        
        <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
          <h1>
            Top News
          </h1>
        </ScrollAnimation>
         
        
        <br/>
        <br/>          
      </div>
    </div>
    <NewsCarousel />
    </Main>
  );
}

export default Home;
