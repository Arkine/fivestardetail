import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';

import {
    Footer
} from './Footer-styled';

import {menuItems} from '../PrimaryNav/menu';
import {socialMediaItems} from '../SocialMedia/items';

export default () => {
    return (
        <Footer>
            <Footer.Columns>
                <Footer.Col>
                    <Footer.Nav>
                        {menuItems.map(item => (
                            <li>
                                <Footer.Link to={item.url}>{item.label}</Footer.Link>
                            </li>
                        ))}
                    </Footer.Nav>
                </Footer.Col>
                <Footer.Col flexGrow={1}>
                    <Footer.Address>
                        <div>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>9477 Greenback Ln Folsom CA 95630</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <span><a href="tel:530.391.4329">(530).391.4329</a></span>
                        </div>
                    </Footer.Address>

                    <p>
                        Our Mobile Detail Service Handles the greater Sacramento area including Placerville, Cameron Park, Folsom, El Dorado Hills, Rancho Cordova, Carmichael, Granite Bay, Citrus Heights, Lincoln, Rocklin, Roseville, Orangevale, Auburn, and Elk Grove and everywhere in between!
                    </p>
                </Footer.Col>
                <Footer.Col>
                    <Footer.SocialMedia>
                        {socialMediaItems.map(item => (
                            <Footer.SocialIcon href={item.url}>
                                {item.icon}
                            </Footer.SocialIcon>
                        ))}
                    </Footer.SocialMedia>
                </Footer.Col>
            </Footer.Columns>
            <Footer.Copyright>{'\u00A9'} {new Date().getFullYear()} Five Star Detailing.  All Rights Reserved</Footer.Copyright>
        </Footer>
    )
}