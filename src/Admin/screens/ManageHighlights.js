import React, { useState, useEffect } from 'react';
import './CSS/Form.css';
import { Link } from 'react-router-dom';
import Main from '../../ReusableComponents/Main';
import * as firebase from 'firebase';
import './CSS/ManageHighlights.css';



const ManageHighlights = () => {

    const [data,setData] = useState([])
    const [story,setStory] = useState([])

    const getAllHighlights = async () => {
        const dbRef = firebase.database().ref('story')        

        await dbRef.on('value',datasnapshot => {
            if(datasnapshot.val()){
                let result = Object.values(datasnapshot.val())                
                let resultKeys = Object.keys(datasnapshot.val())

                resultKeys.forEach((value,key) => {
                    result[key]['key'] = value
                })
                
                let storyData = []
                result.forEach((v,i) => {
                    let list = Object.values(v.storyData)
                    let listKeys = Object.keys(v.storyData)
                    listKeys.forEach((value,index) =>{
                        list[index]['key'] = value
                    })
                    storyData.push(list)
                })                

                setData(result)
                setStory(storyData)                
            }
        })
    }

    const deleteStory = async (e, d, i) => {
        e.preventDefault();
        const dbRef = firebase.database().ref('story')
        const storageRefToMedia = firebase.storage().ref('story').child('media')
        const storageRefToProfile = firebase.storage().ref('story').child('profile')
        console.log(d)
        story[i].forEach(async (s,idx) => {
            await storageRefToMedia.child(s.mediaName).delete()
            await storageRefToProfile.child(s.profileImgName).delete()
        });
        await dbRef.child(d.key).remove()

    }

    useEffect(() => {
        getAllHighlights()
    }, []);

     useEffect(() => {
    //     console.log(data)
         console.log(story)
     },[data,story])

    return (
        <Main>
            <div className="signup-form">
                <form>
                    <Link to="/admin"><button type="button" className="btn btn-warning w-100">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </button></Link>
                    <h2>Manage Highlights</h2>
                    <p className="hint-text">Here you can list and delete highlights</p>
                    
                    <div className="form-group">
                        <div className="row">
                            <div className="accordion col-lg-12 w-100" id="accordionExample">
                            
                            
                            {data.map((value,index) => (
                                <div className="card w-100" key={index}>
                                    <div className="card-header" id={`heading${index}`}>
                                    <h3 className="mb-0">
                                        <div className="row">
                                            <div className="col-lg-10">
                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                        {value.heading}
                                        </button>
                                        </div>
                                        <div className="col-lg-2">
                                        <button 
                                        className="btn btn-link btn-block text-left trash-icon" 
                                        type="button"
                                        onClick={e => deleteStory(e,value,index)}
                                        >
                                            <i className="fas fa-trash trash-icon"></i>
                                        </button>
                                        </div>
                                        </div>
                                    </h3>
                                    </div>

                                    <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordionExample">
                                    <div className="card-body">
                                    {/* <button className="btn btn-primary w-100" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Button with data-target
                                    </button> */}

                                    {story[index] && story[index].map((d,i) => (
                                        <div key={i}>
                                            <button className="btn btn-primary w-100" type="button" data-toggle="collapse" data-target={`#collapse${index}${i}`} aria-expanded="false" aria-controls="collapseExample" key={i}>
                                                {d.heading}
                                            </button>
                                            <div className="collapse" id={`collapse${index}${i}`}>
                                                <div className="card card-body">
                                                <div className="card card-cascade wider">
                                                    <div className="view view-cascade overlay">
                                                    <img className="card-img-top" src={d.profileImage} alt="Card cap" />
                                                    <a href="#!">
                                                        <div className="mask rgba-white-slight"></div>
                                                    </a>
                                                    </div>
                                                    <div className="card-body card-body-cascade text-center pb-0">

                                                    
                                                    <h4 className="card-title"><strong>{d.heading}</strong></h4>
                                                    
                                                    <h5 className="blue-text pb-2"><strong>{d.subHeading}</strong></h5>

                                                    <a target='blank' href={d.url}><span className="badge badge-success">View Media</span></a>
                                                    
                                                    <p className="card-text">{d.snippet}</p>

                                                    
                                                    {/* -------------------------------this feature will be added in future updates--------------------- */}
                                                    {/* <button 
                                                    className="btn btn-link btn-block text-left trash-icon text-center" 
                                                    type="button"
                                                    onClick={e => deleteStory(e,value,index)}
                                                    >
                                                        <i className="fas fa-trash trash-icon"></i>
                                                    </button> */}
                                                    {/* <div className="card-footer text-muted text-center mt-4">
                                                        {toString(new Date(d.timestamp).getDate())}
                                                    </div> */}

                                                    </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>        	
                    </div>                    

                </form>                
            </div>
        </Main>
    );
}

export default ManageHighlights;
