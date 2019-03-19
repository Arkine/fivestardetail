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
                            <span><a href="https://www.google.com/maps/place/9477+Greenback+Ln,+Folsom,+CA+95630/@38.6790369,-121.2014992,17z/data=!3m1!4b1!4m5!3m4!1s0x809ae136c7ea705f:0x6e64b48977781fd3!8m2!3d38.6790327!4d-121.1993105">9477 Greenback Ln Folsom CA 95630</a></span>
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