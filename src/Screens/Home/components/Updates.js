import React from 'react';
import { useState } from 'react';
import * as firebase from "firebase";
import "./Updates.css"
import { useEffect } from 'react';
const Updates = () => {

  const [data, setData] = useState([]);

  const getNews = async () => {
    let dataRef = firebase.database().ref("updates");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let contactKey = Object.keys(dataSnapshot.val());
        contactKey.forEach((value, key) => {
          result[key]["key"] = value;
        });
        result.forEach((v, i) => {
          let date = new Date(v.postedOn);
          let dateData = [];
          dateData.push(date.getDate());
          dateData.push(date.getMonth());
          dateData.push(date.getFullYear());
          dateData.push(date.getHours());
          dateData.push(date.getMinutes());
          dateData.push(date.getSeconds());
          v.postedOn = dateData;
        });
        result.reverse();
        setData(result);
        // console.log(result)
      }
    });
  };

  useEffect(() => {
    getNews();
  }, [])

    return (
        <div class="updates">
            <div class="site__wrapper">
              {data[0] && (
                <div class="grid">
                <div class="card">
                  <div class="card__image">
                    <img src={data[0].imageDownloadUrl} alt="first" />
      
                    <div class="card__overlay card__overlay--indigo">
                      <div class="card__overlay-content">
                        <a href="#0" class="card__title">{data[0].title}</a>
                        <div className="container p-0 m-0 card__description">
                          {data[0].description}
                        </div>
                        <ul class="card__meta card__meta--last">
                          <li><i class="fa fa-user"></i> Posted On: {data[0].postedOn}</li><br />
                          <li><a href={data[0].fileDownloadUrl}> More Info</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              )}

              {data[1] && (
                <div class="grid">
                <div class="card">
                  <div class="card__image">
                    <img src={data[1].imageDownloadUrl} alt="second" />
      
                    <div class="card__overlay card__overlay--blue">
                      <div class="card__overlay-content">
                      <a href="#0" class="card__title">{data[1].title}</a>
                        <div className="container p-0 m-0 card__description">
                          {data[1].description}
                        </div>
                        <ul class="card__meta card__meta--last">
                          <li><i class="fa fa-user"></i> Posted On: {data[1].postedOn}</li><br />
                          <li><a href={data[1].fileDownloadUrl}> More Info</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              )}
      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=200" alt="" />

              <div class="card__overlay card__overlay--indigo">
                <div class="card__overlay-content">
                  <a href="#0" class="card__title">It will be title of an update</a>
                  <div className="container p-0 m-0 card__description">
                    Hey This is container for Description. 
                    Is it okay?
                  </div>
                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Posted On: 10/10/2002</a></li><br />
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> More Info</a></li>
                  </ul>   
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=300" alt="" />

              <div class="card__overlay card__overlay--indigo">
                <div class="card__overlay-content">
                <a href="#0" class="card__title">It will be title of an update</a>
                  <div className="container p-0 m-0 card__description">
                    Hey This is container for Description. 
                    Is it okay?
                  </div>
                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Posted On: 10/10/2002</a></li><br />
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> More Info</a></li>
                  </ul>  
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=400" alt="" />

              <div class="card__overlay card__overlay--blue">
                <div class="card__overlay-content">
                <a href="#0" class="card__title">It will be title of an update</a>
                  <div className="container p-0 m-0 card__description">
                    Hey This is container for Description. 
                    Is it okay?
                  </div>
                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Posted On: 10/10/2002</a></li><br />
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> More Info</a></li>
                  </ul>  
                </div>
              </div>
            </div>
          </div>
      </div>
</div>
        </div>
    );
}

export default Updates;


// <div className="updates">
//                 <div className="update-card ">
//                 <div className="img-cont">
//                     <img className="update-img" alt="update1" src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/images%2F32085ed0-fe21-4303-b02f-645d32a9e30c?alt=media&token=185cdd54-293f-44fc-8c53-2ca7a3a32a6d" />
//                 </div>
//                 <div className="card-content">
//                     <div className="card-content-title">
//                         <span>Lorem Ipsum Title</span>
//                     </div>
//                     <div className="card-content-desc">
//                         <span>College is arranging a trip to Goa. So, those students who are interested can register their name to their respective departments.</span>
//                     </div>
//                     <div className="POSTED_ON">
//                         <span>POSTED ON: </span><span>1-1-2021</span>
//                     </div>
//                     <div className="KNOW_MORE">
//                         <span>KNOW MORE</span>
//                     </div>
//                 </div>

//             </div>
//             <div className="update-card">
//                 <div className="img-cont">
//                     <img className="update-img" alt="update2" src="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/images%2F32085ed0-fe21-4303-b02f-645d32a9e30c?alt=media&token=185cdd54-293f-44fc-8c53-2ca7a3a32a6d" />
//                 </div>
//                 <div className="card-content">
//                     <div className="card-content-title">
//                         <span>Lorem Ipsum Title</span>
//                     </div>
//                     <div className="card-content-desc">
//                         <span>College is arranging a trip to Goa. So, those students who are interested can register their name to their respective departments.</span>
//                     </div>
//                     <div className="POSTED_ON">
//                         <span>POSTED ON: </span><span>1-1-2021</span>
//                     </div>
//                     <div className="KNOW_MORE">
//                         <span>KNOW MORE</span>
//                     </div>
//                 </div>

//             </div>

//             </div>