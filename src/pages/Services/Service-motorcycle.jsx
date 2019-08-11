import React from 'react';

import Single from '../Single';

import TabNavigator from '../../blocks/TabNavigator';

import {
    tabs,
    Detailing,
    AddOns
} from './data/motorcycle';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Motorcycle Detailing');

export default () => {
    return (
        <Single title="Motorcycle Detailing" bgUrl={service.featuredImage.src}>
            <TabNavigator 
                tabs={tabs}
            >
                <Detailing />
                <AddOns />
            </TabNavigator>
        </Single>
    );
}