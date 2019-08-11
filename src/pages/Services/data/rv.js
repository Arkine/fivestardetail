import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

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
            <li>Hand Wash &amp; Dry</li>
            <li>Clean &amp; Polish Windows</li>
            <li>Clean Rims</li>
            <li>Clean Tires</li>
            <li>Condition Tires</li>
            <li>Clean &amp;Condition Trim</li>
            <li>Wax/Seal</li>
            <li>Oxidation Removal</li>
            <li>Light Scratch &amp; Imperfection Removal</li>
            <li>Restore Faded Fiberglass &amp; Shine</li>
            <li>Clean Roof</li>
            <li>Seal Roof</li>
        </ul>
    </Section>
);

export const InteriorDetail = () => (
    <Section>
        <Section.Title>Interior Detail</Section.Title>
        <FeaturedImage image={RvDetailInterior} />
        <ul>
            <li>Clean &amp; Polish Windows</li>
            <li>Steam Clean Carpets &amp; Seats</li>
            <li>Steam Clean Cracks &nbsp;&amp; Crevices</li>
            <li>Clean Kitchen Counters</li>
            <li>Clean Bathroom Counters</li>
            <li>Clean Tables</li>
            <li>Dust</li>
            <li>Vacuum Interior</li>
            <li>Make Beds</li>
            <li>Condition Leather</li>
            <li>Stain Treatment</li>
            <li>Clean Living Quarters</li>
            <li>Clean Fridge (If Empty)</li>
            <li>Clean Inside of Cabinets (If Empty)</li>
            <li>Shampoo Carpets &amp;&nbsp;Seats</li>
        </ul>
    </Section>
);

export const FullDetail = () => (
    <Section>
        <Section.Title>Full Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <li>Hand Wash &amp; Dry</li>
                <li>Clean &amp; Polish Windows</li>
                <li>Clean Rims</li>
                <li>Clean Tires</li>
                <li>Condition Tires</li>
                <li>Clean &amp;Condition Trim</li>
                <li>Wax/Seal</li>
                <li>Oxidation Removal</li>
                <li>Light Scratch &amp; Imperfection Removal</li>
                <li>Restore Faded Fiberglass &amp; Shine</li>
                <li>Clean Roof</li>
                <li>Seal Roof</li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <li>Steam Clean Carpets &amp; Seats</li>
                <li>Steam Clean Cracks &nbsp;&amp; Crevices</li>
                <li>Clean Kitchen Counters</li>
                <li>Clean Bathroom Counters</li>
                <li>Clean Tables</li>
                <li>Dust</li>
                <li>Vacuum Interior</li>
                <li>Make Beds</li>
                <li>Condition Leather</li>
                <li>Stain Treatment</li>
                <li>Clean Living Quarters</li>
                <li>Clean Fridge (If Empty)</li>
                <li>Clean Inside of Cabinets (If Empty)</li>
                <li>Shampoo Carpets &amp;&nbsp;Seats</li>
            </ul>
        </Section>
    </Section>
);

export const AddOns = () => (
    <Section>
        <Section.Title>Add-ons</Section.Title>
        <ul>
            <li>Clay Bar: Call for pricing</li>
            <li>Trim Restoration: Call for pricing</li>
            <li>Headlight Restoration: Call for pricing</li>
            <li>Engine Detail: Call for pricing</li>
            <li>Water Spot Removal: Call for pricing</li>
            <li>Fabric Stain Guard: Call for pricing</li>
            <li>Window Tint Removal: Starting at $25/window</li>
            <li>Emblem Debadging: $20 per badge</li>
            <li>Graphic Design: Call for pricing</li>
            <li>Decal Removal: Call for pricing</li>
            <li>Vehicle Wraps: Call for pricing</li>
            <li>Carpet Dyeing: Call for pricing</li>
        </ul>
    </Section>
);