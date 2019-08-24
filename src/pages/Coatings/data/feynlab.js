import React from 'react';
import {
    FeaturedImage,
    Section
}  from '../../../blocks/TabNavigator/styled';

import FeynlabInteriorImage from '../../../assets/feynlab-interior.jpg';
import FeynlabCeramicLiteBottle from '../../../assets/feynlab-ceramic-lite-bottle.png';
import FeynlabCeramicLiteDiagram from '../../../assets/feynlab-ceramic-lite-diagram.png';
import FeynlabCeramicPlusBottle from '../../../assets/feynlab-ceramic-plus-bottle.png';
import FeynlabCeramicPlusDiagram from '../../../assets/feynlab-ceramic-plus-diagram.png';
import FeynlabCeramicBottleImage from '../../../assets/feynlab-ceramic-bottle.png';
import FeynlabCeramicDiagram from '../../../assets/feynlab-ceramic-diagram.png';
import FeynlabHealLiteBottleImage from '../../../assets/feynlab-heal-lite-bottle.png';
import FeynlabHealLiteBottleDiagram from '../../../assets/feynlab-heal-lite-diagram.jpg';
import WheelsOffImage from '../../../assets/feynlab-wheels-off.jpg';
import HydroMarinePackageBottle from '../../../assets/feynlab-hydro-marine-bottle.png';


import { Li } from '../../styled.jsx';

export const tabs = [
    {
        title: "Interior Package",
    },
    {
        title: "Wheels Off Package",
    },
    {
        title: "Ceramic Package",
    },
    {
        title: "Ceramic Lite",
    },
    {
        title: "Ceramic Plus",
    },
    {
        title: "Heal Lite Package",
    },
    {
        title: "Hydro Marine Package",
    },
];

export const InteriorPackage = () => (
    <Section>
        <Section.Title>Interior Package</Section.Title>
        <FeaturedImage image={FeynlabInteriorImage} />
        <ul>
            <Li>Interior Wipe down and Cleaning of all Surfaces</Li>
            <Li>Interior Vacuum and Wipe Down of Floor and Floor Mats</Li>
            <Li>Interior steam clean and shampoo Floor and Floor Mats</Li>
            <Li>Clean and Coat all Leather</Li>
        </ul>
    </Section>
);
export const WheelsOffPackage = () => (
    <Section>
        <Section.Title>Wheels Off Package</Section.Title>
        <FeaturedImage image={WheelsOffImage} />
        <ul>
            <Li>Removal of all four wheels</Li>
            <Li>Steam cleaning of wheels and calipers inside and out</Li>
            <Li>Wheel & Caliper applied to calipers</Li>
            <Li>Wheel & Caliper applied on all exterior wheel surfaces</Li>
        </ul>
    </Section>
);
export const CeramicLite = () => (
    <Section>
        <Section.Title>Ceramic Lite</Section.Title>
        <Section style={{marginBottom: '3rem'}}>
            <FeaturedImage height='200px' width='200px' image={FeynlabCeramicLiteBottle} float='left' />
            <p>Ceramic lite is an ultra slick, durable, glossy and extremely hydrophobic. It is warrantied for 1 year but can easily last longer if cared for! It is one of our highest gloss coatings and is also used to top off our other Feynlab ceramic coating packages.</p>
            <ul>
                <Li>1 Layer of Ceramic Lite applied to painted surfaces</Li>
                <Li>1 Layer of Ceramic Lite applied to front window</Li>
                <Li>1 year warranty</Li>
            </ul>
        </Section>
        <Section>
         <FeaturedImage width='auto' height='500px' size='contain' image={FeynlabCeramicLiteDiagram} />
        </Section>
    </Section>
);

