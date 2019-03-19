import slide1 from '../../assets/ferrari.jpg';
import slide2 from '../../assets/red_ferrari.jpg';

import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export const slides = [
    {
        image: slide1,
        button: {
            text: 'View Our Services',
            icon: faArrowRight,
            url: '/services'
        }
 
    },
     {
         image: slide2
     }
 ];