import React from 'react';
import Main from '../../../ReusableComponents/Main';
import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import '../Reusables/CSS/DeptHome.css'
const ElectronicsNTC = () => {

    
    return (
        <Main className="container-lg cse">
            <div class="row">
            
            <DeptMenu dept='E &amp; TC' subMenu={NavLinks} />
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
                    Greetings!!. The department E&amp;TC is established in the year 2012 with the intake of 60 students and currently it is having 100+ undergraduates' students admitted.The department is having highly qualified; devoted & dedicated staff. The department is having well equipped laboratories and facilities for supporting our teaching.The department aims at inculcating quality education to bring engineers with a solid foundation in basic engineering principles and concepts.We strive to prepare our students to become technically competent engineers who will continue learning in an ever-changing and diverse world.

As the engineering field is extremely demanding, future engineering students must be able to adapt to a new dynamic environment and react positively to new challenges and opportunities. Students are taught to be independent thinkers, create independent types of work, write technical reports and present their work before classmates and faculty members.

Workshops &amp; seminars are regularly takento bridge the gap between curriculum &amp; industries.</p>
                         <div className="row">
                             <div className="col-4"></div>
                             <div className="col-4"><h4>Check Us out on..</h4></div>
                         </div>
                         <div className="row">
                             <div className="col-6">
                                 <a href='http://www.dtemaharashtra.gov.in/StaticPages/frmSearchInstitute.aspx' target="blank" className='btn btn-danger rounded-pill w-100'>DTE</a>
                             </div>
                             <div className="col-6">
                                 <a href='https://www.facilities.aicte-india.org/dashboard/pages/dashboardaicte.php' target="blank" className='btn btn-danger rounded-pill w-100'>AICTE</a>
                             </div>
                         </div>
                         <div className="row">
                             
                             
                         </div>
                </div>
            </div>
            </div>
        </Main>
    );
}

export default ElectronicsNTC;
