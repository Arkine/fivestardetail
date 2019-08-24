import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

import {
    Li
} from '../../styled';

import InteriorDetailingImage from '../../../assets/auto-interior-detail.jpg';
import PaintCorrectionImage from '../../../assets/paint-correction.jpg';

export const tabData = [
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
        title: "Quick Detail",
    },
    {
        title: "Selling My Car Detail",
    },
    {
        title: "Five Star Detail",
    },
    {
        title: "Paint Correction",
    },
    {
        title: "Add-Ons",
       
    },
    {
        title: "Things that may result in an upcharge",
       
        note: "NOTE: Different Cars require different levels of care and therefore will require different pricing depending on the amount of work that needs to be done. Five Star Detailing uses the Highest Quality Products and Equipment when detailing to ensure that you get the Best detail possible."
    }
]

export const ExteriorDetail = () => (
    <Section>
        <Section.Title>Exterior Detail</Section.Title>
        <ul>
            <Li>Hand Wash &amp; Dry</Li>
            <Li>Clean Rims, Tires, &amp; Wheel Wells</Li>
            <Li>Remove Surface Contaminants With Clay Bar</Li>
            <Li>Condition&nbsp;Tires</Li>
            <Li>Condition Wheel Wells</Li>
            <Li>Condition Exterior Trim</Li>
            <Li>Clean &amp; Wipe Door Jams</Li>
            <Li>Apply Exterior Paint Protection (Wax/Sealant)</Li>
            <Li>Clean and Polish Glass</Li>
        </ul>
    </Section>
);


export const InteriorDetail = () => (
    <Section>
        <Section.Title>Interior Detail</Section.Title>
        <FeaturedImage image={InteriorDetailingImage} />
        <ul>
            <Li>Vacuum Carpets &amp; Seats</Li>
            <Li>Clean &amp; Condition Seats, Dash, &amp; Panels</Li>
            <Li>Shampoo Carpets, Seats, &amp; Trunk</Li>
            <Li>Clean &amp; Condition Leather Seats</Li>
            <Li>Clean &amp; Polish Glass</Li>
            <Li>Clean Headliner</Li>
            <Li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</Li>
            <Li>Clean &amp; Wipe Door Jams</Li>
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
                <Li>Clean Rims, Tires, &amp; Wheel Wells</Li>
                <Li>Remove Surface Contaminants With Clay Bar</Li>
                <Li>Condition&nbsp;Tires</Li>
                <Li>Condition Wheel Wells</Li>
                <Li>Condition Exterior Trim</Li>
                <Li>Clean &amp; Wipe Door Jams</Li>
                <Li>Apply Exterior Paint Protection (Wax/Sealant)</Li>
                <Li>Clean and Polish Glass</Li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <Li>Vacuum Carpets &amp; Seats</Li>
                <Li>Clean &amp; Condition Seats, Dash, &amp; Panels</Li>
                <Li>Shampoo Carpets, Seats, &amp; Trunk</Li>
                <Li>Clean &amp; Condition Leather Seats</Li>
                <Li>Clean &amp; Polish Glass</Li>
                <Li>Clean Headliner</Li>
                <Li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</Li>
                <Li>Clean &amp; Wipe Door Jams</Li>
            </ul>
        </Section>
    </div>
);

export const QuickDetail = () => (
    <div>
        <Section.Title>Quick Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <Li>Hand Wash &amp; Dry</Li>
                <Li>Clean &amp; Polish Glass</Li>
                <Li>Clean Rims, Tires, &amp; Wheel Wells</Li>
                <Li>Condition Tires</Li>
            </ul>
        
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <Li>Vacuum</Li>
                <Li>Clean &amp; Polish Glass</Li>
                <Li>Quick Wipedown</Li>
                <Li>Wipe Door Jams</Li>
            </ul>
        </Section>
    </div>
);

