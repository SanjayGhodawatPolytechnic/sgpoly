import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Navlinks";

const Civil = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div class="row deptcont">
        <DeptMenu dept="Civil" subMenu={NavLinks} />
        <div class="col text-dark w-100">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-2"></div>
              <div className="col-lg-6">
                <img
                  alt="cse"
                  className="img-fluid rounded"
                  src="https://wallpaperplay.com/walls/full/e/3/c/28158.jpg"
                />
              </div>
            </div>
            <p className="m-1">
              Civil Engineering is a professional engineering discipline that
              deals with the design, construction, and maintenance of the
              physical and naturally built environment, including works like
              roads, bridges, canals, dams, and buildings. Civil engineering is
              the second-oldest engineering discipline after military
              engineering, and it is defined to distinguish non-military
              engineering from military engineering It is traditionally broken
              into several sub-disciplines including architectural engineering,
              environmental engineering, geotechnical engineering, control
              engineering, structural engineering, earthquake engineering,
              transportation engineering, forensic engineering, municipal or
              urban engineering, water resources engineering, materials
              engineering, wastewater engineering, offshore engineering,
              aerospace engineering, facade engineering, quantity surveying,
              coastal engineering, construction surveying, and construction
              engineering. Civil Engineering takes place in the public sector
              from municipal through to national governments, and in the private
              sector from individual homeowners through to international
              companies..
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Civil;
