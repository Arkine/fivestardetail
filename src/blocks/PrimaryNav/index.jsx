import React from 'react';

import {
    Nav
} from './PrimaryNav-styled';

import {menuItems} from './menu.js';



export default () => {
    return (
        <Nav>
            {menuItems.map(item => (
                <li>
                    <Nav.Link 
                        key={`nav-item-${item.label}`}
                        to={item.url}
                    >
                        {item.label}
                    </Nav.Link>
                    {item.children && 
                        <Nav.Subnav>
                            {item.children.map(child => (
                                <Nav.Link
                                    key={`nav-item-${child.label}`}
                                    to={child.url}
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