export const SellingMyCarDetail = () => (
    <div>
        <Section.Title>Selling My Car Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <Li>Hand Wash &amp; Dry</Li>
                <Li>Clean Rims, Tires, &amp; Wheel Wells</Li>
                <Li>Condition&nbsp;Tires</Li>
                <Li>Condition Wheel Wells</Li>
                <Li>Condition Exterior Trim</Li>
                <Li>Clean &amp; Wipe Door Jams</Li>
                <Li>Clean and Polish Glass</Li>
                <Li>Clean Engine</Li>
                <Li>Condition Engine</Li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <Li>Vacuum Carpets &amp; Seats</Li>
                <Li>Clean &amp; Condition Seats, Dash, &amp; Panels</Li>
                <Li>Shampoo Carpets, Seats, &amp; Trunk</Li>
                <Li>Clean &amp; Condition Leather Seats</Li>
                <Li>Clean &amp; Polish Glass</Li>
                <Li>Clean Headliner</Li>
                <Li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</Li>
                <Li>Clean &amp; Wipe Door Jams</Li>
            </ul>
        </Section>
    </div>
);

export const FiveStarDetail = () => (
    <div>
        <Section.Title>Five Star Detail</Section.Title>
        <Section>
            <h3><strong>Exterior</strong></h3>
            <ul>
                <Li>Hand Wash &amp; Dry</Li>
                <Li>Clean Rims, Tires, &amp; Wheel Wells</Li>
                <Li>Remove Surface Contaminants With Clay Bar</Li>
                <Li>Condition&nbsp;Tires</Li>
                <Li>Condition Wheel Wells</Li>
                <Li>Condition Exterior Trim</Li>
                <Li>Clean &amp; Wipe Door Jams</Li>
                <Li>Apply Exterior Paint Protection (Wax/Sealant)</Li>
                <Li>Clean and Polish Glass</Li>
                <Li>Clean Engine</Li>
                <Li>Condition Engine</Li>
            </ul>
        </Section>

        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <Li>Vacuum Carpets &amp; Seats</Li>
                <Li>Clean &amp; Condition Seats, Dash, &amp; Panels</Li>
                <Li>Shampoo Carpets, Seats, &amp; Trunk</Li>
                <Li>Clean &amp; Condition Leather Seats</Li>
                <Li>Clean &amp; Polish Glass</Li>
                <Li>Clean Headliner</Li>
                <Li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</Li>
                <Li>Clean &amp; Wipe Door Jams</Li>
            </ul>
        </Section>      
    </div>
);

export const PaintCorrection = () => (
    <div>
        <Section.Title>Paint Correction</Section.Title>
        <FeaturedImage image={PaintCorrectionImage} />
        <Section>
        <ul>
            <Li>Single Stage Paint Correction</Li>
            <Li>Two Stage Paint Correction</Li>
            <Li>Three Stage Paint Correction</Li>
            <Li>Wet Sanding</Li>
            <Li>(Call for Quote)</Li>
            </ul>
        </Section>
    </div>
);

export const Addons = () => (
    <Section>
        <Section.Title>Addons</Section.Title>
        <ul>
            <Li>Vehicle Customization</Li>
            <Li>Clay Bar</Li>
            <Li>Trim Restoration</Li>
            <Li>Headlight Restoration</Li>
            <Li>Engine Detail</Li>
            <Li>Water Spot Removal</Li>
            <Li>Fabric Stain Guard</Li>
            <Li>Window Tint Removal</Li>
            <Li>Emblem Debadging</Li>
            <Li>Clear Bra</Li>
            <Li>Graphic Design</Li>
            <Li>Decal Removal</Li>
            <Li>Vehicle Wraps</Li>
            <Li>Carpet Dyeing</Li>
            <Li>Upholstery Repair</Li>
            <Li>Paint less Dent Repair</Li>
            <Li>Painting</Li>
            <Li>Paint Protection Film</Li>
        </ul>
    </Section>
);

export const Upcharges = () => (
    <div>
        <Section>
            <Section.Title>Things that may result in an upcharge</Section.Title>
            <ul>
                <Li>Pet hair</Li>
                <Li>Cigarette smoke residue</Li>
                <Li>Excessive sand or dirt</Li>
                <Li>Headliner deep cleaning</Li>
            </ul>
        </Section>
        <Section>
            <p><strong>NOTE: </strong>Different Cars require different levels of care and therefore will require different pricing depending on the amount of work that needs to be done. Five Star Detailing uses the <strong>Highest Quality</strong> <strong>Products and Equipment</strong> when detailing to ensure that you get the <strong>Best</strong> detail possible.</p>
        </Section>
    </div>
);