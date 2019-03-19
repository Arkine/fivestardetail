import React, {lazy} from 'react';

export default {
    Home: lazy(() => import('./Home')),
    About: lazy(() => import('./About')),

    Services: lazy(() => import('./Services')),
    AutomotiveDetailing: lazy(() => import('./Services/Service-automotive')),
    ExoticsDetailing: lazy(() => import('./Services/Service-exotics')),
    BoatDetailing: lazy(() => import('./Services/Service-boats')),
    RvDetailing: lazy(() => import('./Services/Service-rv')),

    Coatings: lazy(() => import('./Coatings')),
    FeynlabCoating: lazy(() => import('./Coatings/Coating-feynlab')),
    SolidCoating: lazy(() => import('./Coatings/Coating-solid')),

    NotFound: lazy(() => import('./NotFound'))
}