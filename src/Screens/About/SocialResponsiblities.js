import React, { useState } from 'react';
import Main from '../../ReusableComponents/Main';
import ScrollAnimation from 'react-animate-on-scroll';
import './css/Popup.css'
import ImageGal from './components/ImageGallery';


const SocialResponsiblities = () => {

    const [isPopup,setIsPopup] = useState(false)
    


    const PopUpScreen = () => {
        
        return(
            <div className='popup'>  
            <div className='popup\_inner'>
                <div className="container">
                    <div className="card">
                        <div className="card-header text-center">
                            SGI and Sanjay Ghodawat Group commenced giving the donation of Rs. 1.25 Crores to help drought affected farmers{'    '}                            
                            <button className="btn btn-danger" onClick={() => setIsPopup(false)}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eject-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816L7.27 1.047zM.5 11.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-1z"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                <div className="card">
                    <div className="card-header">
                        <b>SGI and Sanjay Ghodawat Group commenced giving the donation of Rs. 1.25 Crores to help drought affected farmers</b>
                        <br/>                        
                        <b>The first phase of the donation was carried on Today, 10th September 2015 by distributing the donation to some farmer families</b>
                    </div>
                    <div className="card-body">
                <div className="container">
                    <ImageGal />
                </div>
                </div>                
                </div>
                <br/>
                <br/>
                <div className="card bg-transparent">
                    <div className="col-12">
                        <a href="http://www.sgipolytechnic.in/pdf/Farmers_help.pdf" target="blank"><button className="btn btn-success rounded-pill w-100">Click here for Media Coverage</button></a>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="card">
                <div className="card-header">
                        <b>The second phase of the donation was carried on 3rd October 2015 by distributing the donation to some farmer families</b>
                        <br/>                                                
                </div>
                <div className="card-body">
                    <div className="container">
                        <ImageGal listNo={2} />
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        )
    }


    return (
        <Main isSlideShow={true}>
            <div>
                <br/><br/><br/><br/><br/>               
                <ScrollAnimation animateIn="fadeIn" >
                    <div className="card ">
                        <div className="card-header text-center ">
                            Social Responsiblities
                        </div>
                        <div className="card-body">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-1 col-0"></div>
                            <img src={"http://www.sgipolytechnic.in/Images/SocialResp.jpg"} className="setWidth col-lg-8 col-md-8 col-sm-10 col-0 rounded" alt="..."/>
                            <div className="col-lg-2 col-md-2 col-sm-1 col-0"></div>
                        </div>
                        <br/>  
                            <p className="card-text">Mr. Sanjay Ghodawat, as a responsible citizen, strongly believes in reciprocation to the society. In 1996, he founded a charitable Trust in the name of his mother 'Sou. Sushila Danchand Ghodawat Charitable Trust'.</p>
                            <p className="card-text">Besides he has contributed to a number of social initiatives including building for blind school in Miraj, operation hall at Siddhivinayak Hospital, Miraj, plastic surgery camps sponsored by Ichalkaranji Rotary Club at Ichalkaranji, Where over 500 surgeries are done every year and setting-up of an eye hospital amongst others.</p>
                            <p className="card-text">In 2001, he started a Blood Bank by the name 'Acharya Shree Tulsi Blood Bank' at Udgaon(Jaysingpur) equipped with sophisticated laboratory equipment and has been rated as one of the best three blood banks in India.</p>
                            <p className="card-text">Mr. Ghodawat also started a Junior Girls College in 2007, educating over 1700 girls and is now planning to start a Dental and Nursing College, Diploma courses and Pharmacy college.</p>
                            <div className="card-header text-center">                                
                                Sou. Sushila Danchand Ghodawat Charitable Trust's
                            </div>
                            <div className="card-body">
                            <ul class="list-group rounded">
                                <li class="list-group-item list-group-item-primary rounded">Sanjay Ghodawat Institutes (Faculty of Engineering), Atigre</li>                                
                                <li class="list-group-item list-group-item-primary rounded">Sanjay Ghodawat Institutes (Faculty of Management), Atigre</li>
                                <li class="list-group-item list-group-item-primary rounded">Sanjay Ghodawat Polytechnic, Atigre</li>
                                <li class="list-group-item list-group-item-primary rounded">Sanjay Ghodawat International School</li>
                                <li class="list-group-item list-group-item-primary rounded">Sanjay Ghodawat IIT &amp; Medical Academy</li>
                                <li class="list-group-item list-group-item-primary rounded">Sanjay Ghodawat Junior College</li>
                                <li class="list-group-item list-group-item-primary rounded">Acharya Shree Tulsi Blood Bank &amp; Blood Component Center, Udgaon (Jaysingpur)</li>
                                <li class="list-group-item list-group-item-primary rounded">Acharya Shree Mahapradnya Eye Hospital, Udgaon (Jaysingpur)</li>
                                <li class="list-group-item list-group-item-primary rounded">Vandemataram Healthy Mother Healthy Baby, Udgaon (Jaysingpur)</li>
                                <li class="list-group-item list-group-item-primary rounded">Computer Academy - Free Computer Education for poor &amp; Handicapped, Udgaon (Jaysingpur)</li>
                                <li class="list-group-item list-group-item-primary rounded">Sick Bed Service - Medical Equipments on Deposit basis, Udgaon (Jaysingpur)</li>
                                <li class="list-group-item list-group-item-primary rounded">School Health Checkup, Atigre</li>
                                <li class="list-group-item list-group-item-primary rounded">Sou. Sushila Danchand Ghodawat Medical &amp; Technical Institute, Udgaon (Jaysingpur)</li>
                                <li class="list-group-item list-group-item-primary rounded">PGDMLT &amp; BSc MLT College, Udgaon (Jaysingpur)</li>
                            </ul>
                            </div>
                            <div className="card-header text-center">
                                Contribution of SGI to social initiatives
                            </div>
                            <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                        <button className="btn btn-info rounded-pill w-100 m-2" onClick={() => setIsPopup(true)}>SGI and Sanjay Ghodawat Group commenced giving the donation of Rs. 1.25 Crores to help drought affected farmers</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <br/>                        
                    </div>
                </ScrollAnimation>                  
            <br/><br/>
            <div className="container">
                    {isPopup && PopUpScreen()}
                </div>
            </div>                                            
        </Main>
    );
}

export default SocialResponsiblities;
