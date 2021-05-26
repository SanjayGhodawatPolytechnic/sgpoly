import React from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/VisionMission.css";

const VisionMission = () => {
  return (
    <Main className="container-lg cse w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Computer Science" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -MSBTE</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  To ensure that the Diploma level Technical Education
                  constantly matches the latest requirements of Technology and
                  industry and includes the all-round personal development of
                  students including social concerns and to become globally
                  competitive, technology led organization.
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <p>
                  To provide high quality technical and managerial manpower,
                  information and consultancy services to the industry and
                  community to enable the industry and community to face the
                  challenging technological &amp; environmental changes.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -CSE Department</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  Achieve excellence in Computer Science &amp; Engineering by
                  providing quality education and produce competent technocrats
                  who will meet ever changing industrial and social needs
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    To impart necessary technical and professional skills among
                    students to make them employable
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To produce competent technocrats to meet industrial
                    challenges with societal and environmental concerns
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To establish effective institute-industry interaction
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To motivate students for lifelong learning that will enable
                    them to choose better career opportunities
                  </span>
                </div>
              </div>
              <div className="col-12 text-center">
                <h5>Mission Objectives</h5>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    M-1 : Make Students industry ready by imparting necessary
                    technical and professional skills
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-2 : Create awareness among students for societal and
                    environmental concerns
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-3 : Establish institute-industry interaction
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-4 : Inculcate the spirit of lifelong learning among
                    students for career enhancement
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>Vision &amp; Mission -SGP</h3>
              </div>
              <div className="col-12 text-center">
                <h4>Vision</h4>
                <p>
                  Become a leader in providing quality and value based education
                  in the field of Diploma Engineering that will produce
                  competent technocrats to meet industry requirements with
                  societal and environmental concern.
                </p>
              </div>
              <div className="col-12 text-center">
                <h4>Mission</h4>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    To impart technical knowledge and skills by using modern
                    engineering tools with supportive facilities.
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To facilitate industry-institute interaction to expose
                    students to current industrial practices that will help them
                    to solve industrial challenges.
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To inculcate ethical and professional values among students
                    that will make them socially and environmentally
                    responsible.
                  </span>
                  <span className="list-group-item list-group-item-action">
                    To motivate students towards lifelong learning and helping
                    them to find right career opportunities.
                  </span>
                </div>
              </div>
              <div className="col-12 text-center">
                <h5>Mission Objectives</h5>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action">
                    M-1 : Impart technical knowledge and skills by using modern
                    engineering tools
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-2 : Facilitate industry-institute interaction
                  </span>
                  <span className="list-group-item list-group-item-action">
                    {" "}
                    M-3 : Inculcate ethical and professional values
                  </span>
                  <span className="list-group-item list-group-item-action">
                    M-4 : Motivate students towards lifelong learning and
                    helping them to find right career opportunities.
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

export default VisionMission;
