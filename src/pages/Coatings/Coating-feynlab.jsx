import React from 'react';

import Single from '../Single';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';
import TabNavigator from '../../blocks/TabNavigator';

import {
    tabs,
    InteriorPackage,
    WheelsOffPackage,
    CeramicLite,
    CeramicPackage,
    CeramicPlus,
    HealLitePackage,
    HydroMarinePackage
} from './data/feynlab';

const coatings = menuItems.find(item => item.label === 'Ceramic Coatings');
const coating = coatings.children.find(item => item.label === 'FEYNLAB Coatings');

export default () => {
    return (
        <Single title={coating.label} bgUrl={coating.featuredImage.src}>
        <TabNavigator 
            tabs={tabs}
        >
            <InteriorPackage />
            <WheelsOffPackage />
            <CeramicPackage />
            <CeramicLite />
            <CeramicPlus />
            <HealLitePackage />
            <HydroMarinePackage />
        </TabNavigator>
        </Single>
    );
}