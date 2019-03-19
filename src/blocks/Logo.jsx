import React, {useState} from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export default () => {

    return (
        <Container>
            <a href="/">
                <img src={logo} />
            </a>
        </Container>
    );
}