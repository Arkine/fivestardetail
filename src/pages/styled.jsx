import styled from 'styled-components';

export const Section = styled.section`
    
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
    line-height: 1.5;
    letter-spacing: 0.1em;

    margin-bottom: 1rem;
`;

Section.FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

export const Card = styled.div`
    flex-basis: ${props => props.flexBasis ? props.flexBasis : '18rem'};
    margin: 1rem;

    ul {
        /* padding-left: 0; */
    }
`;

Card.Body = styled.div``;
Card.Header = styled.div`
    height: 200px;

    border: 1px solid blue;
`;

