import React, {Suspense} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Router, Link, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import theme from './theme';

import Logo from './blocks/Logo';
import ScreenLoader from './blocks/ScreenLoader';
import Loading from './blocks/Loading';
import CenteredLoader from './blocks/Loading/Centered';
import PrimaryNav from './blocks/PrimaryNav';
import Footer from './blocks/Footer';

import Pages from './pages';

import GlobalStyles from './assets/global-styles';
import {
	Body,
} from './app-styled';

const history = createBrowserHistory();

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router history={history}>
					{/* <ScreenLoader /> */}
					<Body>
						<GlobalStyles />
						<Body.Header>
							<Logo />
							<PrimaryNav {...history} />
						</Body.Header>
						<Body.Main>
							<Suspense fallback={CenteredLoader}>
								<Switch>
									<Route path="/" exact component={Pages.Home} />
									<Route path="/about" exact component={Pages.About} />
									
									<Route path="/services" exact component={Pages.Services} />
									<Route path="/services/automotive-detailing" exact component={Pages.AutomotiveDetailing} />
									<Route path="/services/exotics-detailing" exact component={Pages.ExoticsDetailing} />
									<Route path="/services/boat-detailing" exact component={Pages.BoatDetailing} />
									<Route path="/services/rv-detailing" exact component={Pages.RvDetailing} />

									<Route path="/ceramic-coatings" exact component={Pages.Coatings} />
									<Route path="/ceramic-coatings/feynlab-coatings" exact component={Pages.FeynlabCoating} />
									<Route path="/ceramic-coatings/solid-coatings" exact component={Pages.SolidCoating} />

									<Route component={Pages.NotFound} />
								</Switch>
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
