import autoDetailing from '../../assets/mercedes-car.jpg';
import exoticsDetailing from '../../assets/exotics.jpg';
import boatDetailing from '../../assets/boat.jpg';

import FeynLab from '../../assets/feynlab-logo.png';
import Solid from '../../assets/solid-logo.png'

export const menuItems = [
    {
        label: 'Services',
        url: '/services',
        featuredImage: '',
        children: [
            {
                label: 'Automotive Detailing',
                url: '/services/automotive-detailing',
                featuredImage: {
                    src: autoDetailing,
                    type: 'background'
                },
            },
            {
                label: 'Exotics Detailing',
                url: '/services/exotics-detailing',
                featuredImage: {
                    src: exoticsDetailing,
                    type: 'background'
                },
            },
            {
                label: 'Boat Detailing',
                url: '/services/boat-detailing',
                featuredImage: {
                    src: boatDetailing,
                    type: 'background'
                },
            }
        ]
    },
    {
        label: 'Ceramic Coatings',
        url: '/ceramic-coatings',
        featuredImage: '',
        children: [
            {
                label: 'FEYNLAB Coatings',
                url: '/coatings/feynlab-coatings',
                featuredImage: {
                    src: FeynLab,
                    type: 'image'
                },
            },
            {
                label: 'SOLID. Coatings',
                url: '/coatings/solid-coatings',
                featuredImage: {
                    src: Solid,
                    type: 'image'
                },
            }
        ]
    },
    {
        label: 'About',
        url: '/about',
        featuredImage: '',
    },
    {
        label: 'Gallery',
        url: '/gallery',
        featuredImage: '',
    },
    {
        label: 'Affiliates',
        url: '/affiliates',
        featuredImage: '',
    },
    {
        label: 'Contact',
        url: '/contact',
        featuredImage: '',
    }
];