import React from 'react';

import {
    Section,
    NotFound
} from '../styled';

import Page from '../Page';

export default () => {
    return (
        <Page>
            <Section.FlexRow justify="center">
                <NotFound>
                    <span>404: Page Not Found</span>
                </NotFound>
            </Section.FlexRow>
        </Page>
    )
}