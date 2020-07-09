import React, { useState, useEffect } from 'react'
import Main from './Main'
import * as firebase from 'firebase'
import ReactLoading from 'react-loading';
import Stories from 'react-insta-stories';
import Fullscreen from "react-full-screen";
import './CSS/test.css'
import renderHTML from 'react-render-html';


export default function MoreUpdates(props) {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isFull,setIsFull] = useState(false)
    const sampleHTML = (close) => (`<div className="container mt-5"><div onClick={${close}} className="text-center text-light" style={{fontSize:20,color:'#FFF'}}><i class="far fa-times-circle"></i></div><h4 className="text-center badge badge-light">This is sample</h4></div>`)
    const stories = [{ url: 'https://picsum.photos/1080/1920',seeMore: ({ close }) => (        
        renderHTML(sampleHTML(close))
    ), header: { 
    heading: 'Mohit Karekar', 
    subheading: 'Posted 5h ago', 
    profileImage: 'https://picsum.photos/1000/1000' } }, 
    { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, 
    { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, 
    { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video' }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80']

    const getNews = async () => {
        setIsLoading(true)
        let dataRef = firebase
        .database()
        .ref('updates')                
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
            <button onClick={e => setIsFull(true)}>Full</button>
            <Fullscreen enabled={isFull}>
                <div className="row">
                    <div className="col-6">
            <Stories 
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />      
      </div>
      <div className="col-6">
      <button onClick={e => setIsFull(false)}>Exit</button>
      </div>
      </div>
      </Fullscreen>

      <div class="scrolling-wrapper">          
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />
    <img src="https://picsum.photos/1000/1000" className="rounded-circle" style={{width:50, height:50, margin:2}} />    
    </div>
        </Main>
    )
}
