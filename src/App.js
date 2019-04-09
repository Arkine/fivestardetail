import React, {Suspense} from 'react';
import { ThemeProvider } from 'styled-components';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import theme from './theme';

import Logo from './blocks/Logo';
import ScreenLoader from './blocks/ScreenLoader';
import CenteredLoader from './blocks/Loading/Centered';
import PrimaryNav from './blocks/PrimaryNav';
import Footer from './blocks/Footer';

import Routes from './pages/Routes';

import scrollToTop from './utils/scrollToTop';

import GlobalStyles from './assets/global-styles';
import {
	Body,
} from './app-styled';

const history = createBrowserHistory();

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router history={history} onUpdate={scrollToTop}>
					{/* <ScreenLoader /> */}
					<Body>
						<GlobalStyles />
						<Body.Header>
							<Logo />
							<PrimaryNav {...history} />
						</Body.Header>
						<Body.Main>
							<Suspense fallback={CenteredLoader}>
								<Routes />
							</Suspense>
						</Body.Main>
						<Body.Footer>
							<Footer />
						</Body.Footer>
					</Body>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
