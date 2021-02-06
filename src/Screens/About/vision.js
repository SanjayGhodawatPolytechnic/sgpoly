import React from "react";
import Main from "../../ReusableComponents/Main";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/about.css";

function aboutVision() {
  return (
    <Main isSlideShow={true}>
      <div className="givmar">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="card ">
          <div className="card-header text-center ">Vision</div>
          <div className="card-body">
            <p className="card-text">
              Become a leader in providing quality and value based education in
              the field of Diploma Engineering that will produce competent
              technocrats to meet industry requirements with societal and
              environmental concern.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="card ">
          <div className="card-header text-center ">Mission</div>
          <div className="card-body">
            <p className="card-text">
              To impart technical knowledge and skills by using modern
              engineering tools with supportive facilities.
            </p>
            <p className="card-text">
              To facilitate industry-institute interaction to expose students to
              current industrial practices that will help them to solve
              industrial challenges.
            </p>
            <p className="card-text">
              To inculcate ethical and professional values among students that
              will make them socially and environmentally responsible
            </p>
            <p className="card-text">
              To motivate students towards lifelong learning and helping them to
              find right career opportunities.
            </p>
          </div>
          <br />
          <div className="card-footer text-muted">
            <h5 className="card-title">Objectives</h5>
            <p className="card-text">
              Impart technical knowledge and skills by using modern engineering
              tools
            </p>
            <p className="card-text">
              Facilitate industry-institute interaction
            </p>
            <p className="card-text">
              Inculcate ethical and professional values
            </p>
            <p className="card-text">
              Motivate students towards lifelong learning and helping them to
              find right career opportunities
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="card ">
          <div className="card-header text-center  ">Goal</div>
          <div className="card-body">
            <p className="card-text">
              To be one of the most progressive and innovative Knowledge cities.
            </p>
            <p className="card-text">
              Establish a knowledge city that will impart world class education
              in engineering, management and research.
            </p>
            <p className="card-text">
              Confer technical knowledge, in pace with the latest trends in the
              technology.
            </p>
            <p className="card-text">
              Application of these knowledge and skills for the common good of
              the society with an effort to keep India at the forefront of the
              technological map of the world.
            </p>
            <p className="card-text">
              Establish Engineering and Management Institute with state of the
              art infrastructure
            </p>
            <p className="card-text">
              Conduct sequential courses and training programs in collaboration
              with Industry.
            </p>
            <p className="card-text">
              Develop commercially viable technologies with social relevance.
            </p>
            <p className="card-text">
              Design programs exploring emerging frontiers.
            </p>
            <p className="card-text">
              Providing best of the facilities for studies in engineering,
              management and research.
            </p>
            <p className="card-text">
              Developing close collaboration with industry through exchange of
              personnel and undertaking consultancy projects.
            </p>
            <p className="card-text">
              Emphasis on International exchange with renowned overseas
              educational institutions.
            </p>
          </div>
        </div>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default aboutVision;
