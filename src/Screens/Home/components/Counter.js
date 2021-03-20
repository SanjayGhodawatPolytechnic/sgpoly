import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./Counter.css";
import PassedIcon from "./icons/PassedIcon";
import TeacherIcon from "./icons/TeacherIcon";
import ThisYear from "./icons/ThisYear";

const Counter = () => {
  return (
    <div className="fh5co-counters" data-stellar-background-ratio="0.5">
      {/* <div className="overlay"></div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="row">
              <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent">
                <span className="icon w-100 h-100">
                  <ThisYear />
                </span>
                <CountUp
                  className="fh5co-counter js-counter"
                  end={100}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        ref={countUpRef}
                        className="fh5co-counter js-counter"
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
                <span className="fh5co-counter-label">Students This Year</span>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent">
                <span className="icon w-100 h-100">
                  <PassedIcon />
                </span>
                <CountUp
                  className="fh5co-counter js-counter"
                  end={100}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        ref={countUpRef}
                        className="fh5co-counter js-counter"
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
                <span className="fh5co-counter-label">Passed Students</span>
              </div>
              <div className="col-md-3 col-sm-6 text-center animate-box bg-transparent">
                <span className="icon w-100 h-100">
                  <TeacherIcon />
                </span>
                <CountUp
                  className="fh5co-counter js-counter"
                  end={100}
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        ref={countUpRef}
                        className="fh5co-counter js-counter"
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
                <span className="fh5co-counter-label">Certified Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
