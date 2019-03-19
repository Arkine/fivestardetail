import { createGlobalStyle } from 'styled-components'
import Pattern from './pattern.png';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Muli:400,600,700');


    body {
        background: url(${Pattern});
        background-repeat: repeat;

        font-size: 18px;
        font-family: ${props => props.theme.fonts.family};
        color: ${props => props.theme.fonts.color};

    }

    #root {

    }

    a {
        color: ${props => props.theme.colors.cobalt};
    }
`;