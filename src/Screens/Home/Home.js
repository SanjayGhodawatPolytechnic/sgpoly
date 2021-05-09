import React from "react";
import Main from "../../ReusableComponents/Main";
import "./Home.css";
import CSELogo from "./icons/CSE";
import MechLogo from "./icons/Mech";
import CivilLogo from "./icons/Civil";
import ENTCLogo from "./icons/ENTC";
import ElectLogo from "./icons/Elect";
import "./CSS/DeptCard.css";
import Counter from "./components/Counter";
import Recents from "./components/Recents";
import Carousel from "./components/Carousel";
import Imp from "./components/Imp";
import Testimo from "./components/Testimo";
import VidCarousel from "./components/vidcarousel";
import Lottie from "react-lottie";
import lottiedata from "./components/lf30_editor_m4oownfl.json";
import { useState } from "react";
import GetNews from "./components/News";
import Newsletter from "./components/newsletter";

function Home() {
  const [loadingData, setLoadingData] = useState(0);
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [isRecentsLoading, setIsRecentsLoading] = useState(false);
  const [isCounterLoading, setIsCounterLoading] = useState(false);

  return (
    <Main isSlideShow={true}>
      {isCarouselLoading && isRecentsLoading && isCounterLoading && (
        <Lottie
          height="100%"
          width="100%"
          options={{
            autoplay: true,
            loop: true,
            animationData: lottiedata,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          isClickToPauseDisabled={true}
        />
      )}
      {!isCarouselLoading && !isRecentsLoading && !isCounterLoading && (
        <>
          <Carousel setIsCarouselLoading={setIsCarouselLoading} />

          <Recents setIsRecentsLoading={setIsRecentsLoading} />
          <GetNews />
          <Counter setIsCounterLoading={setIsCounterLoading} />
        </>
      )}

      <Imp />
      <div className="text-center p-5 w-100 mb-3" id="skew4">
        {/* <h1 className="text-dark" style={{ fontSize: 40 }}>
          COURSES
        </h1> */}
        <div className="training-title">
          <h4 className="course-title">COURSES</h4>
          <div className="courses-line" />
        </div>

        <div className="row w-100 text-center d-flex justify-content-center cardsss">
          <div className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2 rounded">
            <div className="rounded py-5 px-4 bg-transparent">
              <CSELogo className="mb-3 cse-logo" width="100px" />
              <h5 className="mb-0">Computer Science</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 mech-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <MechLogo
                className="mb-3 mech-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0">Mechanical</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 civil-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <CivilLogo
                className="mb-3 civil-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0">Civil</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 etc-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ENTCLogo className="mb-3 etc-logo" width="100px" height="80px" />
              <h5 className="mb-0">E &amp; TC</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 ele-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ElectLogo
                className="mb-3 ele-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0">Electrical</h5>
            </div>
          </div>
        </div>
      </div>

      <VidCarousel />

      <Testimo />
      <Newsletter />
    </Main>
  );
}

export default Home;
