import React from 'react';

//imports for carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//importing card from reusable components
import Card from './Card';

//importing firebase 
import * as firebase from 'firebase'
import { useState } from 'react';
import { useEffect } from 'react';



const NewsCarousel = () => {

    const [data,setData] = useState([])


    const getNews = async () => {
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
                data.push(result)               
                setData(data[0])
                console.log(data)
            }
        })
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
            }
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
            {data.map((d,i) => (
                <Card key={i} title={d.title} description={d.description} image={d.imageDownloadUrl} />
            ))}
        </Carousel>
        </div>

        </div>
    );
}

export default NewsCarousel;
