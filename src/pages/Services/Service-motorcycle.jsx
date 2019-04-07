import React from 'react';

import Single from '../Single';
import ServiceDetails from '../../blocks/ServiceDetails';

import MotorcycleData from '../Services/data/motorcycle';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Motorcycle Detailing');

export default () => {
    return (
        <Single title="Motorcycle Detailing" bgUrl={service.featuredImage.src}>
            <ServiceDetails 
                services={MotorcycleData}
            />
        </Single>
    );
}