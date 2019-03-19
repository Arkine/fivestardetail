export const menuItems = [
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'Services',
        url: '/services',
        children: [
            {
                label: 'Automotive Detailing',
                url: '/services/automotive-detailing',
            },
            {
                label: 'Exotics Detailing',
                url: '/services/exotics-detailing',
            },
            {
                label: 'Boat Detailing',
                url: '/services/boat-detailing',
            }
        ]
    },
    {
        label: 'Ceramic Coating',
        url: '/ceramic-coatings',
        children: [
            {
                label: 'FEYNLAB Coatings',
                url: '/coatings/feynlab-coatings',
            },
            {
                label: 'SOLID. Coatings',
                url: '/coatings/solid-coatings',
            }
        ]
    },
    {
        label: 'About',
        url: '/about'
    },
    {
        label: 'Gallery',
        url: '/gallery'
    },
    {
        label: 'Affiliates',
        url: '/affiliates'
    },
    {
        label: 'Contact',
        url: '/contact'
    }
];