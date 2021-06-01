import React from "react";
import Main from "../../../ReusableComponents/Main";

import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/HOD.css";

const FyHODDesk = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="First year" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col text-center">
                <img
                  alt="etc hod"
                  className="img-fluid rounded"
                  src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/srcimg%2FPic%2Floginhead.jpg?alt=media&token=0cbc50b1-c300-4787-a293-3644f91dea58"
                />
              </div>
              <div className="col-12 text-center">
                <b>Mr. Patil Nitin Surgonda</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
            </div>
            <p className="m-1 words">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, laudantium hic molestias consequatur placeat
              repellendus?
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default FyHODDesk;
