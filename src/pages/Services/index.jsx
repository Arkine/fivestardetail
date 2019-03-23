import React from 'react';

import Page from '../Page';

import {
    Section,
    Card
} from '../styled';

import {
    menuItems
} from '../../blocks/PrimaryNav/menu';

const services = menuItems.find(item => item.label === 'Services');

export default class Services extends React.PureComponent {
    render() {
        return (
            <Page title="Services">
                <Section.Row>
                    <Section.FlexRow>
                        {services.children.map(service => (     
                            <Card.Image to={service.url} key={`service-${service.label}`}>
                                <Card.BackgroundImage bgUrl={service.featuredImage.src} />
                                <Card.ImageText>{service.label}</Card.ImageText>
                            </Card.Image>
                        ))}
                        <Card.Image dummy />
                        <Card.Image dummy />
                    </Section.FlexRow>
                </Section.Row>
            </Page>
        )
    }
}