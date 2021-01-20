import React from "react";
import "./CSS/Menu.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small  pt-4 aaa">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">
                Sanjay Ghodawat Polytechnic
              </h5>
              <p>
                In the world where it is commonplace to see mediocrity as the
                order of the day, SGI always stands as the guiding star of
                brilliance, quality and deliverance beyond expectations.
              </p>
              <Link to="/suggest">
                <button className="btn btn-light">Any Suggestion</button>
              </Link>
              {/*<p>Innovativeness and Creativity are the hallmarks of a genius enterprise and SGI stands to be a stage where these qualities would be nurtured, encouraged and blossomed.</p>*/}
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <span href="#!" >
                      <p className="txt-color">SGP</p>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span href="#!" >
                      <p className="txt-color">Staff</p>
                      
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span href="#!" >
                      <p className="txt-color">Facilities</p> 
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span href="#!" >
                      <p className="txt-color">AWARDS</p>
                      
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-home mr-3" /> Atigre, 416118, Maharatra
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope mr-3" />{" "}
                    principal@sgipolytechnic.in
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone mr-3 txt-color" /> 0230 - 2463800
                  </p>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 text-center mx-auto my-4 txt-color">
              <h5 className="font-weight-bold text-uppercase mb-4">
                Follow Us
              </h5>
              <span className="btn-floating btn-fb">
                <i className="fab fa-facebook-f" />
              </span>

              <br />
              <br />
              <span className="btn-floating btn-tw">
                <i className="fab fa-twitter" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <h4>Sanjay Godawat Polytechnic</h4>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
