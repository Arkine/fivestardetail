import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faCaretRight} from '@fortawesome/free-solid-svg-icons';

import Interior from '../assets/interior.jpg';

import Page from './Page';

import Hero from '../blocks/Hero';
import Map from '../blocks/Map';

import {menuItems} from '../blocks/PrimaryNav/menu';

import {
    Section,
    Content,
    Card
} from './styled';

import {
    Button
} from '../app-styled.js';

const services = menuItems.find(item => item.label === 'Services');
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
                                <Section.Header>Services</Section.Header>
                                <Section.FlexRow>
                                    <Card>
                                        <Card.Header bgUrl={auto.featuredImage.src}/>
                                        <Card.Body>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> Quick Detail
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> Selling My Car Detail
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> Five Star Detail
                                                </li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button.Link>
                                                <a href={auto.url}>Automotive Detailing</a>  
                                                <FontAwesomeIcon icon={faArrowRight} /> 
                                            </Button.Link>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <Card.Header bgUrl={coatings.featuredImage.src} />
                                        <Card.Body>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} />  FEYNLAB Coating
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> SOLID. Coating
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> Full Strenth Protection
                                                </li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button.Link>
                                                <a href={coatings.url}>Ceramic Coatings</a>
                                                <FontAwesomeIcon icon={faArrowRight} /> 
                                            </Button.Link>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <Card.Header bgUrl={boat.featuredImage.src} />
                                        <Card.Body>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> Exterior Detail
                                                </li>
                                                <li>
                                                <FontAwesomeIcon icon={faCaretRight} /> Interior Detail
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCaretRight} /> Full Detail
                                                </li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button.Link>
                                                <a href={boat.url}>Boat Detailing</a>
                                                <FontAwesomeIcon icon={faArrowRight} /> 
                                            </Button.Link>
                                        </Card.Footer>
                                    </Card>
                                </Section.FlexRow>
                            </Section.Row>
                        </Section.Background>
                    </Section>
                    <Section bgUrl={Interior}>
                        <Section.Overlay />
                        <Section.Row>
                            <Section.Inner>
                                <Section.ColTitle>Additional Services</Section.ColTitle>
                                <Section.FlexRow alignItems="flex-start">
                                    <Section.Column>
                                        <ul>
                                            <li><strong>Paint Application and Restoration</strong></li>
                                            <li><strong>Coating Application</strong></li>
                                            <li><strong>Upholstery Cleaning</strong></li>
                                            <li><strong>Window Tint Application and Removal</strong></li>
                                            <li><strong>Clear Bra Application</strong></li>
                                            <li><strong>Vehicle Restyling</strong></li>
                                            <li><strong>Oxidation Removal</strong></li>
                                            <li><strong>Graphics Design</strong></li>
                                        </ul>
                                    </Section.Column>
                                    <Section.Column>
                                        <p>
                                        Professional and committed to our work, Five Star Detailing & Restoration offers the best in detailing and restoration. We proudly offer a wide range of professional services for cars, trucks, motorcycles, boats, SUVs, RVs and even aircraft! What sets us apart from other detailing & restoration services is our knowledge and use of high-quality materials and equipment to ensure that your vehicle looks it's best. Our professional detailing leaves no streaks or mineral deposits and gives your vehicle a mirror-like shine, guaranteed!
                                        </p>
                                    </Section.Column>
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