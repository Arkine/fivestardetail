import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {slides} from './slides.js';

import {
    Hero,
    Slide
} from './Hero-styled';

export default () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [startTime, setStartTime] = useState(new Date());
    // This is timing out the slider
    // function checkTime() {
    //     if (((new Date() - startTime)/1000) > 5) {
    //         const nextSlide = ((activeSlide + 1) > slides.length - 1) ? 0 : (activeSlide + 1);
    //         setStartTime(new Date());
    //         setActiveSlide(nextSlide);
    //     }

    //     window.requestAnimationFrame(checkTime);
    // }

    // useEffect(() => {
    //     checkTime();
    // });


    return (
        <Hero>
            {slides.map((slide, index) => (
                <Slide bgUrl={slide.image} active={index === activeSlide}>
                    <Slide.Content>
                        <Slide.Title>Sacramento's Premier Automotive Detailing Service</Slide.Title>
                        {slide.button &&
                            <button>
                                <Link href={slide.button.url}>
                                    {slide.button.text}
                                    <FontAwesomeIcon icon={slide.button.icon} />
                                </Link>
                            </button>
                        }
                    </Slide.Content>
                </Slide>
            ))}
        </Hero>
    );
}