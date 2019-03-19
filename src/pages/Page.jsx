import React from 'react';

import {
	Section
} from './styled';

export default (props) => {
	return (
		<Section>
			<Section.Main>
				{props.title && <Section.PageTitle>{props.title}</Section.PageTitle>}
				{props.children}
			</Section.Main>
		</Section>
	);
}