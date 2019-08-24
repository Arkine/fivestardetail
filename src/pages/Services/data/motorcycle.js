import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';
import {
    Li
} from '../../styled';

export const tabs = [
    {
        title: "Detailing",
    },
    {
        title: "Add-ons",
    }
];

export const Detailing = () => (
    <Section>
        <Section.Title>Detailing</Section.Title>
        <ul>
            <Li>Wash</Li>
            <Li>Clean Tires</Li>
            <Li>Clean Rims</Li>
            <Li>Steam Clean Engine</Li>
            <Li>Windshield Buff &amp; Polish</Li>
            <Li>Clean &amp; Condition Leather</Li>
            <Li>Shine Chrome</Li>
            <Li>Wax/Seal/Ceramic Coat</Li>
        </ul>
    </Section>
);

export const AddOns = () => (
    <Section>
        <Section.Title>Add-ons</Section.Title>
        <ul>
            <Li>Clay Bar</Li>
            <Li>Trim Restoration</Li>
            <Li>Headlight Restoration</Li>
            <Li>Engine Detail</Li>
            <Li>Water Spot Removal</Li>
            <Li>Fabric Stain Guard</Li>
            <Li>Emblem Debadging</Li>
            <Li>Graphic Design</Li>
            <Li>Decal Removal</Li>
            <Li>Vehicle Wraps</Li>
        </ul>
    </Section>
);