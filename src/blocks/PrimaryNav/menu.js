import autoDetailing from '../../assets/mercedes-car.jpg';
import exoticsDetailing from '../../assets/exotics.jpg';
import boatDetailing from '../../assets/boat.jpg';
import motorcycleDetailing from '../../assets/motorcycle.jpg';
import rvDetailing from '../../assets/rv-banner.jpg';
import seaDek from '../../assets/seadek.jpg';

import FeynLab from '../../assets/feynlab-logo.png';
import FeynLabBottle from '../../assets/feynlab-bottle.jpg';
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
                description: "",
                featuredImage: {
                    src: autoDetailing,
                    type: 'background'
                },
            },
            {
                label: 'Exotics Detailing',
                url: '/services/exotics-detailing',
                description: "",
                featuredImage: {
                    src: exoticsDetailing,
                    type: 'background'
                },
            },
            {
                label: 'Boat Detailing',
                url: '/services/boat-detailing',
                description: "",
                featuredImage: {
                    src: boatDetailing,
                    type: 'background'
                },
            },
            {
                label: 'Motorcycle Detailing',
                url: '/services/motorcycle-detailing',
                description: "",
                featuredImage: {
                    src: motorcycleDetailing,
                    type: 'background'
                },
            },
            {
                label: 'RV Detailing',
                url: '/services/rv-detailing',
                description: "",
                featuredImage: {
                    src: rvDetailing,
                    type: 'background'
                },
            },
            {
                label: 'SeaDek',
                url: '/services/seadek',
                description: "",
                featuredImage: {
                    src: seaDek,
                    type: 'background'
                },
            }
        ]
    },
    {
        label: 'Ceramic Coatings',
        url: '/ceramic-coatings',
        featuredImage: {
            src: FeynLabBottle,
            type: 'background'
        },
        children: [
            {
                label: 'FEYNLAB Coatings',
                url: '/ceramic-coatings/feynlab-coatings',
                featuredImage: {
                    src: FeynLab,
                    type: 'image'
                },
            },
            {
                label: 'SOLID. Coatings',
                url: '/ceramic-coatings/solid-coatings',
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
    // {
    //     label: 'Gallery',
    //     url: '/gallery',
    //     featuredImage: '',
    // },
    // {
    //     label: 'Affiliates',
    //     url: '/affiliates',
    //     featuredImage: '',
    // },
    {
        label: 'Contact',
        url: '/contact',
        featuredImage: '',
    },
];