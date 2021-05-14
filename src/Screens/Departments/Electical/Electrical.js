import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/DeptHome.css";
const Electrical = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div class="row deptcont">
        <DeptMenu dept="Electrical" subMenu={NavLinks} />
        <div class="col text-dark w-100">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4 w-100"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-2"></div>
              <div className="col-lg-6">
                <img
                  alt="etc"
                  className="img-fluid rounded"
                  src="https://wallpaperplay.com/walls/full/e/3/c/28158.jpg"
                />
              </div>
            </div>
            <p className="m-1">
              The Department of Electrical Engineering was established during
              the year 2012 with an intake capacity of 60. The department has
              competent and committed faculties. The faculty members of
              Electrical Department are from industries and academics to enhance
              the delivery of academic programs in the department. The key
              strengths of the department are qualified staff, established labs,
              Integrity in work, motivation, systematic process approach,
              Liberal work environment, student and staff feedback system.{" "}
              <br />
              Electrical engineering is a professional engineering discipline
              that generally deals with the study and application of
              electricity, electronics. Today, electrical engineers are much in
              demand due to the rising demand for electrical power system, the
              growth of energy and automation in the industry. <br />
              The Department imparts training with the best of teaching
              expertise in fields of Electrical Power Systems, Electrical
              Machines, Electrical Measurement and Instrumentation, Testing and
              Maintenance of Electrical Equipments, Power Electronics, by
              excellent laboratory infrastructure and exposure to recent trends
              in the industry, to ensure that the students are molded into
              competent electrical engineers and worthy citizens of the country.{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Electrical;
