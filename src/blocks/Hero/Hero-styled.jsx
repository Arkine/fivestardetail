import styled from 'styled-components';

export const Hero = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
`;

export const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    opacity: ${props => props.active ? 1 : 0};

    transition: all 3s ease-in-out;

    height: 100%;
    width: 100%;

    background-color: #fff;
    background: url(${props => props.bgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;