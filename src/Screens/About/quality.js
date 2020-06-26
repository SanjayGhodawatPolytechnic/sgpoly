import React from 'react';
import Main from '../../ReusableComponents/Main';
import ScrollAnimation from 'react-animate-on-scroll';

function aboutQuality(){
    return(
        <Main isSlideShow={true}>
            <div>
            <br/>
            <br/>
    
            <ScrollAnimation animateIn="fadeIn" >
                <div className="card ">
                    <div className="card-header text-center ">
                        Quality Policy
                    </div>
                    <div className="card-body">
                        <p className="card-text">Sanjay Ghodawat Polytechnic is committed to establish high standards to educate, enhance and excel in imparting professional Engineering and Management education, by well qualified and experienced faculty devoted in nurturing students into socially responsible professionals through creative collaboration, innovation and research.</p>
                    </div>
                </div>  
          </ScrollAnimation>  
          
          <br/><br/>

          <ScrollAnimation animateIn="fadeIn" >
                <div className="card ">
                    <div className="card-header text-center ">
                        Quality Objectives
                    </div>
                    <div className="card-body">
                        <p className="card-text">To develop SGP into a world class Institute of learning and research in Engineering and Management with a high standard of academic excellence.</p>
                        <p className="card-text">To facilitate students with a state of the art infrastructure learning environment and value based education to encourage innovation and leadership</p>
                        <p className="card-text">To strengthen student capabilities and all-round development through continual improvement in curricular and co-curricular initiatives, personal attention and mentoring</p>
                        <p className="card-text">To promote student and Faculty professional development for enhanced career growth through Quality support services and Relevance.</p>
                        <p className="card-text">To nurture students as citizens with moral, ethical and social values so as to discharge their obligations towards the industry and the society</p>
                    </div>
                </div>  
          </ScrollAnimation>  
                
            

            <br/>
            <br/>

            </div>
        
        
        
        
        </Main>
    )

}


export default aboutQuality;