import React, {Suspense} from 'react';
import { ThemeProvider } from 'styled-components';
import {Router, Link, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import theme from './theme';

import Logo from './blocks/Logo';
import ScreenLoader from './blocks/ScreenLoader';
import Pages from './pages';

import GlobalStyles from './assets/global-styles';
import {
  Body,
} from './app-styled';
import PrimaryNav from './blocks/PrimaryNav';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={ScreenLoader}>
        <Router history={createBrowserHistory()}>
            <Body>
              <GlobalStyles />
              <Body.header>
                <Logo />
                <PrimaryNav />
              </Body.header>
                <Switch>
                  <Route path="/" exact component={Pages.Home} />
                  <Route path="/about" component={Pages.About} />
                  <Route component={Pages.NotFound} />
                </Switch>
                <Body.Footer>{'\u00A9'} {new Date().getFullYear()} Five Star Detailing</Body.Footer>
            </Body>
          </Router>
        </Suspense>
      </ThemeProvider>
    );
  }
}

export default App;
