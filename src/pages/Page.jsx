import React from 'react';
import Helmet from 'react-helmet';

import {
	Page
} from './styled';

export default (props) => {
	return (
		<Page>
			<Helmet>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
				<meta name="og:image" content={props.featured_image} />
			</Helmet>
			<Page.Main>
				{props.title && <Page.PageTitle>{props.title}</Page.PageTitle>}
				{props.children}
			</Page.Main>
		</Page>
	);
}