import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Nav";

const MechanicalOutcomes = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div class="row deptcont">
        <DeptMenu dept="Mechanical" subMenu={NavLinks} />
        <div class="col text-dark w-100">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-12 text-center">
                <h3>Program Educational Objectives (PEOs)</h3>
              </div>
              <div className="col-12 text-center">
                <div class="list-group">
                  <span class="list-group-item list-group-item-action">
                    Engineer will apply basic and disciplinary knowledge to
                    develop products and processes to meet societal needs.
                  </span>
                  <span class="list-group-item list-group-item-action">
                    Engineer will be competent enough to work in
                    multi-disciplinarycontext with concern towards the
                    environment.
                  </span>
                  <span class="list-group-item list-group-item-action">
                    Engineer will exhibit effective communication skills, a
                    strong team spirit and inclination towards lifelong learning
                    with ethical bent of mind.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>Program Outcome (POs)</h3>
              </div>
              <div className="col-12 text-center">
                <div class="list-group">
                  <span class="list-group-item list-group-item-action">
                    <b>Basic Knowledge :</b> The student will be able to apply
                    the fundamentals of mathematics, science and engineering to
                    come up with solutions for engineering problems encountered.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Discipline knowledge :</b> The student will be able to
                    bring up his/her discipline knowledge and apply the same to
                    solve core or applied engineering problems.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Experiments and practice :</b> The student will gain the
                    insight to perform experiments and also practically apply
                    the solutions to problems encountered in engineering context
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Engineering tools :</b> The student will be able to apply
                    the learned engineering tools and technologies to the real
                    situational problems and at the same time be aware of the
                    limitations of their uses.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>The engineer and society :</b> The student will be
                    competent enough to asses different issues like societal,
                    health, safety, legal and cultural, have an insight into the
                    challenges and use his learning to come up with solutions
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Environment and sustainability :</b> The student will
                    have an understanding of the impact of engineering solutions
                    in environmental and societal context and strive for
                    sustainable development.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Ethics :</b> The student will practice engineering
                    profession with an ethical bent of mind and thus be a
                    responsible engineer in the society.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Individual and team work :</b> The student will be able
                    to work effectively either individually or as a team member
                    / leader among multidisciplinary teams.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Communication :</b> The student will have effective oral
                    and written communication skills.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    <b>Life-long learning :</b> The student will have an
                    inclination towards life- long learning and engage
                    independently in such life-long learning activities thus
                    keeping himself / herself update with the current practices
                    of technology.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>Program Specific Outcomes (PSOs)</h3>
              </div>
              <div className="col-12 text-center">
                <div class="list-group ">
                  <span class="list-group-item list-group-item-action ">
                    Engineer will be able to use industrial engineering tools
                    along with management principles to manufacture quality
                    components and systems.
                  </span>
                  <span class="list-group-item list-group-item-action ">
                    Engineer will be able to apply the knowledge of thermal and
                    fluid sciences to evaluate related systems.
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

export default MechanicalOutcomes;
