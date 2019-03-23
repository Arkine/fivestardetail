import React from 'react';

import {
	Single
} from './styled';

export default (props) => {
	return (
		<Single>
			<Single.Main>
				{props.title && 
					<Single.Banner bgUrl={props.bgUrl}>
                        <Single.BannerOverlay />
					    <Single.BannerTitle>{props.title}</Single.BannerTitle>
					</Single.Banner>
				}
				{props.children}
			</Single.Main>
		</Single>
	);
}