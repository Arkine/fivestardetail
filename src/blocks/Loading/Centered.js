import React from 'react';
import styled from 'styled-components';

import Loading from './index.jsx';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;

export default () => {
    return (
        <Container>
            <Loading />
        </Container>
    )
}