import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';
import {
    Li
} from '../../styled';

import RvDetailInterior from '../../../assets/rv-detail-interior.jpg';

export const tabs = [
    {
        title: "Exterior Detail",
    },
    {
        title: "Interior Detail",
    },
    {
        title: "Full Detail",
    },
    {
        title: "Add-ons",
    }
];

export const ExteriorDetail = () => (
    <Section>
        <Section.Title>Exterior Detail</Section.Title>
        <ul>
            <Li>Hand Wash &amp; Dry</Li>
            <Li>Clean &amp; Polish Windows</Li>
            <Li>Clean Rims</Li>
            <Li>Clean Tires</Li>
            <Li>Condition Tires</Li>
            <Li>Clean &amp;Condition Trim</Li>
            <Li>Wax/Seal</Li>
            <Li>Oxidation Removal</Li>
            <Li>Light Scratch &amp; Imperfection Removal</Li>
            <Li>Restore Faded Fiberglass &amp; Shine</Li>
            <Li>Clean Roof</Li>
            <Li>Seal Roof</Li>
        </ul>
    </Section>
);

export const InteriorDetail = () => (
    <Section>
        <Section.Title>Interior Detail</Section.Title>
        <FeaturedImage image={RvDetailInterior} />
        <ul>
            <Li>Clean &amp; Polish Windows</Li>
            <Li>Steam Clean Carpets &amp; Seats</Li>
            <Li>Steam Clean Cracks &nbsp;&amp; Crevices</Li>
            <Li>Clean Kitchen Counters</Li>
            <Li>Clean Bathroom Counters</Li>
            <Li>Clean Tables</Li>
            <Li>Dust</Li>
            <Li>Vacuum Interior</Li>
            <Li>Make Beds</Li>
            <Li>Condition Leather</Li>
            <Li>Stain Treatment</Li>
            <Li>Clean Living Quarters</Li>
            <Li>Clean Fridge (If Empty)</Li>
            <Li>Clean Inside of Cabinets (If Empty)</Li>
            <Li>Shampoo Carpets &amp;&nbsp;Seats</Li>
        </ul>
    </Section>
);

export const FullDetail = () => (
    <Section>
        <Section.Title>Full Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <Li>Hand Wash &amp; Dry</Li>
                <Li>Clean &amp; Polish Windows</Li>
                <Li>Clean Rims</Li>
                <Li>Clean Tires</Li>
                <Li>Condition Tires</Li>
                <Li>Clean &amp;Condition Trim</Li>
                <Li>Wax/Seal</Li>
                <Li>Oxidation Removal</Li>
                <Li>Light Scratch &amp; Imperfection Removal</Li>
                <Li>Restore Faded Fiberglass &amp; Shine</Li>
                <Li>Clean Roof</Li>
                <Li>Seal Roof</Li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <Li>Steam Clean Carpets &amp; Seats</Li>
                <Li>Steam Clean Cracks &nbsp;&amp; Crevices</Li>
                <Li>Clean Kitchen Counters</Li>
                <Li>Clean Bathroom Counters</Li>
                <Li>Clean Tables</Li>
                <Li>Dust</Li>
                <Li>Vacuum Interior</Li>
                <Li>Make Beds</Li>
                <Li>Condition Leather</Li>
                <Li>Stain Treatment</Li>
                <Li>Clean Living Quarters</Li>
                <Li>Clean Fridge (If Empty)</Li>
                <Li>Clean Inside of Cabinets (If Empty)</Li>
                <Li>Shampoo Carpets &amp;&nbsp;Seats</Li>
            </ul>
        </Section>
    </Section>
);

export const AddOns = () => (
    <Section>
        <Section.Title>Add-ons</Section.Title>
        <ul>
            <Li>Clay Bar: Call for pricing</Li>
            <Li>Trim Restoration: Call for pricing</Li>
            <Li>Headlight Restoration: Call for pricing</Li>
            <Li>Engine Detail: Call for pricing</Li>
            <Li>Water Spot Removal: Call for pricing</Li>
            <Li>Fabric Stain Guard: Call for pricing</Li>
            <Li>Window Tint Removal: Starting at $25/window</Li>
            <Li>Emblem Debadging: $20 per badge</Li>
            <Li>Graphic Design: Call for pricing</Li>
            <Li>Decal Removal: Call for pricing</Li>
            <Li>Vehicle Wraps: Call for pricing</Li>
            <Li>Carpet Dyeing: Call for pricing</Li>
        </ul>
    </Section>
);