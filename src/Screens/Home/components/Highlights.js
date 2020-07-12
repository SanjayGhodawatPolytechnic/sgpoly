import React, { useState } from 'react'
import Stories from 'react-insta-stories';
import Fullscreen from "react-full-screen";
import '../Story.css'
import { useEffect } from 'react';
import * as firebase from 'firebase'
import './Highlights.css'

const Highlights = () => {
  const [data,setData] = useState([])
    const [currentStory,setCurrentStory] = useState([])
  const [isStoryVisible,setIsStoryVisible] = useState(false)
  var touches = 0
  const storyData = [
    {url:'https://picsum.photos/1000/1000', header:{
      heading:"Test",
      subheading:'Posted 2h ago',
      profileImage:'https://picsum.photos/1000/1000'      
    }    
  },
  { url: 'https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/Whatsapp%20Status%20New%20Video%20Outer%20Space.mp4?alt=media&token=b46f69d7-83ce-491b-86ff-6ce34da8f2fa', type: 'video', duration: 1000 }
  ]

  const getNews = async () => {
    setData([])
    let dataRef = firebase
    .database()
    .ref('story')                
    dataRef.on("value",dataSnapshot => {
        if(dataSnapshot.val()){
            let result = Object.values(dataSnapshot.val())                
            let contactKey = Object.keys(dataSnapshot.val())
            contactKey.forEach((value,key) => {
            result[key]["key"] = value;                                   
            })                                                
            result.forEach((v,i) => {
              let res = Object.values(v.storyData)
              let resKey = Object.keys(v.storyData)
              resKey.forEach((val,idx) => {
                res[idx]['key'] = val
              })
            })       
            setData(result)                                       
        }
    })
}

  useEffect(() => {
    getNews()    
  }, [])

  useEffect(() => {
    
  }, [data])


    return (
        <div>
          <Fullscreen enabled={isStoryVisible} onChange={f => setIsStoryVisible(f)}>
            {isStoryVisible && (
              <div onTouchMove={e => {
                e.preventDefault()
                  touches += 16;
                  console.log(touches)
                  if(touches > 500){
                    setIsStoryVisible(false)                
                  }
                }}                
                >
              <Stories
              stories={currentStory}              
              defaultInterval={2000}
              width={window.outerWidth}
              height={window.outerHeight}                            
              
            />
            </div>
            )}
        </Fullscreen>
        <div class="scrolling-wrapper">          
        <div className="row">
          {data.map((item,index) => (
            <div className="ml-3 story" key={index}>
              <img 
              src={item.storyData[Object.keys(item.storyData)[0]].profileImage} 
              className="rounded-circle" 
              style={{width:70, height:70}}
              onClick={() => {                
                let story = []
                let d = data[index]
                let obj = Object.values(d.storyData)
                obj.forEach((da,i) => {
                  let temp = {
                    url: da.url,
                    type: da.type,
                    header: {
                      heading: da.heading,
                      subheading: da.subHeading,
                      profileImage: da.profileImage
                    }
                  }
                  //console.log(temp)
                  story.push(temp)                  
                })
                //console.log(story)                
                //currentStory.push(item.storyData)
                setCurrentStory(story)
                //console.log(currentStory)
                setIsStoryVisible(true)
              }}
              />
              <br/>
              <p className="text-center" style={{fontWeight:'bold',font:'times new roman'}}>{ item.heading }</p>
            </div>
          ))}          
        </div>
        </div>
        </div>
    )
}


export default Highlights