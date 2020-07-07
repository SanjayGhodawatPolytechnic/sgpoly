import React from 'react';

//imports for carousel

import 'react-multi-carousel/lib/styles.css';



import './CSS/carousel.css'
import '../Screens/Home/Home.css'

//importing firebase 
import * as firebase from 'firebase'
import { useState } from 'react';
import { useEffect } from 'react';


import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';



const NewsCarousel = () => {

    const [data,setData] = useState([])
    const [isPopUp,setisPopUp] = useState(false)
    const [isLoading,setIsLoading] = useState(false)


    const getNews = async () => {
        setIsLoading(true)
        let dataRef = firebase
        .database()
        .ref("updates")                
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
                // console.log(data)
                // console.log(result)
                setIsLoading(false)
            }
        })
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
    <div className="row">
        <div className="col-sm-12">
    <div class="container">
        <div class="card-group vgr-cards">        
            {data.map((d,i) => {
                if(i%2 === 0 && i <= 3){
                    return(                             
                    <div class="card rainbow " key={i}>
                        <div class="view overlay">          
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div class="card-img-body">
                        <img class="img-fluid" src={d.imageDownloadUrl} alt="Card image cap" />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{d.title}</h4>
                            <p class="card-text">{d.description}</p>                            
                            <span className="text-muted">Posted On: <span className="badge badge-dark">{d.postedOn[0]}-{d.postedOn[1]}-{d.postedOn[2]}</span></span><br/>
                            {d.fileDownloadUrl !== "empty" ? (<a href={d.fileDownloadUrl} target="blank"><span className="badge badge-info">More Info</span></a>) : ""}
                        </div>                        
                    </div>                                     
                    )
                }
                else if(i%2 !== 0 && i <= 3){
                    return(                        
                    <div class="card rainbow" key={i}>
                        <div class="view overlay">          
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{d.title}</h4>
                            <p class="card-text">{d.description}</p>
                            <span className="text-muted">Posted On: <span className="badge badge-dark">{d.postedOn[0]}-{d.postedOn[1]}-{d.postedOn[2]}</span></span><br/>
                            
                            {d.fileDownloadUrl !== "empty" ? (<a href={d.fileDownloadUrl} target="blank"><span className="badge badge-info">More Info</span></a>) : ""}
                        </div>
                        <div class="card-img-body">
                            <img class="img-fluid" src={d.imageDownloadUrl} alt="Card image cap" />
                        </div>
                    </div>                    
                    )
                }
            })}            
            </div>
            </div>
            </div>            
            <div className="col-12">{isLoading && (<ReactLoading type={"bars"} color="#000" />)}</div><br/><br/><br/><br/>
                <div className="col-12"><Link to={{pathname:"/updates/viewmore", aboutProps:{data:data} }} params={data}><button type="button" class="btn btn-outline-success w-100">View More</button></Link></div>    
            </div>
    );
}

export default NewsCarousel;




