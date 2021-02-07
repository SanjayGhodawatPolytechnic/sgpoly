
import React from 'react';
import Main from '../../../ReusableComponents/Main';
import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import '../Reusables/CSS/DeptHome.css'
const Mechanical = () => {

    
    return (
        <Main className="container-lg cse">
            <div class="row">
            
            <DeptMenu dept='Mechanical' subMenu={NavLinks} />
            <div class="col-sm-8 col-lg-9 text-light">
                <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
                data-offset="0">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-lg-6">
                            <img alt="etc" className="img-fluid rounded" src='https://wallpaperplay.com/walls/full/e/3/c/28158.jpg' />
                        </div>
                    </div>
                    <p className="m-1">
                    Mechanical engineering is one of the basic engineering branches. It deals with design and development of all kinds of machines. Through innovation and inventions, it has given humanity at large comfort and safety for life. At SGI, we have state of the art infrastructure and laboratories with total investment in equipments of more than one crore. Taking into consideration the requirements of industry and research organization we have developed all our labs. We have always tried to be globally competitive in all round development of our department.

Today we can boast of most talented bunch of students and professors being developed in our department. We are thus contributing in making the future of India bright by providing talented and skillful Engineers trained in our Polytechnic.
                    </p>
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

export default Mechanical;
