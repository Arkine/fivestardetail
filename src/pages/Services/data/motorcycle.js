import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

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
            <li>Wash</li>
            <li>Clean Tires</li>
            <li>Clean Rims</li>
            <li>Steam Clean Engine</li>
            <li>Windshield Buff &amp; Polish</li>
            <li>Clean &amp; Condition Leather</li>
            <li>Shine Chrome</li>
            <li>Wax/Seal/Ceramic Coat</li>
        </ul>
    </Section>
);

export const AddOns = () => (
    <Section>
        <Section.Title>Add-ons</Section.Title>
        <ul>
            <li>Clay Bar</li>
            <li>Trim Restoration</li>
            <li>Headlight Restoration</li>
            <li>Engine Detail</li>
            <li>Water Spot Removal</li>
            <li>Fabric Stain Guard</li>
            <li>Emblem Debadging</li>
            <li>Graphic Design</li>
            <li>Decal Removal</li>
            <li>Vehicle Wraps</li>
        </ul>
    </Section>
);