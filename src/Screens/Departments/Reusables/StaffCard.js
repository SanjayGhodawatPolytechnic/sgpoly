import React from 'react';
import './CSS/StaffCard.css';

const StaffCard = ({
    name = '',
    designation = '',
    qualification = '',
    areaOfEpertise = '',
    imageURL = '',
    experience = '',
    emailId = '',
    resumeURL = ''
}) => {
    return (
        <div class="card-container m-2">
                <div className="row">
                    <div className="col-sm-4">
                        <img class="round" src={imageURL} alt="user" width="200" height="200" />
                    </div>
                    <div className="col-sm-8">
                    <h3>{name}</h3>
                    <h6>{designation}</h6>
                    <p><span class="pro">Qualification</span> {qualification}</p>
                    <p><span class="pro">Area of Expertise</span> {areaOfEpertise}</p>
                    <p><span class="pro">Experience</span> {experience}</p>
                    <p><span class="pro">Email ID</span> {emailId}</p>
                    <div class="buttons">
                        <a href={resumeURL} target="blank"><button class="primary ghost">
                            Profile
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default StaffCard;
