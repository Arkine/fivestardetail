import React from 'react';

import {
    Nav
} from './PrimaryNav-styled';

import {menuItems} from './menu.js';

function urlContains(url, itemUrl) {
    if (window.location.pathname === '/') {
        return false;
    }
    return url.indexOf(itemUrl) > -1;
}



export default (props) => {
    console.log(props)
    return (
        <Nav>
            {menuItems.map(item => (
                <li>
                    <Nav.Link 
                        key={`nav-item-${item.label}`}
                        to={item.url}
                        activeClassName='is-active'
                    >
                        {item.label}
                    </Nav.Link>
                    {item.children && 
                        <Nav.Subnav>
                            {item.children.map(child => (
                                <Nav.Link
                                    key={`nav-item-${child.label}`}
                                    to={child.url}
                                    activeClassName='is-active'
                                >
                                    {child.label}
                                </Nav.Link>
                            ))}
                        </Nav.Subnav>
                    }
                </li>
            ))}
        </Nav>
    );
}