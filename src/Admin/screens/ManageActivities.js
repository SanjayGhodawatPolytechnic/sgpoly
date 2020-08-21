import React, { useState } from 'react';
import Main from '../../ReusableComponents/Main';
import * as firebase from 'firebase';
import uuid from "react-native-uuid";
import { useEffect } from 'react';
import ReactLoading from "react-loading";
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
    const [isLoading, setIsLoading] = useState(false)
    var imagesNames = []
    var imagesURLs = []


    const getAllActivities = () => {
        const dbRef = firebase.database().ref('activities');

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
        setIsLoading(true);
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
                    //console.log('Activity added successfully')
                    setIsLoading(false)
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
                            //console.log('SUCCESS')
                            setIsLoading(false)
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

    const deleteDataWithFiles = (key, fileName, imageNames) => {
        const dbRef = firebase.database().ref('activities').child('withFiles')
        const storageRef = firebase.storage().ref('activities')
        storageRef.child('file').child(fileName).delete()
        .then(() => {
            imageNames.forEach((d,i) => {
                storageRef.child('image').child(d).delete()
            })
        })
        .then(() => {
            dbRef.child(key).remove()
            .then(() => console.log('DELETED SUCCESSFULLY'))
        })
    }

    const deleteDataWithoutFiles = (key) => {
        const dataRef = firebase.database().ref('activities').child('withoutfiles')
        dataRef.child(key).remove().then(() => {
            console.log('DELETED')
        })
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
                }}>{isLoading ? (<ReactLoading type='bars' color="#000" />) : 'Upload Activity' }</button>
                </div>
            </form>
        </div>
    )

    const DisplayImages = ({
        images = []
    }) => {
        return images.map((d,i) => (
            <div className="col-4">
                <img className="img img-fluid" src={d} />
            </div>
        ))
    }

    const DisplayActivityCard = ({
        title = '',
        description = '',
        date = '',
        duration = '',
        dept = '',
        type = '',
        eventFor = '',
        images = undefined,
        imagesName = undefined,
        fileName = '',
        fileURL = '',
        isFile = false,
        uKey=''
    }) => (
        
                    <div className="col-lg-12 border border-light text-light purple-gradient">
                        <div className="row">
                        <div className="col-11">
                            <h3 className="text-center">{title}</h3>
                            <h5 className="text-center text-muted">{description}</h5>
                        </div>
                        <div 
                        className="col-1" 
                        style={{fontSize: 30, justifyContent:'center', alignItems: 'center', display: 'flex'}}
                        onClick={e => {
                            if(isFile) {
                                deleteDataWithFiles(uKey, fileName, imagesName)
                            }
                            else {
                                deleteDataWithoutFiles(uKey)
                            }
                        }}
                        >
                            <i class="fas fa-trash"></i>
                        </div>
                        </div>
                        <div className="row border border-light text-center">
                            <div className="col-6 border border-light">
                                <b>Date</b><br/>
                                <span className="badge">{date}</span>
                            </div>
                            <div className="col-6 border border-light">
                                <b>Duration</b><br/>
                                <span className="badge">{duration}</span>
                            </div>
                            <div className="col-6 border border-light">
                                <b>Department</b><br/>
                                <span className="badge">{dept}</span>
                            </div>
                            <div className="col-6 border border-light">
                                <b>TYPE</b><br/>
                                <span className="badge">{type}</span>
                            </div>
                            <div className="col-6 border border-light">
                                <b>Organized for</b><br/>
                                <span className="badge">{eventFor}</span>
                            </div>
                            <div className="col-6 border border-light">
                                <b>File</b><br/>
                                {
                                fileURL 
                                ? (<a href={fileURL} target="_blank"><span className="badge">Click Here</span></a>) :
                                (<span className="badge">No File Available</span>)
                            }
                            </div>
                            <div className="col-12 border border-light">
                                <div className="row">
                                    {images ? (<DisplayImages images={images} />) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                
    )

    const LeftPanel = () => (
        <div className="container">
            <div className="container border border-light mt-2">
                <h4 className="text-center text-light">College Activities</h4>
                <div className="row">
                    {dataWithoutFiles.map((d, i) => {
                        if(d.category === 'college') {
                            return(
                            <DisplayActivityCard 
                            title={d.title} 
                            description={d.description} 
                            date={d.date}
                            duration={d.duration}
                            dept={d.dept}
                            eventFor={d.category}
                            type={d.type}
                            uKey={d.key}
                            />
                            )
                        }
                    })}
                    {dataWithFiles.map((d, i) => {
                        if(d.category === 'college') {
                            return(
                            <DisplayActivityCard 
                            title={d.title} 
                            description={d.description} 
                            images={d.imagesURLs}
                            date={d.date}
                            duration={d.duration}
                            dept={d.dept}
                            eventFor={d.category}
                            type={d.type}
                            fileName={d.fileName}
                            fileURL={d.fileURL}
                            imagesName={d.imagesNames}
                            uKey={d.key}
                            isFile={true}
                            />
                            )
                        }
                    })}
                </div>
                <h4 className="text-center text-light">Student's Activities</h4>
                <div className="row">
                    {dataWithoutFiles.map((d, i) => {
                        if(d.category === 'student') {
                            return(
                            <DisplayActivityCard 
                            title={d.title} 
                            description={d.description} 
                            date={d.date}
                            duration={d.duration}
                            dept={d.dept}
                            eventFor={d.category}
                            type={d.type}
                            uKey={d.key}
                            />
                            )
                        }
                    })}
                    {dataWithFiles.map((d, i) => {
                        if(d.category === 'student') {
                            return(
                            <DisplayActivityCard 
                            title={d.title} 
                            description={d.description} 
                            images={d.imagesURLs}
                            date={d.date}
                            duration={d.duration}
                            dept={d.dept}
                            eventFor={d.category}
                            type={d.type}
                            fileName={d.fileName}
                            fileURL={d.fileURL}
                            imagesName={d.imagesNames}
                            uKey={d.key}
                            isFile={true}
                            />
                            )
                        }
                    })}
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
