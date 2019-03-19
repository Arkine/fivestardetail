import React from 'react';

import {
	Section
} from './styled';

export default (props) => {
	return (
		<Section>
			<Section.Main>
				{props.title && 
					<Section.Banner bgUrl={props.bgUrl}>
                        <Section.BannerOverlay />
					    <Section.BannerTitle>{props.title}</Section.BannerTitle>
					</Section.Banner>
				}
				{props.children}
			</Section.Main>
		</Section>
	);
}