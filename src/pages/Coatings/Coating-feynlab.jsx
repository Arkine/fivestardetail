import React from 'react';

import Single from '../Single';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const coatings = menuItems.find(item => item.label === 'Ceramic Coatings');
const coating = coatings.children.find(item => item.label === 'FEYNLAB Coatings');

export default () => {
    return (
        <Single title={coating.label} bgUrl={coating.featuredImage.src}>

        </Single>
    );
}