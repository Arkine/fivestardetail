import React from 'react';

import Single from '../Single';
import TabNavigator from '../../blocks/TabNavigator';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

import {
    tabData,
    InteriorDetail,
    ExteriorDetail,
    FullDetail,
    QuickDetail,
    SellingMyCarDetail,
    FiveStarDetail,
    PaintCorrection,
    Addons,
    Upcharges
} from './data/automotive'

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Automotive Detailing');

export default () => {
    return (
        <Single title={service.label} bgUrl={service.featuredImage.src}>
            <TabNavigator 
                tabs={tabData}
            >
                <ExteriorDetail />
                <InteriorDetail />
                <FullDetail />
                <QuickDetail />
                <SellingMyCarDetail />
                <FiveStarDetail />
                <PaintCorrection />
                <Addons />
                <Upcharges />
            </TabNavigator>
        </Single>
    );
}