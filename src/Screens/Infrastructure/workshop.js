import React from "react";
import Main from "../../ReusableComponents/Main";

function workshop() {
  return (
    <Main isSlideShow={true}>
      <div>
        <div className="card m-4 d-flex" style={{ borderRadius: 10 }}>
          <div className="row">
            <div className="col container">
              <img
                src={
                  "http://www.sgipolytechnic.in/infrastructure/workshop1.jpg"
                }
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col container">
              <div className="card-body">
                <h5 className="card-title">
                  Workshop has following sections:-
                </h5>
                <p className="card-text">
                  <li>Carpentry, Tin Smithy, Black smithy</li>
                  <li>Welding Foundry Stores</li>
                  <li>Plastic injection moulding</li>
                  <li>Machine shop - Lathe, General purpose</li>
                </p>

                <p className="card-text">
                  Workshop is equipped with all latest machinery
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </Main>
  );
}

export default workshop;
