import React from 'react';
import styled from 'styled-components';

import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';

const Icon = styled.img`
    height: 65px;
    width: 65px;
`;

export const socialMediaItems = [
    {
        label: 'Facebook',
        url: 'https://www.facebook.com/Fivestardetailrestoration/',
        icon: <Icon src={Facebook} />
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/five_star_detail_restoration/',
        icon: <Icon src={Instagram} />
    }
];