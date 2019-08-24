import styled from 'styled-components';

export const ImagesList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

ImagesList.Card = styled.img`
    flex-basis: 300px;
    flex-grow: 1;
    height: 300px;

    border-radius: 4px;
    margin: 1rem;

`;