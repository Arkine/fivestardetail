import React from 'react';

import Page from '../Page';

import {
    Section,
    Card
} from '../styled';

import {
    menuItems
} from '../../blocks/PrimaryNav/menu';

const coatings = menuItems.find(item => item.label === 'Ceramic Coatings');

export default class Coatings extends React.PureComponent {
    render() {
        return (
            <Page title="Coatings">
                <Section.Row>
                    <Section.FlexRow>
                        {coatings.children.map(coating => {
                            if (coating.featuredImage.type === 'image') {
                                return (
                                    <Card.LogoWrapper to={coating.url} key={`coating-${coating.label}`}>
                                        <Card.Logo src={coating.featuredImage.src} />
                                    </Card.LogoWrapper>
                                );
                            } else {
                                return (
                                    <Card.Image to={coating.url} bgUrl={coating.featuredImage.src} key={`coating-${coating.label}`}>
                                        <Card.ImageText>{coating.label}</Card.ImageText>
                                    </Card.Image>
                                );
                            }
                        })}
                        <Card.Image dummy />
                        <Card.Image dummy />
                    </Section.FlexRow>
                </Section.Row>
            </Page>
        )
    }
}