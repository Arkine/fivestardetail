import React from 'react';

import Page from './Page';

import {
    Section,
    Form
} from './styled';

class ContactPage extends React.PureComponent {
    constructor(props){
        super(props);
        
        this.state = {
           form: {
                name: null,
                email: null,
                phone: null,
                message: null
            }
        }
    }

    handleFormSubmit = async e => {
        e.preventDefault();
        
        this.setState({
            loading: true
        });

        try {
            const resp = await fetch({
                method: 'POST',
                url: '/.netlify/functions/mailgun',
                data:(JSON.stringify(this.state))
            });

            if (!resp.ok) {
                throw new Error(resp.message)
            }

            const data = resp.json();
            console.log({data})
        } catch(e) {
            console.error('Form submit error', e);
            this.setState({
                error: e
            });
        } finally {
            this.setState({
                loading: false
            });
        }
       
    }

    handleFieldChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <Page title="Contact Us">
                <Section>
                    <Section.Row>
                        <Section.Inner>
                            <Form method="post" enctype="text/plain">
                                <div>
                                    <div>
                                        <Form.Label htmlFor="name">
                                            Name
                                            <Form.Input onChange={this.handleFieldChange} type="text" name="name" placeholder="Name" />
                                        </Form.Label>
                                        <Form.Label htmlFor="email">
                                            Email
                                            <Form.Input onChange={this.handleFieldChange} type="email" name="email" placeholder="Email" />
                                        </Form.Label>
                                        <Form.Label htmlFor="phone">
                                            Phone
                                            <Form.Input onChange={this.handleFieldChange} type="phone" name="phone" placeholder="Phone" />
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label htmlFor="message">
                                            Message
                                            <Form.TextArea onChange={this.handleFieldChange} name="message" placeholder="Message" />
                                        </Form.Label>
                                    </div>
                                </div>
                                <Form.Button type="submit" onClick={this.handleFormSubmit}>Submit</Form.Button>
                            </Form>
                        </Section.Inner>
                    </Section.Row>
                </Section>
            </Page>
        )
    }
}

export default ContactPage;