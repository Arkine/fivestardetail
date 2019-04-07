import React from 'react';

import Single from '../Single';

import {
    Row 
} from '../../blocks/General-Styled';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'SeaDek');

export default () => {
    return (
        <Single title="SeaDek" bgUrl={service.featuredImage.src}>
            <Row>
                <p>Durable and shock absorbent, SeaDek provides not only an exceptional traction surface but also lessens the fatigue brought on by prolonged standing and working on hard decking and platforms. SeaDek also protects your deck from scratching, chipping and dents. Fishermen will appreciate SeaDek’s noise reducing qualities.</p>

                <p>SeaDek is manufactured in the United States from nonabsorbent, closed cell EVA material specifically formulated for marine applications. Sports & commercial fishing, flats boats, sailboats, ski boats, commercial marine, house boat, personal water craft, platforms and steps are just a few of the unlimited applications for SeaDek Non-Skid Marine Traction.</p>
            </Row>
        </Single>
    );
}