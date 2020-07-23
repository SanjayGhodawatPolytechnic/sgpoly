import React from 'react';
import Main from '../../../ReusableComponents/Main';
import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import './CSS/ComputerScience.css'
const ComputerScience = () => {

    
    return (
        <Main className="container-lg cse">
            <div class="row">
            
            <DeptMenu dept='Computer Science' subMenu={NavLinks} />
            <div class="col-sm-8 col-lg-9 text-light">
                <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
                data-offset="0">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded" src='https://wallpaperplay.com/walls/full/e/3/c/28158.jpg' />
                        </div>
                    </div>
                    <p className="m-1">
                        The Computer Science and Engineering (CSE) program was started in the year 2012. 
                        The main focus of the department is to deliver the professionals with strong fundamentals in Computer Science and Engineering domain. 
                        The department has well qualified and experienced teaching faculty members with various specializations. 
                        The department has maintained a student staff ratio of 15:1,
                         has excellent infrastructure with state of the art equipment and software tools. 
                         Department regularly organizes a series of lectures by experts &amp; professional of good repute, 
                         helping the students to be aware of the Global Scenario.</p>
                         <div className="row">
                             <div className="col-4"></div>
                             <div className="col-4"><h4>Check Us out on..</h4></div>
                         </div>
                         <div className="row">
                             <div className="col-4"></div>
                             <div className="col-4">
                                 <a href='http://www.dtemaharashtra.gov.in/StaticPages/frmSearchInstitute.aspx' target="blank" className='btn btn-danger rounded-pill w-100'>DTE</a>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-4"></div>
                             <div className="col-4">
                                 <a href='https://www.facilities.aicte-india.org/dashboard/pages/dashboardaicte.php' target="blank" className='btn btn-danger rounded-pill w-100'>AICTE</a>
                             </div>
                         </div>
                </div>
            </div>
            </div>
        </Main>
    );
}

export default ComputerScience;
