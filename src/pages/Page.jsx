import React from 'react';

import {
    Section
} from './styled';

export default (props) => {
    return (
        <div>
             <Section>
             {props.title && 
                <Section.Row>
                   <Section.PageTitle>{props.title}</Section.PageTitle>
                </Section.Row>
             }
                {props.children}
            </Section>
        </div>
    )
}