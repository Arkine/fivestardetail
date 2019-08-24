import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';
import {
    Li
} from '../../styled';

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
            <Li>Hand Wash &amp; Dry</Li>
            <Li>Hand Wash &amp; Dry Trailer</Li>
            <Li>Clean &amp; Polish Windows</Li>
            <Li>Clean Rims</Li>
            <Li>Clean &amp; Tires</Li>
            <Li>Condition Tires</Li>
            <Li>Restore Faded Fiberglass &amp; Shine</Li>
            <Li>Light Scratch &amp; Imperfection Removal</Li>
            <Li>Wax/Seal</Li>
        </ul>
    </Section>
);
export const InteriorDetail = () => (
    <Section>
        <Section.Title>Interior Detail</Section.Title>
        <FeaturedImage image={BoatInteriorDetail} />
        <ul>
            <Li>Vacuum Interior</Li>
            <Li>Shampoo Carpets &amp; Seats</Li>
            <Li>Steam Carpets &amp; Seats</Li>
            <Li>Steam Crack &amp; Crevices</Li>
            <Li>Clean Cup Holders</Li>
            <Li>Clean &amp; Polish Windows</Li>
            <Li>Wipe Interior</Li>
            <Li>Condition Leather/Vinyl</Li>
            <Li>Stain Treatment</Li>
            <Li>Clean Tables</Li>
            <Li>Clean Inside Cabinets</Li>
            <Li>Clean Entire Living Quaters</Li>
            <Li>Clean Entire Kitchen</Li>
            <Li>Make Beds</Li>
        </ul>
    </Section>
);
export const FullDetail = () => (
    <div>
        <Section.Title>Full Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <Li>Hand Wash &amp; Dry</Li>
                <Li>Hand Wash &amp; Dry Trailer</Li>
                <Li>Clean &amp; Polish Windows</Li>
                <Li>Clean Rims</Li>
                <Li>Clean &amp; Tires</Li>
                <Li>Condition Tires</Li>
                <Li>Restore Faded Fiberglass &amp; Shine</Li>
                <Li>Light Scratch &amp; Imperfection Removal</Li>
                <Li>Wax/Seal</Li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <Li>Vacuum Interior</Li>
                <Li>Shampoo Carpets &amp; Seats</Li>
                <Li>Steam Carpets &amp; Seats</Li>
                <Li>Steam Crack &amp; Crevices</Li>
                <Li>Clean Cup Holders</Li>
                <Li>Clean &amp; Polish Windows</Li>
                <Li>Wipe Interior</Li>
                <Li>Condition Leather/Vinyl</Li>
                <Li>Stain Treatment</Li>
                <Li>Clean Tables</Li>
                <Li>Clean Inside Cabinets</Li>
                <Li>Clean Entire Living Quarters</Li>
                <Li>Clean Entire Kitchen</Li>
                <Li>Make Beds</Li>
            </ul>
        </Section>
    </div>
);
export const AddOns = () => (
    <Section>
        <Section.Title>Add-ons</Section.Title>
        <ul>
            <Li>Clay Bar: $39.99+</Li>
            <Li>Trim Restoration: $39.99+</Li>
            <Li>Headlight Restoration: $59.99+</Li>
            <Li>Engine Detail: $39.99+</Li>
            <Li>Water Spot Removal: $69.99+</Li>
            <Li>Fabric Stain Guard: $99.99+</Li>
            <Li>Window Tint Removal: Starting at $25/window</Li>
            <Li>Emblem Debadging: $20 per badge</Li>
            <Li>Gel-Coat Repair: Call for pricing</Li>
            <Li>Graphic Design: Call for pricing</Li>
            <Li>Decal Removal: Call for pricing</Li>
            <Li>Vehicle Wraps: Call for pricing</Li>
            <Li>Carpet Dyeing: Call for pricing</Li>
        </ul>
    </Section>
);