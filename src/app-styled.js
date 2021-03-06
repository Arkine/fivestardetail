import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Body = styled.div`
    width: 100%;
    height: 100%;
`;

Body.Header = styled.header`
    max-width: ${props => props.theme.widths.row};
    margin: 0 auto;
`;

Body.Main = styled.main`
    min-height: 400px;
`;

Body.Footer = styled.div``;

export const Button = styled.button`
    color: #fff;
    background-color: ${props => props.theme.colors.cobalt};
`;

Button.Link = styled.button`
    background-color: transparent;
    padding: 0;
    margin-top: 1rem;

    transition: all 0.2s ease-in-out;

    a {
        padding: 1rem 0;
        height: 100%;
    }

    svg {
        margin-left: 1rem;
        color: ${props => props.theme.colors.cobalt};
    }

    ${props => props.secondary && `
        padding: 1rem 1.25rem;
        background-color: ${props.theme.colors.cobalt};
        a {
            color: #fff;
        }

         &:hover {
            background-color: ${props => props.theme.colors.cobaltDark};
        }
    `}
`;