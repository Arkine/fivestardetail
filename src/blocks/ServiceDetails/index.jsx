import React from 'react';

import {
    FlexRow,
    Row
} from '../General-Styled';

import {
    Container,
} from './styled';

export default class ServiceDetails extends React.PureComponent {
    render() {
        return (
            <Container>
                <Row>
                    <FlexRow>
                    {this.props.services.map(service => (
                        <FlexRow.Card>
                            <FlexRow.Card.Title>{service.title}</FlexRow.Card.Title>
                            <FlexRow.Card.List>
                                {service.services.map(serviceType => (
                                    <FlexRow.Card.ListItem>{serviceType.label}</FlexRow.Card.ListItem>
                                ))}
                            </FlexRow.Card.List>
                        </FlexRow.Card>
                    ))}
                    </FlexRow>
                </Row>
            </Container>
        );
    }
}