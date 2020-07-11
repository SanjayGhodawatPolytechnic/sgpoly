import React from 'react';
import Main from '../../ReusableComponents/Main';

function home() {
    return (
      <div>
        <Main isSlideShow={true}>
          <h2 class="text-monospace">Top 10 Clicks By Students</h2>

          {/*Carousel Wrapper*/}
          <div
            id="carousel-example-2"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            {/*Indicators*/}
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-2"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carousel-example-2" data-slide-to={1} />
              <li data-target="#carousel-example-2" data-slide-to={2} />
              <li data-target="#carousel-example-2" data-slide-to={3} />
              <li data-target="#carousel-example-2" data-slide-to={4} />
              <li data-target="#carousel-example-2" data-slide-to={5} />
              <li data-target="#carousel-example-2" data-slide-to={6} />
              <li data-target="#carousel-example-2" data-slide-to={7} />
            </ol>
            {/*/.Indicators*/}
            {/*Slides*/}
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"
                  />
                  <div className="mask rgba-black-light" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Light mask</h3>
                  <p>First text</p>
                </div>
              </div>
              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>chintan</p>
                </div>
              </div>
              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>chintan1</p>
                </div>
              </div>
              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>chintan2</p>
                </div>
              </div>
              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>chintan3</p>
                </div>
              </div>
              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>chintan4</p>
                </div>
              </div>

              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>Secondary text</p>
                </div>
              </div>

              <div className="carousel-item">
                {/*Mask color*/}
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Third slide"
                  />
                  <div className="mask rgba-black-slight" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Slight mask</h3>
                  <p>Third text</p>
                </div>
              </div>
            </div>
            {/*/.Slides*/}
            {/*Controls*/}
            <a
              className="carousel-control-prev"
              href="#carousel-example-2"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-example-2"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            {/*/.Controls*/}
          </div>
          {/*/.Carousel Wrapper*/}
          <br />
          <br />
          <br /><br/><br/>

          <h4 class="text-monospace">Clicks By Students</h4>
         
          

          {/*Carousel Wrapper*/}
          <div
            id="carousel-with-lb"
            className="carousel slide carousel-multi-item"
            data-ride="carousel"
          >
            <center>
              <div class="controls-top">
                <a
                  class=" btn btn-floating btn-secondary"
                  href="#carousel-with-lb"
                  data-slide="prev"
                >
                  <i class="fas fa-chevron-left"></i>
                </a>
                <a
                  class="btn btn-floating btn-secondary"
                  href="#carousel-with-lb"
                  data-slide="next"
                >
                  <i class="fas fa-chevron-right"></i>
                </a>
              </div>
            </center>

            {/*Slides and lightbox*/}
            <div className="carousel-inner mdb-lightbox" role="listbox">
              <div id="mdb-lightbox-ui" />
              {/*First slide*/}
              <div className=" carousel-item active text-center">
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
              {/*/.First slide*/}
              {/*Second slide*/}
              <div className="carousel-item text-center">
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
              {/*/.Second slide*/}
              {/*Third slide*/}
              <div className="carousel-item text-center">
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
                <figure className="col-md-4 d-md-inline-block">
                  <a
                    href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
                    data-size="1600x1067"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
              {/*/.Third slide*/}
            </div>
            {/*/.Slides*/}
          </div>
          {/*/.Carousel Wrapper*/}
        </Main>
      </div>
    );
}

export default home;