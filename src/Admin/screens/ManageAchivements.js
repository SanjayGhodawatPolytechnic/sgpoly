import React, { useEffect } from 'react';
import Main from '../../ReusableComponents/Main';
import { useState } from 'react';
import * as firebase from 'firebase';
import uuid from "react-native-uuid";
import ReactLoading from "react-loading";

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

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const dbRef = firebase.database().ref('achivements')
        const storageref = firebase.storage().ref('achivements')
        var imageURL = 'empty'
        var fileURL = 'empty'

        if(newData.image !== '') {
            imageURL = await UploadImage(storageref, newData.image);
        }
        if(newData.file !== "") {
            fileURL = await UploadFile(storageref, newData.file);
        }

        const data = {
            title: newData.title,
            description: newData.description,
            category: newData.category,
            dept: newData.dept,
            dateAchived: newData.dateAchived,
            imageURL: imageURL,
            fileURL: fileURL
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

    const UploadImage = async (storageref, image) => {
        const ref = storageref.child('images').child(uuid.v4())
        const snapshot = await ref.put(image);
        return snapshot.ref.getDownloadURL();
    }
    const UploadFile = async (storageref, file) => {
        const ref = storageref.child('files').child(uuid.v4())
        const snapshot = await ref.put(file);
        return snapshot.ref.getDownloadURL();
    }

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
                {isLoading && (
                    <div className="md-form">
                        <ReactLoading type="spinningBubbles" color="#FFF" />
                    </div>
                )}
                <div class="md-form">
                    <input 
                    type="text" 
                    id="form1" 
                    className="form-control"
                    value={newData.title}
                    onChange={(e) => {
                        
                    setNewData({...newData, title: e.target.value})}} />
                    <label for="form1">Title</label>
                </div>
                <div class="md-form">
                    <input 
                    type="text" 
                    id="form2" 
                    className="form-control" 
                    value={newData.description}
                    onChange={(e) => setNewData({...newData, description: e.target.value})} />
                    <label for="form2">Description</label>
                </div>
                <div class="md-form">
                <select 
                className="browser-default custom-select bg-transparent" 
                value={newData.category}                
                onChange={(e) => setNewData({...newData, category:e.target.options[e.target.selectedIndex].value})}>
                    <option value="" disabled selected>Achived By</option>
                    <option value="college">College</option>
                    <option value="student">Student</option>
                </select>
                </div>
                
                <div className="md-form">
                    <select class="browser-default custom-select bg-transparent" onChange={(e) => setNewData({...newData, dept:e.target.options[e.target.selectedIndex].value})}>
                        <option value="" disabled selected>Department</option>
                        <option value="CSE">Computer Science</option>
                        <option value="MECH">Mechanical</option>
                        <option value="ETC">Electronics</option>
                        <option value="CE">Civil</option>
                        <option value="EE">Electrical</option>
                    </select>
                </div>
                <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker">
                    <input placeholder="Select date" type="date" id="example" class="form-control" onChange={(e) => setNewData({...newData, dateAchived: e.target.value})} />
                    <label for="example">Achived on...</label>
                </div>
                
                
                <div class="md-form">
                <div class="file-field">
                    <div className="row m-2">
                        <span className="text-muted m-2">Input Image:</span>
                        <input type="file" id="imagepick" className="purple-gradient" onChange={(e) => setNewData({...newData, image: e.target.files[0]})} />
                    </div>
                </div>
                </div>
                <div class="md-form">
                <div class="file-field">
                    <div className="row m-2">
                        <span className="text-muted m-2">Input File:</span>
                        <input type="file" id="filepick" className="purple-gradient" onChange={(e) => setNewData({...newData, file: e.target.files[0]})} />
                    </div>
                </div>
                </div>
                <div class="md-form">
                <button class="btn purple-gradient w-100" onClick={e => onSubmit(e)}>Upload Activity</button>
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
