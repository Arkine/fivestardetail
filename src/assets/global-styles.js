import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styledNormalize from 'styled-normalize'

import Pattern from './pattern.png';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Muli:400,600,700');

    ${reset};
    ${styledNormalize};

    body {
        background: url(${Pattern});
        background-repeat: repeat;

        font-size: 18px;
        font-family: ${props => props.theme.fonts.family};
        color: ${props => props.theme.fonts.color};

    }

    main {
        position: relative;
        
        margin-bottom: 0;
        min-height: 300px;
    }

    h1,h2,h3,h4,h5,h6 {
        margin-bottom: 1.5rem;

        font-weight: 900;
        color: ${props => props.theme.colors.white};
    }

    h1 {
        font-size: ${props => props.theme.fonts.h1.desktop};
    }
    
    h2 {
        font-size: ${props => props.theme.fonts.h2.desktop};
    }

    a {
        color: ${props => props.theme.colors.cobalt};
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: ${props => props.theme.colors.cobaltDark};
        }
    }

    p {
        line-height: 1.5;
        letter-spacing: 0.1em;
        margin-bottom: 1rem;
    }

    img, video, iframe {
        max-width: 100%;
    }

     ul {
        padding-left: 1.5rem;
        
        li {
            list-style-type: disc;
            line-height: 1.75;
        }
    }

    button {
        position: relative;
        border: none;
        background-color: transparent
        cursor: pointer;
        padding: 1rem;
        border-radius: 4px;
    }
`;