import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';

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

        this._form = React.createRef();
    }

    handleFormSubmit = async e => {
        if (!this._form.current) {
            return;
        }

        e.preventDefault();
        
        this.setState({
            loading: true
        });

        try {
            const resp = await fetch('/.netlify/functions/mailgun',{
                method: 'POST',
                data: new FormData(this._form.current)
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
                            <Section.FlexRow alignItems="flex-start">
                                <Section.Column>
                                    <Panel>
                                        <div>
                                            <p>Have questions? Feel free to contact us and we will try to get back to you as soon as we can.</p>
                                            <Panel.Row>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                <span><a href="https://www.google.com/maps/place/9477+Greenback+Ln,+Folsom,+CA+95630/@38.6790369,-121.2014992,17z/data=!3m1!4b1!4m5!3m4!1s0x809ae136c7ea705f:0x6e64b48977781fd3!8m2!3d38.6790327!4d-121.1993105">9477 Greenback Ln Folsom CA 95630</a></span>
                                            </Panel.Row>
                                            <Panel.Row>
                                                <FontAwesomeIcon icon={faPhone} />
                                                <span><a href="tel:5303914329">(530).391.4329</a></span>
                                            </Panel.Row>
                                        </div>
                                    </Panel>
                                </Section.Column>
                                <Section.Column>
                                    <Panel>
                                        <ContactForm ref={this._form} method="post" data-netlify="true">
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