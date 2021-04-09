import React from "react";
import "./vidcarousel.css";
const VidCarousel = () => {
  return (
    <div>
      {/* Top content */}
      <div className="top-content">
        <div className="container">
          {/* Title and description row */}
          <div className="row">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h3 className="about-title">About SGP</h3>
              <div className="about-line" />
            </div>
          </div>
          {/* End title and description row */}
          {/* Carousel row */}
          <div className="row">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              {/* Carousel */}
              <div id="carousel-example" className="carousel slide">
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carousel-example" data-slide-to={1} />
                  <li data-target="#carousel-example" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/6hgVihWjK2c?rel=0"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src="https://player.vimeo.com/video/84910153?title=0&byline=0&portrait=0&badge=0&color=ffffff"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/oiKj0Z_Xnjc"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carousel-example"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-example"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* End carousel */}
            </div>
          </div>
          {/* End carousel row */}
        </div>
      </div>
    </div>
  );
};

export default VidCarousel;
