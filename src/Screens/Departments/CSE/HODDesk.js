import React from 'react';
import Main from '../../../ReusableComponents/Main';

import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import './CSS/HOD.css';


const HODDesk = () => {
    return (
        <Main className="container-lg hod">
        <div class="row">
        
        <DeptMenu dept='Computer Science' subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9 text-light">
            <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
            data-offset="0">
                <div className="row">
                    <div className="col text-center">
                        <img className="img-fluid rounded" src='http://sgipolytechnic.in/Images/HOD_CSE2.jpg' />
                    </div>
                    <div className="col-12 text-center"><b>Mr. Chavan Sagar Vilasrao</b></div>
                    <div className="col-12 text-center"><b>Head of Department</b></div>
                </div>
                <p className="m-1 words">
                On behalf of department of Computer Technology, 
                I take opportunity to welcome you all to our department. 
                As per our vision our team strive to persistently improve educational environment in our department. 
                We are always engaged in the activities for overall development of our students with various aspects like technical education, self-motivation, ethics and personality.
                 As the field of Computer is ever-changing, we arrange various additional workshops, 
                seminars and expert lectures for our students and motivate them to pursue advanced graduate studies so that they can cope-up with challenging industrial context.
                </p>
            </div>
        </div>
        </div>
    </Main>
    );
}

export default HODDesk;
