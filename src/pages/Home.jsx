import React from 'react';

import Page from './Page';
import Hero from '../blocks/Hero';

import {
    Section,
    Card
} from './styled';

import {
    Button
} from '../app-styled.js';

export default class HomePage extends React.Component {
    render() {
        return (
            <Page>
                <Hero />
                <Section.Row>
                    <Section.Content>
                        <Section.Row>
                            <Section.Header>Services</Section.Header>
                            <Section.FlexRow>
                                <Card>
                                    <Card.Header />
                                    <Card.Body>
                                        <ul>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                        </ul>
                                    </Card.Body>
                                    <Button>Auto Detailing</Button>
                                </Card>
                                <Card>
                                    <Card.Header />
                                    <Card.Body>
                                        <ul>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                        </ul>
                                    </Card.Body>
                                    <Button>Coatings</Button>
                                </Card>
                                <Card>
                                    <Card.Header />
                                    <Card.Body>
                                        <ul>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                        </ul>
                                    </Card.Body>
                                    <Button>Boat Detailing</Button>
                                </Card>
                                <Card>
                                    <Card.Header />
                                    <Card.Body>
                                        <ul>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                            <li>Card Item</li>
                                        </ul>
                                    </Card.Body>
                                    <Button>Exotics Detailing</Button>
                                </Card>
                            </Section.FlexRow>
                        </Section.Row>
                        <p>
                            Five Star Detailing & Restoration is Sacramento's Top Auto <strong>Detailing & Restoration Service</strong> offering the Highest Quality Automotive Detailing & Restoration services available. Whether it be <strong>Paint Restoration</strong>, <strong>Painting</strong>, <strong>Graphic Design</strong>, <strong>Window Tinting</strong>, <strong>Window Tint Removal</strong>, <strong>Clear Bra</strong>, <strong>Vehicle Restyling</strong>, <strong>Vehicle Restyling</strong>, <strong>Oxidation Removal</strong>, <strong>Interior Upholstery Cleaning</strong>, <strong>Boat Restoration</strong>, <strong>RV Restoration</strong>, or <strong>Protective Coatings</strong>, Five Star Detailing & Restoration offers Quick and Professional Services at an Affordable price. We service everything from Daily Drivers to Exotics, RV, Boats, Aircraft, Motorcycles and more!!!. Is your paint/gel-coat looking dull? Five Star Detailing & Restoration will restore your vehicle's paint/gel-coat to a mirror-like finish impressing friends and family alike.
                        </p>
                        <p>
                            Five Star Detailing & Restoration proudly offers a wide range of Professional services for Car, Truck, Motorcycle, Boat, SUV, RV and even Aircraft! What sets us apart from other Detailing & Restoration services is our knowledge and use of high-quality materials and equipment to ensure that your vehicle looks it's best. Our Professional  Detailing leaves no streaks or mineral deposits and gives your vehicle a mirror-like shine, Guaranteed! Our Interior Cleaning service removes even the deepest of stains and will make your interior look new again!
                        </p>
                        <p>
                            Professional and committed to our work, we strive to ensure that your vehicle looks its best and look the way that you want it to. We Guarantee Your Satisfaction with our services and know that your vehicle will be looking as good as new. We Can remove scratches, orange peel, oxidation, stains, marks, dirt & mud and more Quick & Professionally for when you need to re-sell your vehicle or keep it protected from our harsh environment.
                        </p>
                        <p>
                            What are you waiting for? Call us today! 
                        </p>
                    </Section.Content>
                </Section.Row>
            </Page>
        );
    }
}