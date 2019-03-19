import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.section`
    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

Section.Main = styled.main`
    min-height: 300px;
`;

Section.Row = styled.div`
    max-width: ${props => props.theme.widths.row};
    margin: 0 auto;
    padding: 2rem 0;
`;

Section.PageTitle = styled.h1`
    font-size: ${props => props.theme.fonts.h1.desktop};
    color: ${props => props.theme.colors.white};
`;

Section.Header = styled.h2`
    font-size: ${props => props.theme.fonts.h2.desktop};
    font-weight: 600;
`;

Section.Content = styled.div`
    margin-bottom: 1rem;
`;

Section.FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: ${props => props.justify ? props.justify : 'space-between'};
    align-items: center;
`;

Section.Banner = styled.div`
    position: relative;

    padding: 3rem 0;
    margin: 0 auto;
    max-width: ${props => props.theme.widths.row};
    
    border-radius: 10px;
    background-color: ${props => props.theme.colors.smoke};
    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

Section.BannerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 10px;

    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.colors.oil};
`;

Section.BannerTitle = styled.h1`
    position: relative;
    z-index: 2;
    font-size: ${props => props.theme.fonts.h1.desktop};
    margin: 0 2rem;
`;

export const NotFound = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    > span {
        font-size: 2.5rem;
    }
`;

export const Card = styled.div`
    flex-basis: ${props => props.flexBasis ? props.flexBasis : '18rem'};
    margin: 1rem;

    ul {
        margin: 1rem 0;
        li {
            & + li {
                margin-top: 1rem;
            }
        }
    }
`;
Card.LogoWrapper = styled(Link)`
    flex-basis: ${props => props.flexBasis ? props.flexBasis : '18rem'};
`;
Card.Logo = styled.img`
    width: auto;
    /* flex-basis: ${props => props.flexBasis ? props.flexBasis : '15rem'}; */
    height: 100px;
    
    margin: 1rem;
`;

Card.Image = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    flex-basis: ${props => props.flexBasis ? props.flexBasis : '15rem'};
    height: ${props => props.dummy ? 0 : '200px'};
    
    margin: 1rem;
    padding: 2rem;

    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

Card.ImageText = styled.span`
    font-size: 1.5rem;
    color: #fff;
`;

Card.Body = styled.div``;
Card.Header = styled.div`
    height: 150px;

    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

