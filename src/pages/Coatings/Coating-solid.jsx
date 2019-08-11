import React from 'react';

import Single from '../Single';
import TabNavigator from '../../blocks/TabNavigator';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';


import {
    tabs,
    OneYearPackage,
    TwoYearPackage,
    FiveYearPackage,
    WheelsOffPackage,
    InteriorPackage
} from './data/solid.js';

const coatings = menuItems.find(item => item.label === 'Ceramic Coatings');
const coating = coatings.children.find(item => item.label === 'SOLID. Coatings');

export default () => {
    return (
        <Single title={coating.label} bgUrl={coating.featuredImage.src}>
            <TabNavigator
                tabs={tabs}
            >
                <OneYearPackage />
                <TwoYearPackage />
                <FiveYearPackage />
                <WheelsOffPackage />
                <InteriorPackage />
            </TabNavigator>
        </Single>
    );
}