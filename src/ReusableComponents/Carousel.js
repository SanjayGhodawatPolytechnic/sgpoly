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
                var values = dataSnapshot.val()
                console.log(values)
            }
        })
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
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
            items: 3,
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
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Carousel>
    );
}

export default NewsCarousel;
