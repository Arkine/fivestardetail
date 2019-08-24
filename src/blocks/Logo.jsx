import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import logo from '../assets/logo.svg';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    margin-top: 2rem;
`;

export default () => {

    return (
        <Container>
            <Link to="/">
                <img src={logo} />
            </Link>
        </Container>
    );
}