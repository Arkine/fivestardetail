import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    height: 100%;
`;

Body.header = styled.header`
    max-width: ${props => props.theme.widths.row};
    margin: 0 auto;
`;

Body.Footer = styled.div`
    max-width: ${props => props.theme.widths.row};
    margin: 1rem auto 0;
    border-radius: 10px;
    text-align: center;
    padding: 2rem 0;

    background-color: rgba(0,0,0, 0.3);
`;

export const Button = styled.button`
    
`;