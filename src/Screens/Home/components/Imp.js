import React from "react";
import { Link } from "react-router-dom";

import "./Imp.css";
// src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
// src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
// src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
const Imp = () => {
  return (
    <div id="skew3" className="cus-div imp-section">
      <div className="courses-title">
        <h4 className=" imp-title">Board Members</h4>
        <div className="courses-line imp-line" />
      </div>
      <div className="content-wrapper">
        <div className="news-card">
          <img
            src="http://www.sgipolytechnic.in/pics/Chairman2.jpg"
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Mr. Sanjay Ghodawat</h2>
            <div className="news-card__post-date">Chaiman</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Education is making students aware of the infinite potential
                within and bringing it up so that the result is transformation
                of personalities.
              </p>
              <Link to="/management/chairman" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img
            src="http://www.sgipolytechnic.in/pics/Trustee.jpg"
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Mr. Vinayak Bhosale</h2>
            <div className="news-card__post-date">Trustee</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                If you treat an individual as he is, he will remain how he is.
                But if you treat him as if he were what he ought to be and could
                be, he will become what he ought to be and could be.
              </p>
              <Link to="/management/trustee" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img
            src="http://www.sgipolytechnic.in/pics/Principal.jpg"
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Mr. Virat Giri</h2>
            <div className="news-card__post-date">Principal</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                All the flowers of all the tomorrows are in the in seeds of
                today.
              </p>
              <Link to="/management/principal" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imp;
