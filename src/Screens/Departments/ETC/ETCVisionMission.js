import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";

const ETCVisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div class="row deptcont">
        <DeptMenu dept="E &amp; TC" subMenu={NavLinks} />
        <div class="col text-dark w-100">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  Achieve excellence in the field of Electronics &amp;
                  Telecommunication Engineering by imparting quality and value
                  based education to meet the demands of industry and society.
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <div class="list-group">
                  <span class="list-group-item list-group-item-action">
                    {" "}
                    To impart professional and technical skills to make students
                    employable
                  </span>
                  <span class="list-group-item list-group-item-action">
                    To inculcate ethical values to make responsible engineers
                    with concern for societal and environmental issues
                  </span>
                  <span class="list-group-item list-group-item-action">
                    To help students to identify and solve industry related
                    problems
                  </span>
                  <span class="list-group-item list-group-item-action">
                    To develop a spirit of lifelong learning for their personal
                    and career enhancement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ETCVisionMission;
