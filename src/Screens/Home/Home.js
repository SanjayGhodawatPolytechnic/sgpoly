import React from 'react';
import Main from '../../ReusableComponents/Main';
import NewsCarousel from '../../ReusableComponents/Carousel';


function Home() {
  return (
      <Main isSlideShow={true}>

    <div>            
      <div className="container">
        
        <br/>
        
        <h1>Top News </h1>
        <br/>
        <br/>          
      </div>
    </div>
    <NewsCarousel />
    </Main>
  );
}

export default Home;
