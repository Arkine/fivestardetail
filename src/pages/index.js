import React, {lazy} from 'react';

export default {
    Home: lazy(() => import('./Home')),
    About: lazy(() => import('./About')),
    Contact: lazy(() => import('./Contact')),
    Affiliates: lazy(() => import('./Affiliates')),

    Services: lazy(() => import('./Services')),
    AutomotiveDetailing: lazy(() => import('./Services/Service-automotive')),
    ExoticsDetailing: lazy(() => import('./Services/Service-exotics')),
    BoatDetailing: lazy(() => import('./Services/Service-boats')),
    MotorcycleDetailing: lazy(() => import('./Services/Service-motorcycle')),
    RvDetailing: lazy(() => import('./Services/Service-rv')),
    Seadek: lazy(() => import('./Services/Service-seadek')),

    Coatings: lazy(() => import('./Coatings')),
    FeynlabCoating: lazy(() => import('./Coatings/Coating-feynlab')),
    SolidCoating: lazy(() => import('./Coatings/Coating-solid')),

    NotFound: lazy(() => import('./NotFound'))
}