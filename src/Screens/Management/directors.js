import React from 'react';
import Main from '../../ReusableComponents/Main';
import './CSS/management.css'



function managementDirectors(){
    return(
        <Main isSlideShow={true}>
            <br/><br/>
            <div className="row mar">            
                <div className="col-sm-12">
                    <div class="card-group vgr-cards">
                        <div class="card rainbow ">
                            <div class="view overlay">          
       
                        </div>
                        <div class="card-img-body">
                            <img alt="chairman" class="img-fluid" src="http://www.sgipolytechnic.in/pics/Sanjay-ghodawat.jpg" />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">Mr. Sanjay Ghodawat</h3><br/>
                            <i class="fas fa-circle mr-3"></i>Chairman<br/><br/>
                            <i class="fas fa-circle mr-3"></i>Managing Principal - Sanjay Ghodawat Group of Industries<br/>   <br/>                            
                           <p> <i class="fas fa-circle mr-3"></i>A visionary and an influential leader founded Ghodawat Industries (I) pvt. Ltd in 1993 and achieved a remarkable success in a short span. Mr. Sanjay Ghodawat has been awarded by various Institutions and organizations for his immense contribution.<br/></p>   <br/>                            
                            
                        </div>                        
                    </div>
                        <br/>
                        <div class="card rainbow">
                            <div class="view overlay">          
                               
                                    
                            </div>
                            <div class="card-img-body">
                                <img class="img-fluid" src="http://www.sgipolytechnic.in/pics/Shrenik-Ghodawat1.jpg" alt="shrenik" />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Mr. Shrenik Ghodawat</h3><br/>
                                <i class="fas fa-circle mr-3"></i>Master of Business Administration<br/><br/>
                                <i class="fas fa-circle mr-3"></i>Secretary<br/>   <br/>                            
                                
                            </div>                        
                        </div>



                        <br/>
                        <div class="card rainbow">
                            <div class="view overlay">          
                               
                                    
                            </div>
                            <div class="card-img-body">
                                <img class="img-fluid" src="http://www.sgipolytechnic.in/pics/Vinayak-Bhosale.jpg" alt="vinayak bhosle" />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Mr.  Vinayak Bhosale</h3><br/>
                                <i class="fas fa-circle mr-3"></i>Electronics Engineer<br/><br/>
                                <i class="fas fa-circle mr-3"></i>Trustee<br/>   <br/>                            
                                
                            </div>                        
                        </div>



                        <br/>
                        <div class="card rainbow">
                            <div class="view overlay">          
                               
                                    
                            </div>
                            <div class="card-img-body">
                                <img class="img-fluid" src="http://www.sgipolytechnic.in/pics/Virat-Giri.jpg" alt="Virat giri" />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Mr.Virat Giri</h3><br/>
                                <i class="fas fa-circle mr-3"></i>M.Tech<br/><br/>
                                <i class="fas fa-circle mr-3"></i>Principal<br/>   <br/>                            
                                
                            </div>                        
                        </div>
                    </div>
                </div>  
            </div>
        </Main>
    )
}


export default managementDirectors;