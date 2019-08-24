import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

import SolidInterior from '../../../assets/solid-interior.jpg';
import WheelsOffImage from '../../../assets/feynlab-wheels-off.jpg';
import { Li } from '../../styled.jsx';

export const tabs = [
    {
        title: "1 Year Package",
    },
    {
        title: "2 Year Package",
    },
    {
        title: "5 Year Package",
    },
    {
        title: "Wheels Off Package",
    },
    {
        title: "Interior Package",
    },
];

export const OneYearPackage = () => (
    <Section>
        <Section.Title>One Year Package</Section.Title>
        <p>our entry-level all inclusive SOLID. 1 Year Coating Package. With the 1 Year Package, drivers can get a taste of the benefits of protecting their vehicle with nanotechnology at a price point that won’t break the bank.</p>
        <p>An Exterior Detail is necessary before having this coating installed and is not included with the installation of this coating.</p>
        <ul>
            <Li>1 layer of SOLID. 1 Year Coating on all painted body surfaces.</Li>
            <Li>1 layer of SOLID. 1 Year on Wheel Faces</Li>
            <Li>1 layer of SOLID. Glass on all windows</Li>
        </ul>
    </Section>
);
export const TwoYearPackage = () => (
    <Section>
        <Section.Title>Two Year Package</Section.Title>
        <p>The 2 Year Package offers a great exterior protection on your entire vehicle. This coating is designed for the new every 2 years, or leasing type of customer.</p>
        <ul>
            <Li>1 layer of SOLID. 2 Year coating on all painted exterior surfaces</Li>
            <Li>1 layer of Rims Caliper coating on Wheel Faces</Li>
            <Li>2 layers of SOLID. Glass coating &amp; on Windshield</Li>
        </ul>
    </Section>
);
export const FiveYearPackage = () => (
    <Section>
        <Section.Title>Five Year Package</Section.Title>
        <p>The 5 Year Package offers an excellent exterior protection on your entire vehicle. It shows great scratch resilience and unbeatable water beading properties.</p>
        <ul>
            <Li>1 layer of SOLID. on all painted exterior surfaces</Li>
            <Li>1 layer of SOLID. Rims &amp; Caliper coating on Wheel Faces</Li>
            <Li>2 layers of SOLID. Glass coating on Windshields</Li>
        </ul>
    </Section>
);
export const WheelsOffPackage = () => (
    <Section>
        <Section.Title>Wheels Off Package Package</Section.Title>
        <FeaturedImage image={WheelsOffImage} />
       <ul>
           <Li>Removal of all four wheels</Li>
           <Li>Steam cleaning of rims and calipers inside and out</Li>
           <Li>Rims & Caliper applied to calipers</Li>
           <Li>Rims & Caliper applied on all exterior wheel surfaces</Li>
       </ul>
    </Section>
);
export const InteriorPackage = () => (
    <Section>
        <Section.Title>Interior Package</Section.Title>
        <FeaturedImage image={SolidInterior} />
        <ul>
            <Li>Interior Wipe down and Cleaning of all Surfaces</Li>
            <Li>Interior Vacuum and Wipe Down of Floor and Floor Mats</Li>
            <Li>Interior steam clean and shampoo Floor and Floor Mats</Li>
            <Li>Clean and Coat all Leather</Li>
        </ul>
    </Section>
);
