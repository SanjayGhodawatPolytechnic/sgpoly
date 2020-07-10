import React, { useState, useEffect } from 'react';
import Main from '../../ReusableComponents/Main';
import { Link } from 'react-router-dom';
import './CSS/AddStaffMember.css'
import * as firebase from 'firebase'
import uuid from 'react-native-uuid';

var _ = require('lodash');

const AddStory = () => {

    const [inputCount,setInputCount] = useState({
        count:1,
        currentOpen: 1
    })    

    const [storyData,setStoryData] = useState({
        title:'',
        heading: [],
        subHeading: [],
        type: [],
        profile: [],
        media: [],
        snippet: []
    })

    const submit = async () => {
        const storyID = uuid.v4()
        const dbRef = firebase.database().ref('story')
        const storageRef = firebase.storage().ref()
        

        const s = {
            heading:storyData.title
        }

        await dbRef.child(storyID).push(s,err => {
            console.error('ERROR OCCURED: ',err.message)
        }).then(async () => {
            for(let index = 0; index < storyData.heading.length; index++){
                let profileURL = 'empty'
                let mediaURL = 'empty'
    
                if(storyData.profile[index] !== 'empty'){
                    profileURL = await uploadProfileAsync(storyData.profile[index],storageRef)
                }
                if(storyData.profile[index] !== 'empty'){
                    mediaURL = await uploadMediaAsync(storyData.media[index],storageRef)
                }
            }

            const data = {

            }

        })    
    }

    const uploadProfileAsync = async (profile, storageRef) => {
        const ref = storageRef.child('story').child('profile').child(uuid.v4())
        const snapshot = await ref.put(profile)
        return await snapshot.ref.getDownloadURL()
      };

    const uploadMediaAsync = async (media, storageRef) => {
        const ref = storageRef.child('story').child('media').child(uuid.v4())
        const snapshot = await ref.put(media)
        return await snapshot.ref.getDownloadURL()
      };
    

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
                            <div class="col-lg-12"><input 
                            type="text" 
                            class="form-control"                             
                            placeholder="Enter Main title" 
                            required="required" 
                            value={storyData.title}
                            onChange={e => {
                                setStoryData({
                                    ...storyData,
                                    title: e.target.value
                                })
                                //console.log(storyData.title)
                            }}
                            /></div>                            
                        </div>        	
                    </div>                    
                    


                    {/* ------------------------------------Main Form----------------------------------- */}

                    {_.times(inputCount.count,(i) => (

                            <div class="form-group" key={i}>
                            <div class="row">            
                                <div className="col-lg-12 m-2">
                                    <button 
                                    class="btn btn-primary w-100" 
                                    type="button" 
                                    // data-toggle="collapse" 
                                    // data-target={`#multiCollapseExample${i}`} 
                                    // aria-expanded="false" 
                                    // aria-controls={`multiCollapseExample${i}`}                                        
                                    onClick={e => {
                                        e.preventDefault()
                                        if(inputCount.currentOpen !== i){
                                        setInputCount({...inputCount, currentOpen: i})
                                        }else{
                                            setInputCount({...inputCount, currentOpen: -1})
                                        }
                                    }}
                                    >Story Item {i + 1}</button>
                                </div>
                            <div class="col-lg-12 multi-collapse m-2" class={`col-lg-12 multi-collapse m-2 ${inputCount.currentOpen === i ? '' : 'collapse'}`} id={`multiCollapseExample${i}`}>                                                        
                                    <div class="col-lg-12"><input 
                                    type="text" 
                                    class="form-control"                     
                                    placeholder="Enter Heading"                     
                                    value={storyData.heading[i] || ''}
                                    onChange={e => {
                                        e.preventDefault()
                                        let heading = storyData.heading
                                        heading[i] = e.target.value
                                        setStoryData({...storyData,heading})                        
                                        //console.log(storyData.heading)
                                    }}
                                    />
                                    </div>                                                
                                    <div class="col-lg-12"><input 
                                    type="text" 
                                    class="form-control"                     
                                    placeholder="Enter Sub Heading"                     
                                    value={storyData.subHeading[i] || ''}
                                    onChange={e => {
                                        e.preventDefault()
                                        let subHeading = storyData.subHeading
                                        subHeading[i] = e.target.value
                                        setStoryData({
                                            ...storyData,
                                            subHeading
                                        })
                                        //console.log(storyData.subHeading)                                        
                                    }}
                                    /></div>                                                
                                    <div class="col-lg-12"><input 
                                    type="text" 
                                    class="form-control"                     
                                    placeholder="Type EG: video or image"                     
                                    value = {storyData.type[i] || ''}
                                    onChange = {e => {                        
                                        let type = storyData.type
                                        type[i] = e.target.value
                                        setStoryData({
                                            ...storyData,
                                            type
                                        })
                                        //console.log(storyData.type)
                                    }}                    
                                    /></div>
                                    <div className="col-lg-12">
                                    <div class="input-group mb-3 m-2">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="inputGroupSelect01">Profile Image</label>
                                                </div>
                                                <input 
                                                className="form-control" 
                                                type="file" 
                                                id="profileResume" 
                                                
                                                onChange={e => {
                                                    let profile = storyData.profile
                                                    profile[i] = e.target.files[0] ? e.target.files[0] : 'empty'
                                                    setStoryData({
                                                        ...storyData,
                                                        profile
                                                    })
                                                    //console.log(storyData.profile)
                                                }}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                    <div class="input-group mb-3 m-2">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="inputGroupSelect01">Select Media</label>
                                                </div>
                                                <input 
                                                className="form-control" 
                                                type="file" 
                                                id="profileResume" 
                                                onChange={e => {
                                                    let media = storyData.media
                                                    media[i] = e.target.files[0] ? e.target.files[0] : 'empty'
                                                    setStoryData({
                                                        ...storyData,
                                                        media
                                                    })
                                                    //console.log(storyData.media)
                                                }}
                                                />
                                        </div>
                                        <div class="col-lg-12"><textarea 
                                        rows="4" 
                                        type="text" 
                                        class="form-control"                         
                                        placeholder="Enter JSX snippet with bootstrap classes only. *note: this snippet will be displayed with story" 
                                        value={storyData.snippet[i] || ''}
                                        onChange={e => {
                                            let snippet = storyData.snippet
                                            snippet[i] = e.target.value
                                            setStoryData({
                                                ...storyData,
                                                snippet
                                            })
                                            console.log(storyData.snippet)
                                        }}
                                        /></div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <button className="btn btn-outline-dark">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>                            
                            </div>
                            </div>

                    ))}


                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-outline-danger w-100" onClick={(e) => {
                                    e.preventDefault()
                                    
                                    setInputCount({...inputCount, count: inputCount.count + 1})}
                                }
                                    >
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>                                                                                                
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                <button 
                                type="submit" 
                                class="btn btn-success btn-lg btn-block"                                                        
                                onClick={e => {
                                    e.preventDefault()
                                    submit()
                                }}
                                >Add Story</button>
                            </div>
                        </div>
                    </div>
                </form>                
            </div>
        </Main>
    );
}

export default AddStory;
