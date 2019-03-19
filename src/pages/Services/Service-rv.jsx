import React from 'react';

import Single from '../Single';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'RV Detailing');

export default () => {
    return (
        <Single title="RV Detailing" bgUrl={service.featuredImage.src}>
            
        </Single>
    );
}