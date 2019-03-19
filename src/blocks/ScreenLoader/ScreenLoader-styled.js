
import styled, {keyframes} from 'styled-components';

const fade = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        visibility: hidden;
    }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 25;

    /* opacity: ${props => props.display ? 1: 0}; */
    animation: ${fade} 2s ease-in-out forwards;
    animation-delay: 1.5s;
   

    background-color: ${props => props.theme.colors.oil};
    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    height: 100%;
    width: 100%;
`;

Container.LoadingIcon = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 25;
`;
