import React from 'react';

import Single from '../Single';
import ServiceDetails from '../../blocks/ServiceDetails';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

import servicesData from '../Services/data/automotive';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Automotive Detailing');

export default () => {
    return (
        <Single title={service.label} bgUrl={service.featuredImage.src}>
            <ServiceDetails 
                services={servicesData}
            />
        </Single>
    );
}