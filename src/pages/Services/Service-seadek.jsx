import React from 'react';

import Single from '../Single';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'SeaDek');

export default () => {
    return (
        <Single title="SeaDek" bgUrl={service.featuredImage.src}>
            
        </Single>
    );
}