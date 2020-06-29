import React, { useState, useEffect } from 'react'
import Main from './Main'
import * as firebase from 'firebase'
import ReactLoading from 'react-loading';


export default function MoreUpdates(props) {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const getNews = async () => {
        setIsLoading(true)
        let dataRef = firebase
        .database()
        .ref()                
        dataRef.on("value",dataSnapshot => {
            if(dataSnapshot.val()){
                let result = Object.values(dataSnapshot.val())                
                let contactKey = Object.keys(dataSnapshot.val())
                contactKey.forEach((value,key) => {
                result[key]["key"] = value;                       
                })                                
                result.forEach((v,i) => {
                    let date = new Date(v.postedOn)
                    let dateData = []
                    dateData.push(date.getDate())
                    dateData.push(date.getMonth())
                    dateData.push(date.getFullYear())
                    dateData.push(date.getHours())
                    dateData.push(date.getMinutes())
                    dateData.push(date.getSeconds())
                    v.postedOn = dateData
                })                                
                result.reverse()
                data.push(result)               
                setData(data[0])                
                setIsLoading(false)
            }
        })
    }

    useEffect(() => {
        getNews()
    }, []);


    return (
        <Main>                      
            <div className="row">
                {isLoading && (<ReactLoading type={"bars"} color="#000" />)}
            {data.map((d,i) => (
                <div class="card m-4" style={{width:'18rem'}} key={i}>
                <img src={d.imageDownloadUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{d.title}</h5>
                  <p class="card-text">{d.description}</p>
                </div>                
                <div class="card-body">
                  {d.fileDownloadUrl !== "empty" ? (<a href={d.fileDownloadUrl} class="card-link" target="blank">More Info</a>) : ""}                                    
                </div>
                <div className="card-body">
                    <span className="text-muted">Posted On: <span className="badge badge-danger text-white">{d.postedOn[0]}-{d.postedOn[1]}-{d.postedOn[2]}</span></span>
                </div>
              </div>
            ))}
            </div>
            {console.log(data)}
        </Main>
    )
}
