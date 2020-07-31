import React from 'react';
import Main from '../../ReusableComponents/Main';

const ManageAchivements = () => {

    const LeftPanel = () => (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div class="card" style={{width: '18rem'}}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

    const RightPanel = () => (
        <div className="container">
            <form className="md-form">
                <div class="md-form">
                    <input type="text" id="form1" class="form-control" />
                    <label for="form1">Title</label>
                </div>
                <div class="md-form">
                    <input type="text" id="form2" class="form-control" />
                    <label for="form2">Description</label>
                </div>
                <div class="md-form">
                <select class="browser-default custom-select bg-transparent">
                    <option value="" disabled selected>Achived By</option>
                    <option value="college">College</option>
                    <option value="student">Student</option>
                </select>
                </div>
                
                <div className="md-form">
                    <select class="browser-default custom-select bg-transparent">
                        <option value="" disabled selected>Department</option>
                        <option value="CSE">Computer Science</option>
                        <option value="MECH">Mechanical</option>
                        <option value="ETC">Electronics</option>
                        <option value="CE">Civil</option>
                        <option value="EE">Electrical</option>
                    </select>
                </div>
                <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker">
                    <input placeholder="Select date" type="date" id="example" class="form-control" />
                    <label for="example">Achived on...</label>
                </div>
                
                <div class="md-form">
                <div class="file-field">
                    <div class="btn btn-outline-white waves-effect btn-sm float-left">
                        <span>Image<i class="fas fa-cloud-upload-alt ml-3" aria-hidden="true"></i></span>
                        <input type="file" className="purple-gradient" />
                    </div>
                </div>
                </div>
                <div class="md-form">
                <div class="file-field">
                    <div class="btn btn-outline-white waves-effect btn-sm float-left">
                        <span>File<i class="fas fa-cloud-upload-alt ml-3" aria-hidden="true"></i></span>
                        <input type="file" className="purple-gradient" />
                    </div>
                </div>
                </div>
                <div class="md-form">
                <button class="btn purple-gradient w-100">Upload Activity</button>
                </div>
            </form>
        </div>
    )
    return (
        <Main className="bg-dark text-light rounded">
            <div className="row">
                <div className="col-lg-6"><LeftPanel /></div>
                <div className="col-lg-6"><RightPanel /></div>
            </div>
        </Main>
    );
}

export default ManageAchivements;
