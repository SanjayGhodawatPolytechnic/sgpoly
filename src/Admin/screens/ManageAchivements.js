import React, { useEffect } from 'react';
import Main from '../../ReusableComponents/Main';
import { useState } from 'react';
import * as firebase from 'firebase';
import uuid from "react-native-uuid";
import ReactLoading from "react-loading";
import AchivementsCard from './reusables/AchivementsCard';

const ManageAchivements = () => {

    const [data, setData] = useState([])
    const [newData, setNewData] = useState({
        title: '',
        description: '',
        image: File,
        file: File,
        category: '',
        dept: '',
        dateAchived: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const loadAllData = async () => {
        const dbRef = firebase.database().ref('achivements');
        await dbRef.on("value", snapshot => {
            let result = Object.values(snapshot.val());
            let keys = Object.keys(snapshot.val());
            keys.forEach((v,i) => {
                result[i]["key"] = v;
            })

            console.log(result);
            setData(result)
        })
    }

    useEffect(() => {
        loadAllData();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const dbRef = firebase.database().ref('achivements')
        const storageref = firebase.storage().ref('achivements')
        var imageURL = 'empty'
        var fileURL = 'empty'
        var imageName = uuid.v4();
        var fileName = uuid.v4();

        if(newData.image.length !== 0) {
            imageURL = await UploadImage(storageref, newData.image, imageName);
        }
        if(newData.file.length !== 0) {
            fileURL = await UploadFile(storageref, newData.file, fileName);
        }

        const data = {
            title: newData.title,
            description: newData.description,
            category: newData.category,
            dept: newData.dept,
            dateAchived: newData.dateAchived,
            imageURL: imageURL,
            fileURL: fileURL,
            fileName: fileName,
            imageName: imageName
        }

        await dbRef.push(data, (err) => {
            if(!err){
                console.log('ADDED');
                setNewData({
                    title: '',
                    description: '',
                    category: '',
                    dateAchived: '',
                    image: null,
                    file: null,
                    dept: ''
                })
                setIsLoading(false)
                
            }
        })
    }

    const UploadImage = async (storageref, image, name) => {
        const ref = storageref.child('images').child(name)
        const snapshot = await ref.put(image);
        return snapshot.ref.getDownloadURL();
    }
    const UploadFile = async (storageref, file, name) => {
        const ref = storageref.child('files').child(name)
        const snapshot = await ref.put(file);
        return snapshot.ref.getDownloadURL();
    }

    const LeftPanel = () => (
        <div className="container">
            <div className="row">
                {data.map((d,i) => (
                    <div className="col-6" key={i}>
                        <AchivementsCard  
                        category={d.category}
                        dateAchived={d.dateAchived}
                        dept={d.dept}
                        description={d.description}
                        fileName={d.fileName}
                        fileURL={d.fileURL}
                        imageName={d.imageName}
                        imageURL={d.imageURL}
                        ukey={d.key}
                        title={d.title}
                        />
                    </div>  
                ))}
            </div>
        </div>
    )

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
                <select 
                className="browser-default custom-select bg-transparent" 
                required
                value={newData.category}                
                onChange={(e) => setNewData({...newData, category:e.target.options[e.target.selectedIndex].value})}>
                    <option value="" disabled selected>Achived By</option>
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
                <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker">
                    <input required placeholder="Select date" type="date" id="example" className="form-control" onChange={(e) => setNewData({...newData, dateAchived: e.target.value})} />
                    <label for="example">Achived on...</label>
                </div>
                
                
                <div className="md-form">
                <div className="file-field">
                    <div className="row m-2">
                        <span className="text-muted m-2">Input Image:</span>
                        <input required type="file" id="imagepick" className="purple-gradient" onChange={(e) => setNewData({...newData, image: e.target.files[0]})} />
                    </div>
                </div>
                </div>
                <div className="md-form">
                <div className="file-field">
                    <div className="row m-2">
                        <span className="text-muted m-2">Input File:</span>
                        <input required type="file" id="filepick" className="purple-gradient" onChange={(e) => setNewData({...newData, file: e.target.files[0]})} />
                    </div>
                </div>
                </div>
                {isLoading && (
                    <div className="md-form text-center w-100">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <ReactLoading type="spinningBubbles" color="#FFF" className="ml-4" />
                            </div>
                        </div>
                    </div>
                )}
                <div className="md-form">
                <button className="btn purple-gradient w-100" onClick={e => onSubmit(e)}>Upload Activity</button>
                </div>
            </form>
        </div>
    )
    return (
        <Main className="bg-dark text-light rounded">
            <div className="row">
                <div className="col-lg-6"><LeftPanel /></div>
                <div className="col-lg-6">{RightPanel()}</div>
            </div>
        </Main>
    );
}

export default ManageAchivements;
