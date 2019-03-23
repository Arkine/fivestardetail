import React from 'react';

import {
	Page
} from './styled';

export default (props) => {
	return (
		<Page>
			<Page.Main>
				{props.title && <Page.PageTitle>{props.title}</Page.PageTitle>}
				{props.children}
			</Page.Main>
		</Page>
	);
}