import React, { useState } from 'react';
import Main from '../../ReusableComponents/Main';
var _ = require('lodash');

const ManageActivities = () => {

    const [newData, setNewData] = useState({
        title: '',
        description: '',
        category: '',
        dept: '',
        date: '',
        isFiles: true,
        duration: '',
        type: '',
        file: File,
        images: []
    })
    const [inputCount,setInputCount] = useState({
        count:1
    })

    const RightPanel = () => (
        <div className="container">
            <form className="md-form" name="form">
                
                <div className="md-form">
                    <input 
                    type="text" 
                    id="form1" 
                    className="form-control"
                    value={newData.title}
                    required
                    onChange={(e) => {
                        
                    setNewData({...newData, title: e.target.value})}} />
                    <label for="form1">Title</label>
                </div>
                <div className="md-form">
                    <input 
                    type="text" 
                    id="form2" 
                    className="form-control" 
                    required
                    value={newData.description}
                    onChange={(e) => setNewData({...newData, description: e.target.value})} />
                    <label for="form2">Description</label>
                </div>
                <div className="md-form">
                    <input 
                    type="text" 
                    id="duration" 
                    className="form-control" 
                    required
                    value={newData.description}
                    onChange={(e) => setNewData({...newData, description: e.target.value})} />
                    <label for="duration">Duration</label>
                </div>
                <div className="md-form">
                <select 
                className="browser-default custom-select bg-transparent" 
                required
                value={newData.category}                
                onChange={(e) => setNewData({...newData, category:e.target.options[e.target.selectedIndex].value})}>
                    <option value="" disabled selected>Event For..</option>
                    <option value="college">College</option>
                    <option value="student">Student</option>
                </select>
                </div>
                
                <div className="md-form">
                    <select required className="browser-default custom-select bg-transparent" onChange={(e) => setNewData({...newData, dept:e.target.options[e.target.selectedIndex].value})}>
                        <option value="" disabled selected>Department</option>
                        <option value="CSE">Computer Science</option>
                        <option value="MECH">Mechanical</option>
                        <option value="ETC">Electronics</option>
                        <option value="CE">Civil</option>
                        <option value="EE">Electrical</option>
                    </select>
                </div>
                <div className="md-form">
                    <select required className="browser-default custom-select bg-transparent" onChange={(e) => setNewData({...newData, type:e.target.options[e.target.selectedIndex].value})}>
                        <option value="" disabled selected>Type</option>
                        <option value="visit">Visit</option>
                        <option value="workshop">workshop</option>
                        <option value="guest lecture">Guest Lecture</option>
                        <option value="webinar">Webinar</option>
                        <option value="teachers training">Teachers Training</option>
                    </select>
                </div>
                <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker">
                    <input required placeholder="Select date" type="date" id="example" className="form-control" onChange={(e) => setNewData({...newData, dateAchived: e.target.value})} />
                    <label for="example">Date of Activity...</label>
                </div>

                <div className="md-form">
                <div className="custom-control custom-checkbox ml-5">
                    <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    id="defaultChecked2"
                    checked={newData.isFiles}
                    onChange={e => {
                        setNewData({...newData, isFiles: e.target.checked})
                    }}
                     />
                    <label className="custom-control-label" for="defaultChecked2">Include Files</label>
                </div>
                </div>
                
                
                {newData.isFiles && (
                    <div>
                    <div className="md-form box border border-light">
                    <div className="file-field">
                        <div className="row m-2">
                            <span className="text-muted m-2">Input File:</span>
                            <input required type="file" id="imagepick" className="purple-gradient" onChange={(e) => setNewData({...newData, image: e.target.files[0]})} />
                        </div>
                    </div>
                    </div>
                    <div className="md-form box border border-light">
                        <div className="row">
                            <div className="col-10"></div>
                            <div className="col-2 text-light" onClick={e => {
                                    e.preventDefault()
                                    let list = newData.images
                                    if(newData.images.length > 0 && newData.images.length === inputCount.count) {
                                        list.splice(newData.images.length - 1, 1);
                                    }
                                    
                                    setInputCount({...inputCount, count: inputCount.count - 1})
                                    setNewData({...newData, images: list})
                                    console.log(newData.images)
                                }}>
                                    <i class="fas fa-minus-circle"></i>
                                </div>
                        </div>
                        {_.times(inputCount.count, (i) => (
                            <div className="file-field" key={i}>
                            <div className="row m-2">
                                <div className="col-11">
                                <span className="text-muted m-2">Input Image {}:</span>
                                <input 
                                required 
                                type="file" 
                                id="filepick" 
                                className="purple-gradient" 
                                onChange={(e) => {
                                    let list = newData.images
                                    list[i] = e.target.files[0]
                                    setNewData({...newData, images: list})
                                    console.log(newData.images)
                                }} 
                                />
                                </div>
                            </div>
                        </div>
                        ))}
                    
                    <div className="col">
                        <button className="btn aqua-gradient w-100" onClick={e => {
                            e.preventDefault()
                            setInputCount({...inputCount, count: inputCount.count + 1})
                        }}><i class="fas fa-plus-circle"></i></button>
                    </div>
                    </div>
                    </div>
                )}
                
                <div className="md-form">
                <button className="btn purple-gradient w-100">Upload Activity</button>
                </div>
            </form>
        </div>
    )

    const LeftPanel = () => (
        <div className="container">
            HELLO, this is left panel
        </div>
    )
    return (
        <Main className="bg-dark">
            <div className="row">
                <div className="col-6"><LeftPanel /></div>
                <div className="col-6">{RightPanel()}</div>
            </div>
        </Main>
    );
}

export default ManageActivities;
