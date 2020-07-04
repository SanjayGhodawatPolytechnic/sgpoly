import React from 'react';
import Main from '../../ReusableComponents/Main';




function aboutAchievement(){
    return(
        <Main isSlideShow={true}>
            <div>
                <br/><br/>    
                <div className="card ">
                    <div className="card-header text-center ">
                        Affiliations & Certifications
                    </div>
                    <div className="card-body">
                        <a href="" className="text-muted">National Board of Accreditation (NBA) </a><br/><br/>
                        <a href="" className="text-muted">Verify National Board of Accreditation (NBA) </a><br/><br/>
                        <a href="" className="text-muted">Best Polytechnic in Maharashtra</a><br/><br/>
                        <p className="card-text">Excellent Grade by MSBTE, Mumbai</p>
                        <a href="" className="text-muted">"Ideal Educational Institute" award for Outstanding Performance in Education</a>
                        <br/>
                        

                    </div>
                </div>  
                <br/><br/>
            </div>
        </Main>
    )

}
export default aboutAchievement;