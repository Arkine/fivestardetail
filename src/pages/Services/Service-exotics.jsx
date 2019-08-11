import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import Single from '../Single';

import {
    Row
} from '../../blocks/General-Styled';

import { 
    menuItems
} from '../../blocks/PrimaryNav/menu';

import {
    Button
} from '../../app-styled.js'

const services = menuItems.find(item => item.label === 'Services');
const service = services.children.find(item => item.label === 'Exotics Detailing');

export default () => {
    return (
        <Single title="Exotics Detailing" bgUrl={service.featuredImage.src}>
            <Row>
                <p>
                When it comes to Detailing Exotic Cars, only a Professional Detail will ensure that your vehicle stays pristine and hold its mirror-like shine. Five Star Detailing & Restoration only uses the Highest Quality Products and Equipment combined with a Professional Understanding of how to properly care for your Hi-End vehicle for a Long Lasting Shine and Superior Protection.
                </p>
            </Row>
            <Row>
                <Button.Link>
                    <Link to='/contact'>Call For a Quote</Link>  
                    <FontAwesomeIcon icon={faArrowRight} /> 
                </Button.Link>
            </Row>
            
        </Single>
    );
}