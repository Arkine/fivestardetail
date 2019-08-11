import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

import BoatExteriorDetail from '../../../assets/boat-detail-exterior.jpg';
import BoatInteriorDetail from '../../../assets/boat-detail-interior.jpg';

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
    },
];


export const ExteriorDetail = () => (
    <Section>
        <Section.Title>Exterior Detail</Section.Title>
       <FeaturedImage image={BoatExteriorDetail} />
       <ul>
            <li>Hand Wash &amp; Dry</li>
            <li>Hand Wash &amp; Dry Trailer</li>
            <li>Clean &amp; Polish Windows</li>
            <li>Clean Rims</li>
            <li>Clean &amp; Tires</li>
            <li>Condition Tires</li>
            <li>Restore Faded Fiberglass &amp; Shine</li>
            <li>Light Scratch &amp; Imperfection Removal</li>
            <li>Wax/Seal</li>
        </ul>
    </Section>
);
export const InteriorDetail = () => (
    <Section>
        <Section.Title>Interior Detail</Section.Title>
        <FeaturedImage image={BoatInteriorDetail} />
        <ul>
            <li>Vacuum Interior</li>
            <li>Shampoo Carpets &amp; Seats</li>
            <li>Steam Carpets &amp; Seats</li>
            <li>Steam Crack &amp; Crevices</li>
            <li>Clean Cup Holders</li>
            <li>Clean &amp; Polish Windows</li>
            <li>Wipe Interior</li>
            <li>Condition Leather/Vinyl</li>
            <li>Stain Treatment</li>
            <li>Clean Tables</li>
            <li>Clean Inside Cabinets</li>
            <li>Clean Entire Living Quaters</li>
            <li>Clean Entire Kitchen</li>
            <li>Make Beds</li>
        </ul>
    </Section>
);
export const FullDetail = () => (
    <div>
        <Section.Title>Full Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <li>Hand Wash &amp; Dry</li>
                <li>Hand Wash &amp; Dry Trailer</li>
                <li>Clean &amp; Polish Windows</li>
                <li>Clean Rims</li>
                <li>Clean &amp; Tires</li>
                <li>Condition Tires</li>
                <li>Restore Faded Fiberglass &amp; Shine</li>
                <li>Light Scratch &amp; Imperfection Removal</li>
                <li>Wax/Seal</li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <li>Vacuum Interior</li>
                <li>Shampoo Carpets &amp; Seats</li>
                <li>Steam Carpets &amp; Seats</li>
                <li>Steam Crack &amp; Crevices</li>
                <li>Clean Cup Holders</li>
                <li>Clean &amp; Polish Windows</li>
                <li>Wipe Interior</li>
                <li>Condition Leather/Vinyl</li>
                <li>Stain Treatment</li>
                <li>Clean Tables</li>
                <li>Clean Inside Cabinets</li>
                <li>Clean Entire Living Quarters</li>
                <li>Clean Entire Kitchen</li>
                <li>Make Beds</li>
            </ul>
        </Section>
    </div>
);
export const AddOns = () => (
    <Section>
        <Section.Title>Add-ons</Section.Title>
        <ul>
            <li>Clay Bar: $39.99+</li>
            <li>Trim Restoration: $39.99+</li>
            <li>Headlight Restoration: $59.99+</li>
            <li>Engine Detail: $39.99+</li>
            <li>Water Spot Removal: $69.99+</li>
            <li>Fabric Stain Guard: $99.99+</li>
            <li>Window Tint Removal: Starting at $25/window</li>
            <li>Emblem Debadging: $20 per badge</li>
            <li>Gel-Coat Repair: Call for pricing</li>
            <li>Graphic Design: Call for pricing</li>
            <li>Decal Removal: Call for pricing</li>
            <li>Vehicle Wraps: Call for pricing</li>
            <li>Carpet Dyeing: Call for pricing</li>
        </ul>
    </Section>
);