import React from "react";

import "./Imp.css";

const Imp = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Mr. Sanjay Ghodawat</h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur nemo tempore repellat? Ullam sed officia iure
                architecto deserunt distinctio, pariatur…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Mr. Vinek Bhosale</h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                obcaecati ex natus nulla rem sequi laborum quod fugit…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Mr. Virat Giri</h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis beatae…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imp;
