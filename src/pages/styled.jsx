import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.section`
    position: relative;
    height: 100%;

    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    /* background-color: #fff; */
    background-position: center;
    background-size: cover;
`;

Section.Background = styled.div`
    background: rgba(${props => props.color}, 0.2);
`;

Section.Main = styled.main`
    min-height: 300px;
`;

Section.Row = styled.div`
    position: relative;

    max-width: ${props => props.theme.widths.row};
    margin: 0 auto;
    padding: 4rem 0;

    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    /* background-color: #fff; */
    background-position: center;
    background-size: cover;
`;

Section.Inner = styled.div`
    position: relative;
    z-index: 5;
`;

Section.Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    height: 100%;
    width: 100%;

    background-color: rgba(0,0,0, 0.7);
`;

Section.PageTitle = styled.h1`
    margin: 2rem auto 0;
    max-width: ${props => props.theme.widths.row};
    font-size: ${props => props.theme.fonts.h1.desktop};
    color: ${props => props.theme.colors.white};
`;

Section.Header = styled.h2`
    font-size: ${props => props.theme.fonts.h2.desktop};
    font-weight: 600;
    margin-bottom: 1rem;
`;

Section.Content = styled.div`
    /* margin-bottom: 1rem; */
`;

Section.FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: ${props => props.justify ? props.justify : 'space-between'};
    align-items: center;
    
    margin: 0 -1rem;
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
    background-color: #fff;
    margin: 1rem;

    border-radius: 4px;

    ul {
        padding: 0;

        li {
            padding: 1rem;
            color: #333;

            list-style: none;
            border-bottom: 1px solid #333;

            svg {
                color: ${props => props.theme.colors.cobalt};
                margin-right: 0.25rem;
            }

            & + li {
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

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
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

Card.Body = styled.div`
    /* margin-bottom: 1rem; */
`;
Card.Header = styled.div`
    height: 150px;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    background-image: url(${props => props.bgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

Card.Footer = styled.div`
    background-color: ${props => props.theme.colors.cobalt};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #fff;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.cobaltDark};
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 0;
        width: 100%;

        svg {
            margin-left: 1rem;
            color: #fff;
        }
        
        a {
            display: inline-block;
            color: #fff;
        }
    }
`;

