import React from 'react';
import Main from '../../../ReusableComponents/Main';

import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import '../Reusables/CSS/HOD.css';


const ETCHODDesk = () => {
    return (
        <Main className="container-lg hod">
        <div class="row">
        
        <DeptMenu dept='Computer Science' subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9 text-light">
            <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
            data-offset="0">
                <div className="row">
                    <div className="col text-center">
                        <img className="img-fluid rounded" src='http://sgipolytechnic.in/Images/HOD_ETC.jpg' />
                    </div>
                    <div className="col-12 text-center"><b>Mr. Dhongadi Ravindra Purushottam</b></div>
                    <div className="col-12 text-center"><b>Head of Department</b></div>
                </div>
                <p className="m-1 words">
                
The E &amp; TC department provides indepth knowledge to the students about basic principles of Electronics, Communication systems, electronic gadgets, circuits, programming of Microcontroller, Digital System Design etc. and enables students to choose the correct path for their career. The department also encourages research in the field of Electonics &amp; communication.
The department admires technology development through innovations and its exploitation for the benefit of human kind. Department offers quality education through use of modern reaching aids technique and to undertake research in engineering and technology.
Students are also encouraged to undergo supervised practical training in different industries so as to get hand on experience and become employable technocrats.
                </p>
            </div>
        </div>
        </div>
    </Main>
    );
}

export default ETCHODDesk;
