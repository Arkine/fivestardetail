import React from 'react';

import Single from '../Single';
// import ServiceDetails from '../../blocks/ServiceDetails';
import TabNavigator from '../../blocks/TabNavigator';

import {
    tabs,
    ExteriorDetail,
    InteriorDetail,
    FullDetail,
    AddOns
} from './data/boats';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Boat Detailing');

export default () => {
    return (
        <Single title="Boat Detailing" bgUrl={service.featuredImage.src}>
            <TabNavigator 
                tabs={tabs}
            >
                <ExteriorDetail />
                <InteriorDetail />
                <FullDetail />
                <AddOns />
            </TabNavigator>
        </Single>
    );
}