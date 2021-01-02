import React from 'react';
import "./Updates.css"
const Updates = () => {
    return (
        <div>
            {/* <div id="Artboard__1">
                <svg class="Rectangle_12">
                    <rect id="Rectangle_12" rx="45" ry="45" x="0" y="0" width="847" height="451">
                    </rect>
                </svg>
                <img id="vacation" src="./vacation.png" srcset="./vacation.png 1x, ./vacation@2x.png 2x" />
                <div id="Lorem_Ipsum_Title">
                    <span>Lorem Ipsum Title</span>
                </div>
                <div id="College_is_arranging_a_trip_to">
                    <span>College is arranging a trip to Goa. So, those students who are interested can register their name to their respective departments.</span>
                </div>
                <div id="POSTED_ON_1-1-2021">
                    <span>POSTED ON: </span><span>1-1-2021</span>
                </div>
                <svg class="Rectangle_13">
                    <rect id="Rectangle_13" rx="0" ry="0" x="0" y="0" width="232" height="77">
                    </rect>
                </svg>
                <div id="KNOW_MORE">
                    <span>KNOW MORE</span>
                </div>
            </div> */}
            <div className="update-card">
                <div className="img-cont">
                    <img className="update-img" src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/images%2F32085ed0-fe21-4303-b02f-645d32a9e30c?alt=media&token=185cdd54-293f-44fc-8c53-2ca7a3a32a6d" />
                </div>
                <div className="card-content">
                    <div className="card-content-title">
                        <span>Lorem Ipsum Title</span>
                    </div>
                    <div className="card-content-desc">
                        <span>College is arranging a trip to Goa. So, those students who are interested can register their name to their respective departments.</span>
                    </div>
                    <div className="POSTED_ON">
                        <span>POSTED ON: </span><span>1-1-2021</span>
                    </div>
                    <div className="KNOW_MORE">
                        <span>KNOW MORE</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Updates;
