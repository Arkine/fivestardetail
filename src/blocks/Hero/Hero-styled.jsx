import styled from 'styled-components';

export const Hero = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
`;

export const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    opacity: ${props => props.active ? 1 : 0};

    transition: all 3s ease-in-out;

    height: 100%;
    width: 100%;

    background-color: #fff;
    background: url(${props => props.bgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

Slide.Content = styled.div`
    position: absolute;
    top: 25%;
    left: 0;
    z-index: 5;

    padding: 1rem;
    background-color: ${props => props.theme.colors.oil};

    max-width: 35%;

    button {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        color: #fff;
        font-size: 1.2rem;
        font-weight: 600;
        
        padding: 0;
        margin-top: 1rem;

        a {
            color: #fff
        }
        svg {
            display: inline-block;
            color: #fff;

            margin-left: 1rem;
        }

        &:hover {
            a {
                color: ${props => props.theme.colors.cobalt};
            }

            svg {
                color: ${props => props.theme.colors.cobalt};
            }
        }
    }

    /* transform: translate(-25%, -50%); */
`;

Slide.Title = styled.h1`
    font-size: ${props => props.theme.fonts.h2.desktop};
    margin: 0;
`;