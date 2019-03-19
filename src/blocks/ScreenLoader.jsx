import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    background-color: orange;

    height: 100%;
    width: 100%;
`;

export default class Loading extends React.PureComponent {
    render() {
        return (
            <Container>
                <Logo />
            </Container>
        );
    }
}