import React from 'react';
import Main from '../../ReusableComponents/Main';


function aboutDifferentiator(){
    return(
        <Main isSlideShow={true}>
            <div>
                <br/><br/>
    
                <div className="card ">
                    <div className="card-header text-center ">
                        Differentiators
                    </div>
                    <div className="card-body">
                        <p className="card-text">Led by dynamic and senior academicians.</p>
                        <p className="card-text">Highly qualified faculty from Industry and Education.</p>
                        <p className="card-text">Staff appraisal for improvement in quality of delivering, student appraisal for continuous improvement.</p>
                        <p className="card-text">State of the art Infrastructure.</p>
                        <p className="card-text">Strong Industry- Institute interaction.</p>
                        <p className="card-text">Guest lectures from Industry professionals.</p>
                        <p className="card-text">Management Development Centre for wide-ranging Industries.</p>
                        <p className="card-text">Stimulating variety of co-curricular activities.</p>
                        <p className="card-text">Best in line computing facility with secured Wi-Fi.</p>
                        <p className="card-text">Sports complex and swimming pool.</p>
                    </div>
                </div>  
           
                <br/><br/>
                
            </div>

        </Main>
    )

}


export default aboutDifferentiator;