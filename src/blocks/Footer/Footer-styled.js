import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Footer = styled.footer`    
    background-color: ${props => props.theme.colors.smoke};
`;

Footer.Columns = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;

    padding: 2rem 0;

    max-width: ${props => props.theme.widths.row};
    margin: 0 auto;
    
`;

Footer.Col = styled.div`
    flex-basis: ${props => props.flexBasis ? props.flexBasis : '18rem'};
    flex-grow: ${props => props.flexGrow ? props.flexGrow : 0};

    p {
        margin-top: 1rem;
    }
`;

Footer.Nav = styled.nav`
    padding-left: 0;
    li {
        list-style: none;

        margin-bottom: 0.5rem;

        a {
            text-decoration: none;
        }
    }
`;
Footer.Link = styled(Link)``;

Footer.Copyright = styled.div`
    border-radius: 10px;
    text-align: center;
    padding: 2rem 0;

    background-color: rgba(0,0,0, 0.3);
`;

Footer.Address = styled.div`
    margin-bottom: 1rem;

    > div {
        margin-bottom: 1rem;
    }

    span {
        padding: 0 0.5rem;
    }
`;

Footer.SocialMedia = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
Footer.SocialIcon = styled.a`
    & + a {
        margin-left: 1rem;
    }
`;