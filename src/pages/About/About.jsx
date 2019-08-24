import React from 'react';

import Page from '../Page';

import {
    Section
} from '../styled';

class AboutPage extends React.PureComponent {
    render() {
        return (
            <Page>
                <Section style={{ paddingTop: '0' }}>
                    <Section.Row>
                        <Section.Inner>
                            <h2>What is Detailing?</h2>
                            <p>
                                Detailing is the process of carefully cleaning a vehicle using specialized equipment that allows for a higher precision of cleanliness whereas a wash is general and does not usually include cleaning individualized areas such as paint or upholstery stains. Proper caring of your vehicle is important to ensure that the paint stays fresh and your car maintains its value. Neglecting to care for your care can be cost you money in the future and depreciate its resale value. With a detail from Five Star Detailing & Restoration, your vehicle will hold its value and look as good as new.
                            </p>
                            <p>
                                Our staff is highly trained and has been detailing for years and know the fine points of what makes a car detail a detail and not just a wash. If you are looking for a professional detailer that only offers the best, contact us.
                            </p>
                            <p>
                            Five Star Detailing & Restoration is Sacramento's top auto detailing service offering high quality detailing services to our customers. Our goal has been to provide professional quality work that other auto detailers simply cannot provide. Our use of the finest materials and equipment allows us to do things other auto detailers can't and we do it at a reasonable price.
                            </p>
                        </Section.Inner>
                    </Section.Row>
                </Section>
            </Page>
        )
    }
}

export default AboutPage;