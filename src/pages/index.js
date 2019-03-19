import React, {lazy} from 'react';

export default {
    Home: lazy(() => import('./Home')),
    About: lazy(() => import('./About')),
    Services: lazy(() => import('./Services')),
    AutomotiveDetailing: lazy(() => import('./Services/Service-automotive')),
    ExoticsDetailing: lazy(() => import('./Services/Service-exotics')),
    BoatDetailing: lazy(() => import('./Services/Service-boats')),
    Coatings: lazy(() => import('./Coatings')),
    NotFound: lazy(() => import('./NotFound'))
}