import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Lambo from '../../assets/dark_lambo.jpg';

import {Container} from './ScreenLoader-styled.js';
import Loading from '../Loading';


export default class ScreenLoader extends React.PureComponent {
    render() {
        return (
            <Container bgUrl={Lambo}>
                <Logo />
                <Container.LoadingIcon>
                    <Loading />
                </Container.LoadingIcon>
            </Container>
        );
    }
}