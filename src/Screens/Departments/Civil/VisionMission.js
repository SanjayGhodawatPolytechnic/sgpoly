import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Navlinks";
import "../Reusables/CSS/VisionMission.css";

const CivilVisionMission = () => {
  return (
    <Main className="container-lg vm">
      <div class="row">
        <DeptMenu dept="Civil" subMenu={NavLinks} />
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
                  Achieve excellence in Civil Engineering discipline that will
                  help students to contribute towards the growth of industry &
                  society with a concern for environment.
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <p>
                  <ul>
                    <li>
                      To impart domain specific knowledge, professional and
                      communication skills among students with the aid of
                      supportive facilities
                    </li>
                    <li>
                      To expose students to the recent trends and technologies
                      with industry collaboration.
                    </li>
                    <li>
                      To create awareness among civil engineering students about
                      environmental and societal concerns
                    </li>
                    <li>
                      To inculcate a spirit of life-long learning with ethical
                      bent of mind for better career enhancement
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

export default CivilVisionMission;
