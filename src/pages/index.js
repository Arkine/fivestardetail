import React, {lazy} from 'react';

export default {
    Home: lazy(() => import('./Home')),
    About: lazy(() => import('./About')),
    NotFound: lazy(() => import('./NotFound'))
}