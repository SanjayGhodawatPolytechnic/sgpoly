import React, { useState } from 'react'
import Stories from 'react-insta-stories';
import Fullscreen from "react-full-screen";
import '../Story.css'
import { useEffect } from 'react';
import * as firebase from 'firebase'

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
    
    let dataRef = firebase
    .database()
    .ref('highlights')                
    dataRef.on("value",dataSnapshot => {
        if(dataSnapshot.val()){
            let result = Object.values(dataSnapshot.val())                
            let contactKey = Object.keys(dataSnapshot.val())
            contactKey.forEach((value,key) => {
            result[key]["key"] = value;                       
            })                                           
            setData(result)                                       
        }
    })
}

  useEffect(() => {
    getNews()    
  }, [])

  useEffect(() => {
    if(data.length){
      console.log(data)
    }
  }, [data])

  const Story = () => (
    <Fullscreen enabled={true} onChange={f => setIsStoryVisible(f)}>
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
  )

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
            <div className="ml-3" key={index}>
              <img 
              src={item.storydata.url} 
              className="rounded-circle" 
              style={{width:80, height:80}}
              onClick={() => {                
                currentStory.push(item.storydata)
                setIsStoryVisible(true)
              }}
              />
              <br/>
              <p className="text-center">{ item.heading }</p>
            </div>
          ))}          
        </div>
        </div>
        </div>
    )
}


export default Highlights