import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

FlexRow.Row = styled.div`
    flex-basis: 100%;
`;
FlexRow.Card = styled.div`
    flex-basis: ${props => props.flexBasis ? props.flexBasis : '20rem'};
    flex-grow: 1;
`;

FlexRow.Card.Title = styled.h3``;

FlexRow.Card.List = styled.ul``;
FlexRow.Card.ListItem = styled.li``;

export const Row = styled.div`
    width: 100%;
    max-width: ${props => props.theme.widths.row};
    margin: 0 auto;
`;

export const Section = styled.section`
    margin: 1rem 0 3rem;
`;