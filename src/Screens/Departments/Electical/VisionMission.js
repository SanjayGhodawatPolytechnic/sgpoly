import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";

const ElectricalVisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div class="row deptcont">
        <DeptMenu dept="Electrical" subMenu={NavLinks} />
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
                  Achieve excellence in field of Electrical Engineering by
                  providing quality and value based education that will meet the
                  ever changing challenges of the industry and society.
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <div class="list-group">
                  <span class="list-group-item list-group-item-action">
                    {" "}
                    To impart necessary technical and professional skills of the
                    discipline among the students that will make them industry
                    ready
                  </span>
                  <span class="list-group-item list-group-item-action">
                    To create awareness among students for societal and
                    environmental concerns
                  </span>
                  <span class="list-group-item list-group-item-action">
                    To establish effective institute-industry interaction
                  </span>
                  <span class="list-group-item list-group-item-action">
                    To inculcate the spirit of lifelong learning among students
                    for career enhancement
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

export default ElectricalVisionMission;
