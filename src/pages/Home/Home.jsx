import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faCaretRight} from '@fortawesome/free-solid-svg-icons';

import Interior from '../../assets/interior.jpg';

import Page from '../Page';

import Hero from '../../blocks/Hero';
import Map from '../../blocks/Map';
import {menuItems} from '../../blocks/PrimaryNav/menu';

import {
    Section,
    Content,
    Card,
    Li
} from '../styled';

import {
    Button
} from '../../app-styled.js';

const services = menuItems.find(item => item.label === 'Services');
const contact = menuItems.find(item => item.label === 'Contact');

const coatings = menuItems.find(item => item.label === 'Ceramic Coatings');
const auto = services.children.find(item => item.label === 'Automotive Detailing');
const boat = services.children.find(item => item.label === 'Boat Detailing');

export default class HomePage extends React.Component {
    render() {
        return (
            <Page>
                <Hero />
                <Content>
                    <Section>
                        <Section.Background>
                            <Section.Row>
                                <Section.Header>Our Services</Section.Header>
                                <Section.FlexRow>
                                    <Card>
                                        <Card.Header bgUrl={auto.featuredImage.src}/>
                                        <Card.Body>
                                            <ul>
                                                <Li>
                                                    Quick Detail
                                                </Li>
                                                <Li>
                                                    Selling My Car Detail
                                                </Li>
                                                <Li>
                                                    Five Star Detail
                                                </Li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button.Link>
                                                <Link to={auto.url}>Automotive Detailing</Link>  
                                                <FontAwesomeIcon icon={faArrowRight} /> 
                                            </Button.Link>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <Card.Header bgUrl={coatings.featuredImage.src} />
                                        <Card.Body>
                                            <ul>
                                                <Li>
                                                     FEYNLAB Coating
                                                </Li>
                                                <Li>
                                                    SOLID. Coating
                                                </Li>
                                                <Li>
                                                    Full Strenth Protection
                                                </Li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button.Link>
                                                <Link to={coatings.url}>Ceramic Coatings</Link>
                                                <FontAwesomeIcon icon={faArrowRight} /> 
                                            </Button.Link>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <Card.Header bgUrl={boat.featuredImage.src} />
                                        <Card.Body>
                                            <ul>
                                                <Li>
                                                    Exterior Detail
                                                </Li>
                                                <Li>
                                                Interior Detail
                                                </Li>
                                                <Li>
                                                    Full Detail
                                                </Li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button.Link>
                                                <Link to={boat.url}>Boat Detailing</Link>
                                                <FontAwesomeIcon icon={faArrowRight} /> 
                                            </Button.Link>
                                        </Card.Footer>
                                    </Card>
                                </Section.FlexRow>
                            </Section.Row>
                            <Section.FlexRow justify="center" style={{marginTop: '2rem'}}>
                                <Button.Link secondary>
                                    <Link to={services.url}>View Our Services</Link>
                                </Button.Link>
                            </Section.FlexRow>
                        </Section.Background>
                    </Section>
                    <Section bgUrl={Interior}>
                        <Section.Overlay />
                        <Section.Row>
                            <Section.Inner>
                                <Section.FlexRow alignItems="flex-start">
                                    <Section.Column>
                                        <h2>Professional Quality</h2>
                                        <p>
                                        Professional and committed to our work, Five Star Detailing & Restoration offers the best in detailing and restoration. We proudly offer a wide range of professional services for cars, trucks, motorcycles, boats, SUVs, RVs and even aircraft! What sets us apart from other detailing & restoration services is our knowledge and use of high-quality materials and equipment to ensure that your vehicle looks it's best. Our professional detailing leaves no streaks or mineral deposits and gives your vehicle a mirror-like shine, guaranteed!
                                        </p>
                                    </Section.Column>
                                    <Section.Column>
                                        <ul>
                                            <Li><strong>Paint Application and Restoration</strong></Li>
                                            <Li><strong>Coating Application</strong></Li>
                                            <Li><strong>Upholstery Cleaning</strong></Li>
                                            <Li><strong>Window Tint Application and Removal</strong></Li>
                                            <Li><strong>Clear Bra Application</strong></Li>
                                            <Li><strong>Vehicle Restyling</strong></Li>
                                            <Li><strong>Oxidation Removal</strong></Li>
                                            <Li><strong>Graphics Design</strong></Li>
                                        </ul>
                                    </Section.Column>
                                </Section.FlexRow>
                                <Section.FlexRow justify="center" style={{marginTop: '2rem'}}>
                                    <Button.Link secondary>
                                        <Link to={contact.url}>Get Started Today</Link>
                                    </Button.Link>
                                </Section.FlexRow>
                            </Section.Inner>
                        </Section.Row>
                    </Section>
                </Content>
                <Map />
            </Page>
        );
    }
}