export const CeramicPlus = () => (
    <Section>
        <Section.Title>Ceramic Plus</Section.Title>
        <Section style={{marginBottom: '3rem'}}>
            <FeaturedImage height='200px' width='200px' image={FeynlabCeramicPlusBottle} float='left' />
            <p>Ceramic Plus combines ultra durable ceramic technology with self healing technology. The ceramic portion of this product has been modified to maintain a high level of flexibility by using shorter chain ceramic co-polymers, this allows the self healing portion to function although it is a lesser effect than self heal lite. This is one of the hardest coatings out there and is warrantied for 5 years.</p>
            <ul>
                <Li>​1 layer of Ceramic Plus applied to paint</Li>
                <Li>1 layer of Top coat applied to paint</Li>
                <Li>1 layer of Wheel and Caliper applied to wheel faces</Li>
                <Li>1 layer of Plastic applied to plastics</Li>
                <Li>1 layer of Ceramic lite applied to windshield</Li>
                <Li>5 year warranty</Li>
            </ul>
        </Section>
        <Section>
         <FeaturedImage width='auto' height='500px' size='contain' image={FeynlabCeramicPlusDiagram} />
        </Section>
    </Section>
);
export const CeramicPackage = () => (
    <Section>
        <Section.Title>Ceramic Package</Section.Title>
        <Section style={{marginBottom: '3rem'}}>
            <FeaturedImage height='200px' width='200px' image={FeynlabCeramicBottleImage} float='left' />
            <p>This is an ultra-high solids coating that forms a lattice structure of silica, silicon-nitride and silicon-carbide. This gives Ceramic extreme temperature resistance (up to 750 degrees Celsius), the ultimate scratch resistance, intense gloss, and magnificent hydrophobicity. CERAMIC also provides UV protection, and chemical resistance (acid rain), protecting the paint from fading for many years. This coating is warrantied for 3 years but will outlast that time if maintained.</p>
            <ul>
                <Li>1 layer of Ceramic applied to paint</Li>
                <Li>1 Layer of Top coat applied to paint</Li>
                <Li>1 layer of wheel and caliper applied to wheel faces</Li>
                <Li>1 layer of plastic applied to plastic trim</Li>
                <Li>1 layer of Ceramic Lite applied to windshield</Li>
                <Li>3 year warranty</Li>
            </ul>
        </Section>
        <Section>
         <FeaturedImage width='auto' height='500px' size='contain' image={FeynlabCeramicDiagram} bgColor='#333' />
        </Section>
    </Section>
);

export const HealLitePackage = () => (
    <Section>
        <Section.Title>Heal Lite</Section.Title>
        <Section style={{marginBottom: '3rem'}}>
            <FeaturedImage height='200px' width='200px' image={FeynlabHealLiteBottleImage} float='left' />
            <p>This product was developed with darker colored vehicles in mind, where swirl marks and “spider web” scratches are more visible. Micro-swirls are inevitable on darker colored cars, no matter how careful you may be, how many buckets you use during washing or what our competition have promised you about their Ceramic Coatings, micro-swirls just happen. HEAL LITE is our answer to this, heat from the sun will cause the Ceramic Polymer Matrix to re-set, if you are in a rush you could use a hair dryer or some hot water (at your own risk!).</p>
            <ul>
               <Li>​1 layer of Self Heal lite applied to paint</Li>
               <Li>​1 layer of Top coat applied to paint</Li>
               <Li>​1 layer of Wheel and caliper applied to wheel faces</Li>
               <Li>​1 layer of Plastic applied to plastic surfaces</Li>
               <Li>​1 layer of Ceramic Lite applied to front windshield</Li>
            </ul>
        </Section>
        <Section>
         <FeaturedImage width='auto' height='500px' size='contain' image={FeynlabHealLiteBottleDiagram} />
        </Section>
    </Section>
);
export const HydroMarinePackage = () => (
    <Section>
        <Section.Title>Hydro Marine Package</Section.Title>
        <Section>
            <FeaturedImage height='200px' width='200px' image={HydroMarinePackageBottle} float='left' />
            <p>TFEYNLAB HYDRO Marine Coating is designed to handle the harsh conditions of watercraft. This HARDCORE UV coating protection is compatible with both painted and gel-coat finishes. HYDRO uses smart nano particles which scatter UV rays at an incredible success rate, so the probability of UV reaching the paint surface is reduced to roughly 1%. This solves age old issue of the yellow, chalky, and powdery gel-coat oxidation from UV damage.</p>
            <p>HYDRO creates a hydrophobic surface, causing water and contamination to quickly release. This speeds up rinse downs after use, making cleaning ultra simple. (Assuming the watercraft is dry docked and not sitting in water for prolonged periods, where anti-fouling would be required.)</p>
            <p>The hydrophobic properties of HYDRO help decrease water drag when applied below the water line. Application to the propellers aids in fuel consumption.</p>
            <p>HYDRO is not an anti-fouling agent and should only be used above the waterline if the watercraft spends long periods of time in the water.</p>
            <p>HYDRO is visually similar to Ceramic: Exceptionally Glossy, Crisp, and Vibrant.</p>
        </Section>
    </Section>
);





