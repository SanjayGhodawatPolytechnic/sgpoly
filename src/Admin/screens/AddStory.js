import React, { useState } from 'react';
import Main from '../../ReusableComponents/Main';
import { Link } from 'react-router-dom';
import './CSS/AddStaffMember.css'
var _ = require('lodash');

const AddStory = () => {

    const [inputCount,setInputCount] = useState(1)

    // const [openedBoxes,setOpenedBoxes] = useState([])

    var openedBoxes = []

    const InputStory = () => {
        return _.times(inputCount, (i) => {
            let temp = openedBoxes
            _.times(inputCount,(idx) => {
                temp.push(false)
            })
            openedBoxes = temp
            return(
            <div class="form-group">
            <div class="row">            
                <div className="col-lg-12 m-2">
                    <button 
                    class="btn btn-primary w-100" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target={`#multiCollapseExample${i}`} 
                    aria-expanded="false" 
                    aria-controls={`multiCollapseExample${i}`}
                    onClick={e => {
                        e.preventDefault()
                        let list = openedBoxes
                        if(list[i]){
                            list[i] = false
                        }else{
                            list[i] = true
                        }

                        openedBoxes = list
                    }}
                    >Story Item {i + 1} {openedBoxes[i] ? (<i class="fas fa-arrow-down"></i>) : (<i class="fas fa-arrow-up"></i>)}</button>
                </div>
            <div class="col-lg-12 collapse multi-collapse m-2" id={`multiCollapseExample${i}`}>                                                        
                    <div class="col-lg-12"><input type="text" class="form-control" name="full_name" placeholder="Enter Heading" required="required" /></div>                                                
                    <div class="col-lg-12"><input type="text" class="form-control" name="full_name" placeholder="Enter Sub Heading" required="required" /></div>                                                
                    <div class="col-lg-12"><input type="text" class="form-control" name="full_name" placeholder="Type EG: video or image" required="required" /></div>                                                
                    <div className="col-lg-12">
                    <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Profile Image</label>
                                </div>
                                <input 
                                className="form-control" 
                                type="file" 
                                id="profileResume" 
                                
                                />
                        </div>
                    </div>
                    <div className="col-lg-12">
                    <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Select Media</label>
                                </div>
                                <input 
                                className="form-control" 
                                type="file" 
                                id="profileResume" 
                                
                                />
                        </div>
                    </div>
            </div>                            
            </div>
            </div>            
        )})                                        
    }

    return (
        <Main className="container-lg bg-dark roundedd border border-light"> 
            <div class="signup-form">
                <form>
                    <Link to="/admin"><button className="btn btn-outline-info">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </button></Link>
                    <h2>Add Story</h2>
                    <p class="hint-text">Story added here will be displayed on home page</p>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* {isSuccess && (<SuccessMessage />)}                                 */}
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-12"><input type="text" class="form-control" name="full_name" placeholder="Enter Main title" required="required" /></div>                            
                        </div>        	
                    </div>                    
                    
                            {InputStory()}                    
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-outline-danger w-100" onClick={() => setInputCount(inputCount+1)}>
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>                                                                                                
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12"><button type="submit" class="btn btn-success btn-lg btn-block"                                                        
                            >Add Story</button></div>
                        </div>
                    </div>
                </form>                
            </div>
        </Main>
    );
}

export default AddStory;
