import React from 'react';
import Main from '../../../ReusableComponents/Main';
import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import '../Reusables/CSS/VisionMission.css'

const ETCVisionMission = () => {
    return (
        <Main className="container-lg vm">
            <div class="row">
        
        <DeptMenu dept='E &amp; TC' subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9 main-container text-dark">
            <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
            data-offset="0">
                <div class="rocket">
                    <div class="rocket-body">
                    <div class="body"></div>
                    <div class="fin fin-left"></div>
                    <div class="fin fin-right"></div>
                    <div class="window"></div>
                    </div>
                    <div class="exhaust-flame"></div>
                    <ul class="exhaust-fumes">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                    <ul class="star">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-12 text-center"><h3>Vision &amp; Mission</h3></div>
                    <div className="col-12 text-center">
                        <h4>Vision</h4>
                        <p>Achieve excellence in the field of Electronics &amp; Telecommunication Engineering by imparting quality and value based education to meet the demands of industry and society.</p>
                    </div>
                    <div className="col-12 text-center">
                        <h4>Mission</h4>
                        <div class="list-group">
                            <a class="list-group-item list-group-item-action list-group-item-primary">	To impart professional and technical skills to make students employable</a>
                            <a class="list-group-item list-group-item-action list-group-item-secondary">To inculcate ethical values to make responsible engineers with concern for societal and environmental issues</a>
                            <a class="list-group-item list-group-item-action list-group-item-success">To help students to identify and solve industry related problems</a>
                            <a class="list-group-item list-group-item-action list-group-item-danger">To develop a spirit of lifelong learning for their personal and career enhancement</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </Main>
    );
}

export default ETCVisionMission;
