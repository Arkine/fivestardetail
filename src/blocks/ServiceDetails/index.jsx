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
                                <React.Fragment>
                                    {service.services.map((serviceType, i) => (
                                        <FlexRow.Card.ListItem key={`service-type-${i}`}>{serviceType.label}</FlexRow.Card.ListItem>
                                    ))}
                                    {service.note && 
                                        <FlexRow.Row>
                                            {service.note}
                                        </FlexRow.Row>
                                    }
                                </React.Fragment>
                            </FlexRow.Card.List>
                        </FlexRow.Card>
                    ))}
                    </FlexRow>
                </Row>
            </Container>
        );
    }
}