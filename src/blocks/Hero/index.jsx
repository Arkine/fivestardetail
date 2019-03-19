import React, {useState, useEffect} from 'react';

import {slides} from './slides.js';

import {
    Hero,
    Slide
} from './Hero-styled';



export default () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [startTime, setStartTime] = useState(new Date());

    // function checkTime() {
    //     if (((new Date() - startTime)/1000) > 5) {
    //         const nextSlide = (activeSlide + 1) > (slides.length - 1) ? 0 : (activeSlide + 1);
    //         setStartTime(new Date());
    //         setActiveSlide(nextSlide);
    //     }

    //     console.log('h')

    //     window.requestAnimationFrame(() => {
    //         checkTime();
    //     });
    // }

    // checkTime(); 

    return (
        <Hero>
            {slides.map((slide, index) => (
                <Slide bgUrl={slide.image} active={index === activeSlide} />
            ))}
        </Hero>
    );
}