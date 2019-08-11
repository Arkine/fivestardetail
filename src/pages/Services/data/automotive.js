import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

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
            <li>Hand Wash &amp; Dry</li>
            <li>Clean Rims, Tires, &amp; Wheel Wells</li>
            <li>Remove Surface Contaminants With Clay Bar</li>
            <li>Condition&nbsp;Tires</li>
            <li>Condition Wheel Wells</li>
            <li>Condition Exterior Trim</li>
            <li>Clean &amp; Wipe Door Jams</li>
            <li>Apply Exterior Paint Protection (Wax/Sealant)</li>
            <li>Clean and Polish Glass</li>
        </ul>
    </Section>
);


export const InteriorDetail = () => (
    <Section>
        <Section.Title>Interior Detail</Section.Title>
        <FeaturedImage image={InteriorDetailingImage} />
        <ul>
            <li>Vacuum Carpets &amp; Seats</li>
            <li>Clean &amp; Condition Seats, Dash, &amp; Panels</li>
            <li>Shampoo Carpets, Seats, &amp; Trunk</li>
            <li>Clean &amp; Condition Leather Seats</li>
            <li>Clean &amp; Polish Glass</li>
            <li>Clean Headliner</li>
            <li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</li>
            <li>Clean &amp; Wipe Door Jams</li>
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
                <li>Clean Rims, Tires, &amp; Wheel Wells</li>
                <li>Remove Surface Contaminants With Clay Bar</li>
                <li>Condition&nbsp;Tires</li>
                <li>Condition Wheel Wells</li>
                <li>Condition Exterior Trim</li>
                <li>Clean &amp; Wipe Door Jams</li>
                <li>Apply Exterior Paint Protection (Wax/Sealant)</li>
                <li>Clean and Polish Glass</li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <li>Vacuum Carpets &amp; Seats</li>
                <li>Clean &amp; Condition Seats, Dash, &amp; Panels</li>
                <li>Shampoo Carpets, Seats, &amp; Trunk</li>
                <li>Clean &amp; Condition Leather Seats</li>
                <li>Clean &amp; Polish Glass</li>
                <li>Clean Headliner</li>
                <li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</li>
                <li>Clean &amp; Wipe Door Jams</li>
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
                <li>Hand Wash &amp; Dry</li>
                <li>Clean &amp; Polish Glass</li>
                <li>Clean Rims, Tires, &amp; Wheel Wells</li>
                <li>Condition Tires</li>
            </ul>
        
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <li>Vacuum</li>
                <li>Clean &amp; Polish Glass</li>
                <li>Quick Wipedown</li>
                <li>Wipe Door Jams</li>
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
                <li>Hand Wash &amp; Dry</li>
                <li>Clean Rims, Tires, &amp; Wheel Wells</li>
                <li>Condition&nbsp;Tires</li>
                <li>Condition Wheel Wells</li>
                <li>Condition Exterior Trim</li>
                <li>Clean &amp; Wipe Door Jams</li>
                <li>Clean and Polish Glass</li>
                <li>Clean Engine</li>
                <li>Condition Engine</li>
            </ul>
        </Section>
        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <li>Vacuum Carpets &amp; Seats</li>
                <li>Clean &amp; Condition Seats, Dash, &amp; Panels</li>
                <li>Shampoo Carpets, Seats, &amp; Trunk</li>
                <li>Clean &amp; Condition Leather Seats</li>
                <li>Clean &amp; Polish Glass</li>
                <li>Clean Headliner</li>
                <li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</li>
                <li>Clean &amp; Wipe Door Jams</li>
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
                <li>Hand Wash &amp; Dry</li>
                <li>Clean Rims, Tires, &amp; Wheel Wells</li>
                <li>Remove Surface Contaminants With Clay Bar</li>
                <li>Condition&nbsp;Tires</li>
                <li>Condition Wheel Wells</li>
                <li>Condition Exterior Trim</li>
                <li>Clean &amp; Wipe Door Jams</li>
                <li>Apply Exterior Paint Protection (Wax/Sealant)</li>
                <li>Clean and Polish Glass</li>
                <li>Clean Engine</li>
                <li>Condition Engine</li>
            </ul>
        </Section>

        <Section>
            <h3><strong>Interior</strong></h3>
            <ul>
                <li>Vacuum Carpets &amp; Seats</li>
                <li>Clean &amp; Condition Seats, Dash, &amp; Panels</li>
                <li>Shampoo Carpets, Seats, &amp; Trunk</li>
                <li>Clean &amp; Condition Leather Seats</li>
                <li>Clean &amp; Polish Glass</li>
                <li>Clean Headliner</li>
                <li>Steam Clean Cracks and Crevices and All Panels, Carpet and Seats</li>
                <li>Clean &amp; Wipe Door Jams</li>
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
            <li>Single Stage Paint Correction</li>
            <li>Two Stage Paint Correction</li>
            <li>Three Stage Paint Correction</li>
            <li>Wet Sanding</li>
            <li>(Call for Quote)</li>
            </ul>
        </Section>
    </div>
);

export const Addons = () => (
    <Section>
        <Section.Title>Addons</Section.Title>
        <ul>
            <li>Vehicle Customization</li>
            <li>Clay Bar</li>
            <li>Trim Restoration</li>
            <li>Headlight Restoration</li>
            <li>Engine Detail</li>
            <li>Water Spot Removal</li>
            <li>Fabric Stain Guard</li>
            <li>Window Tint Removal</li>
            <li>Emblem Debadging</li>
            <li>Clear Bra</li>
            <li>Graphic Design</li>
            <li>Decal Removal</li>
            <li>Vehicle Wraps</li>
            <li>Carpet Dyeing</li>
            <li>Upholstery Repair</li>
            <li>Paint less Dent Repair</li>
            <li>Painting</li>
            <li>Paint Protection Film</li>
        </ul>
    </Section>
);

export const Upcharges = () => (
    <div>
        <Section>
            <Section.Title>Things that may result in an upcharge</Section.Title>
            <ul>
                <li>Pet hair</li>
                <li>Cigarette smoke residue</li>
                <li>Excessive sand or dirt</li>
                <li>Headliner deep cleaning</li>
            </ul>
        </Section>
        <Section>
            <p><strong>NOTE: </strong>Different Cars require different levels of care and therefore will require different pricing depending on the amount of work that needs to be done. Five Star Detailing uses the <strong>Highest Quality</strong> <strong>Products and Equipment</strong> when detailing to ensure that you get the <strong>Best</strong> detail possible.</p>
        </Section>
    </div>
);