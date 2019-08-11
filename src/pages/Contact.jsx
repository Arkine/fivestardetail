import React from 'react';

import Page from './Page';

import {
    Section
} from './styled';

class ContactPage extends React.PureComponent {
    render() {
        return (
            <Page title="Contact Us">
                <Section>
                    <Section.Row>
                        <Section.Inner>
                            <form action="mailto:slyngstad55@gmail.com" method="post" enctype="text/plain">
                                <label htmlFor="name">
                                    Name
                                    <input type="text" name="name" />
                                </label>
                                <label htmlFor="email">
                                    Email
                                    <input type="email" name="email" />
                                </label>
                                <label htmlFor="phone">
                                    Phone
                                    <input type="phone" name="phone" />
                                </label>
                                <label htmlFor="message">
                                    Message
                                    <textarea name="message" />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </Section.Inner>
                    </Section.Row>
                </Section>
            </Page>
        )
    }
}

export default ContactPage;