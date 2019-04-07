import React from 'react';

import Single from '../Single';
import ServiceDetails from '../../blocks/ServiceDetails';

import BoatData from '../Services/data/boats';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Boat Detailing');

export default () => {
    return (
        <Single title="Boat Detailing" bgUrl={service.featuredImage.src}>
            <ServiceDetails 
                services={BoatData}
            />
        </Single>
    );
}