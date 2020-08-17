import React, { useState } from 'react';
import Main from '../../ReusableComponents/Main';
import * as firebase from 'firebase';
import uuid from "react-native-uuid";
import { useEffect } from 'react';
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
    const [dataWithoutFiles, setDataWithoutFiles] = useState([]);
    const [dataWithFiles, setDataWithFiles] = useState([]);
    var imagesNames = []
    var imagesURLs = []


    const getAllActivities = () => {
        const dbRef = firebase.database().ref('activities')


        //vanila data
        dbRef.child('withoutfiles').on('value', snapshot => {
            let resultWithoutFiles = Object.values(snapshot.val())
            let keys = Object.keys(snapshot.val())
            keys.forEach((v,i) => {
                resultWithoutFiles[i]['key'] = v;
            })
            console.log(resultWithoutFiles)
            setDataWithoutFiles(resultWithoutFiles)
        })

        //complex data
        dbRef.child('withFiles').on('value',  snapshot => {
            let resultWithFiles = Object.values(snapshot.val())
            let keys = Object.keys(snapshot.val())
            keys.forEach((v,i) => {
                resultWithFiles[i]['key'] = v;
            })
            console.log(resultWithFiles)
            setDataWithFiles(resultWithFiles);
        })
    }

    useEffect(() => {
        getAllActivities();
    }, [])

    const onSubmit = () => {
        const dbRef = firebase.database().ref('activities');
        const storageRef = firebase.storage().ref('activities');
        if(!newData.isFiles) {
            const dataWithoutFiles = {
                title: newData.title,
                description: newData.description,
                category: newData.category,
                duration: newData.duration,
                dept: newData.dept,
                date: newData.date,
                type: newData.type
            }
            dbRef.child('withoutfiles').push(dataWithoutFiles, (err) => {
                if(!err) {
                    console.log('Activity added successfully')
                }
            })
        }
        else {
            var FileName = uuid.v4()
            var fileURL;
            uploadFile(newData.file, storageRef, FileName, 'file')
            .then(fileurl => {
                fileURL = fileurl
                uploadImages(storageRef)
                .then(() => {
                    const dataWithFiles = {
                        title: newData.title,
                        description: newData.description,
                        category: newData.category,
                        duration: newData.duration,
                        dept: newData.dept,
                        date: newData.date,
                        type: newData.type,
                        fileName: FileName,
                        fileURL,
                        imagesNames,
                        imagesURLs
                    }
        
                    dbRef.child('withFiles').push(dataWithFiles, (err) => {
                        if(!err) {
                            console.log('SUCCESS')
                        }
                    })
                })
            })
        }
    }

    const uploadImages = async (storage) => {
        for(let i = 0; i < newData.images.length; i++){
            let name = uuid.v4()
            await uploadFile(newData.images[i], storage, name, 'image')
            .then(url => {
                imagesNames.push(name)
                imagesURLs.push(url)
            })
        }
    }

    const uploadFile = async (file, reference, name, type) => {
        const ref = reference.child(type).child(name)
        const snapshot = await ref.put(file)
        return snapshot.ref.getDownloadURL();
    }

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
                    value={newData.duration}
                    onChange={(e) => setNewData({...newData, duration: e.target.value})} />
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
                    <input required placeholder="Select date" type="date" id="example" className="form-control" onChange={(e) => setNewData({...newData, date: e.target.value})} />
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
                            <input required type="file" id="imagepick" className="purple-gradient" onChange={(e) => setNewData({...newData, file: e.target.files[0]})} />
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
                <button className="btn purple-gradient w-100" onClick={ e => {
                    e.preventDefault();
                    onSubmit();
                }}>Upload Activity</button>
                </div>
            </form>
        </div>
    )

    const LeftPanel = () => (
        <div className="container">
            <div className="container border border-light m-3">
                <h4 className="text-center text-light">College Achivements</h4>
                <div className="row">
                    <div className="col-lg-12 border border-light text-light purple-gradient">
                        <h3 className="text-center">Title</h3>
                        <h5 className="text-center text-muted">Description</h5>
                        
                    </div>
                </div>
            </div>
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
