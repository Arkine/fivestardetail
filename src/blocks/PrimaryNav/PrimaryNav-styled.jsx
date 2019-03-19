import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    margin: 1rem 0;

    background-color: rgba(255,255,255,.1);
    box-shadow: 0 0 1px 1px rgba(0,0,0,.5);
    border-radius: 10px;

    li {
        position: relative;
        list-style: none;

        &:hover {
            nav {
                display: block;
            }
            > a {
                color: ${props => props.theme.colors.cobalt};
            }
        }
    }
`;

Nav.Subnav = styled.nav`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;

    width: 245px;

    background-color: ${props => props.theme.colors.oil};

    display: none;
`;

Nav.Link = styled(Link)`
    display: block;
    
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    
    padding: 1rem;
`;