import React from "react";
import Main from "../../ReusableComponents/Main";

const AboutActivities = () => {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />

        <div className="card w-100 ">
          <div className="card-header text-center ">Activities</div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <a
                  href="http://www.sgipolytechnic.in/activities/Central/Institute_Activities.pdf"
                  target="blank"
                >
                  <button className="btn btn-info rounded-pill w-100 m-2">
                    AID THROUGH VISIT TO KUMAR VIDYA MANDIR (ZILHAPARISHAD
                    SCHOOL, HATKANANGLE) UNDER ISR CELL 28/08/2018
                  </button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <a
                  href="http://www.sgipolytechnic.in/activities/Central/Institute_Activities.pdf"
                  target="blank"
                >
                  <button className="btn btn-info rounded-pill w-100 m-2">
                    Institute Activities
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <br />
        <br />
      </div>
    </Main>
  );
};

export default AboutActivities;
