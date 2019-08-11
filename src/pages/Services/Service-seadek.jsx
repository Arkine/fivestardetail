import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import {
    Button
} from '../../app-styled';
import Single from '../Single';

import {
    Row,
    Section
} from '../../blocks/General-Styled';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'SeaDek');

export default () => {
    return (
        <Single title="SeaDek" bgUrl={service.featuredImage.src}>
            <Section>
                <Row>
                    <p>Durable and shock absorbent, SeaDek provides not only an exceptional traction surface but also lessens the fatigue brought on by prolonged standing and working on hard decking and platforms. SeaDek also protects your deck from scratching, chipping and dents. Fishermen will appreciate SeaDek’s noise reducing qualities.</p>

                    <p>SeaDek is manufactured in the United States from nonabsorbent, closed cell EVA material specifically formulated for marine applications. Sports & commercial fishing, flats boats, sailboats, ski boats, commercial marine, house boat, personal water craft, platforms and steps are just a few of the unlimited applications for SeaDek Non-Skid Marine Traction.</p>
                </Row>
                <Row>
                    <Button.Link>
                        <Link to='/contact'>Call For a Quote</Link>  
                        <FontAwesomeIcon icon={faArrowRight} /> 
                    </Button.Link>
                </Row>
            </Section>
        </Single>
    );
}