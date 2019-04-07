import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    margin: 1rem 0;

    background-color: ${props => props.theme.colors.smoke};
    box-shadow: 0 0 1px 1px rgba(0,0,0,.5);
    border-radius: 10px;
    
    /*
        First level nav items
    */
    > li {
        > a {
            &.is-active {
                color: ${props => props.theme.colors.cobalt};
            }
        }
    }
    /*
        General nav items
    */
    li {
        position: relative;
        list-style: none;
        cursor: pointer;

        &:hover {
            nav {
                display: block;
            }
            > a {
                background-color: ${props => props.theme.colors.cobalt};
                color: #fff;
                border-bottom: 2px inset solid ${props => props.theme.colors.cobalt};
            }
        }

        a {
            cursor: pointer;
            line-height: 1.2;
        }
    }
`;

Nav.Subnav = styled.nav`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;

    width: 245px;

    /* background-color: ${props => props.theme.colors.oil}; */
    background-color: rgba(0,0,0,0.8);
    border-bottom: 3px solid ${props => props.theme.colors.cobalt};

    display: none;

    a {
        &.is-active {
            background-color: ${props => props.theme.colors.cobalt};
            color: #fff;
        }

        &:hover {
            color: #fff;
        }
    }
`;

Nav.Link = styled(NavLink)`
    display: block;
    
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    
    padding: 1rem;

    box-sizing: border-box;

    &:hover {
        background-color: #333;
    }
`;