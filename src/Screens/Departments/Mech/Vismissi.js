import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Nav";
import "../Reusables/CSS/VisionMission.css";

const MechanicalVisionMission = () => {
  return (
    <Main className="container-lg vm">
      <div class="row">
        <DeptMenu dept="Mechanical" subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9 main-container text-dark">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
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
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -MSBTE</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  Achieve excellence in Mechanical Engineering by imparting
                  technical & professional skills along with ethical values to
                  meet industrial requirements having societal and environmental
                  concern
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <p>
                  <ul>
                    <li>
                      To offer quality education with supportive facilities to
                      produce technically proficient engineers through
                      industry-institute interaction
                    </li>
                    <li>
                      To motivate students for lifelong learning and guide them
                      to choose better career opportunities
                    </li>
                    <li>
                      To inculcate ethical & professional values among students
                      with societal and environmental concern.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MechanicalVisionMission;
