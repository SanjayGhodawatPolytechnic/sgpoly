import React from 'react';
import * as firebase from 'firebase';
import ReactLoading from "react-loading";
import { useState } from 'react';
const AchivementsCard = ({
    title = '',
    description = '',
    imageURL = '',
    fileURL = '',
    dept = '',
    category = '',
    dateAchived = '',
    ukey = '',
    fileName = '',
    imageName = ''
}) => {

    const [isLoading, setIsLoading] = useState(false)

    const deleteAchivement = async (key, imgname, filename) => {
        const dbRef = firebase.database().ref('achivements');
        const storageRef = firebase.storage().ref('achivements')
        setIsLoading(true)

        await storageRef.child('images').child(imgname).delete()
        .then(async () => {
            await storageRef.child('files').child(filename).delete()
            .then(async () => {
                dbRef.child(key).remove()
                setIsLoading(false)
            })
        })
    }
    return (
        <div class="card" style={{width: '18rem'}}>
                <img src={imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-dark">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item purple-gradient">Department: {dept}</li>
                    <li class="list-group-item blue-gradient">Achived By: {category}</li>
                    <li class="list-group-item peach-gradient">Achived on: {dateAchived}</li>
                </ul>
                <div class="card-body">
                    <a target="blank" href={fileURL} class="card-link">Open File</a>
                    <button onClick={e => {
                        e.preventDefault()
                        deleteAchivement(ukey, imageName, fileName)
                    }} 
                    className="btn warm-flame-gradient card-link">
                        {isLoading ? (<ReactLoading type="cylon" color="#FFF" />) : (<i class="fas fa-trash trash-icon"></i>)}
                        </button>
                </div>
            </div>
    );
}

export default AchivementsCard;
