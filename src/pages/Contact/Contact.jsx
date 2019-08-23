import React from 'react';

import Page from '../Page';

import {
    Section,
    Form
} from '../styled';

import {
    Panel,
    ContactForm 
} from './Contact-styled';

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
                            <Section.FlexRow>
                                <Section.Column>
                                    <Panel>
                                        <h2>Get In Touch</h2>
                                        <div>
                                            <p>Etiam accumsan porttitor turpis, vitae aliquam ipsum posuere at. Donec enim erat, gravida nec tellus id, efficitur iaculis nulla. Aliquam dolor eros, bibendum ut fermentum id, viverra eget libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean finibus, nibh quis vehicula aliquet, magna orci convallis orci, non ultrices est arcu et tellus. In molestie nisi nibh, in egestas ante scelerisque at. Curabitur porta ipsum eget tempus molestie. Proin faucibus, nulla et interdum tempus, neque augue tempus ligula, in ullamcorper lacus sem ac lectus. Ut sit amet lorem eget neque accumsan sollicitudin eu ac mi. Mauris pellentesque fermentum fermentum. Quisque cursus posuere metus nec tincidunt. Proin lacinia sapien sapien, et varius dolor placerat at.</p>
                                        </div>
                                    </Panel>
                                </Section.Column>
                                <Section.Column>
                                    <Panel>
                                        <ContactForm method="post" enctype="text/plain">
                                            <Form.Section>
                                                <Form.Label htmlFor="name">Name</Form.Label>
                                                <Form.Input onChange={this.handleFieldChange} 
                                            type="text" name="name" placeholder="Name" />
                                            </Form.Section>
                                            <Form.Section>
                                                <Form.Label htmlFor="email">Email</Form.Label>
                                                <Form.Input onChange={this.handleFieldChange} type="email" name="email" placeholder="Email" />
                                            </Form.Section>
                                            <Form.Section>
                                                <Form.Label htmlFor="phone">Phone</Form.Label>
                                                <Form.Input onChange={this.handleFieldChange} 
                                            type="phone" name="phone" placeholder="Phone" />
                                            </Form.Section>
                                            <Form.Section>
                                                <Form.Label htmlFor="message">Message</Form.Label>
                                                <Form.TextArea onChange={this.handleFieldChange} name="message" placeholder="Message" />
                                            </Form.Section>
                                            <Form.Button type="submit" onClick={this.handleFormSubmit}>Submit</Form.Button>
                                        </ContactForm>
                                    </Panel>
                                </Section.Column>
                            </Section.FlexRow>
                        </Section.Inner>
                    </Section.Row>
                </Section>
            </Page>
        )
    }
}

export default ContactPage;