import React from 'react';
import {Switch} from 'react-router-dom';

import ScrollToTopRoute from '../utils/scrollToTop';

import Pages from '../pages';

export default () => (
    <React.Fragment>
        <Switch>
            <ScrollToTopRoute path="/" exact component={Pages.Home} />
            <ScrollToTopRoute path="/about" exact component={Pages.About} />
            
            <ScrollToTopRoute path="/services" exact component={Pages.Services} />
            <ScrollToTopRoute path="/services/automotive-detailing" exact component={Pages.AutomotiveDetailing} />
            <ScrollToTopRoute path="/services/exotics-detailing" exact component={Pages.ExoticsDetailing} />
            <ScrollToTopRoute path="/services/boat-detailing" exact component={Pages.BoatDetailing} />
            <ScrollToTopRoute path="/services/motorcycle-detailing" exact component={Pages.MotorcycleDetailing} />
            <ScrollToTopRoute path="/services/rv-detailing" exact component={Pages.RvDetailing} />
            <ScrollToTopRoute path="/services/seadek" exact component={Pages.Seadek} />

            <ScrollToTopRoute path="/ceramic-coatings" exact component={Pages.Coatings} />
            <ScrollToTopRoute path="/ceramic-coatings/feynlab-coatings" exact component={Pages.FeynlabCoating} />
            <ScrollToTopRoute path="/ceramic-coatings/solid-coatings" exact component={Pages.SolidCoating} />

            <ScrollToTopRoute component={Pages.NotFound} />
        </Switch>
    </React.Fragment>
)