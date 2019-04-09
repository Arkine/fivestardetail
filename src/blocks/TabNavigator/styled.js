import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;

    max-width: ${props => props.theme.widths.row};
    width: 100%;
    margin: 0 auto 2rem;
`;

export const Tabs = styled.ul`
    padding: 1rem 0;

    flex-basis: 20rem;

    background-color: rgba(255,255,255,.1);
    /* background-color: ${props => props.theme.colors.oil}; */
`;
Tabs.Tab = styled.li`
    display: block;
    padding: 1rem;
    text-align: center;

    
    color: ${props => props.active ? props.theme.colors.cobalt : '#fff'};

    cursor: pointer;

    &:hover {
        /* border-bottom: 3px solid  ${props => props.theme.colors.cobalt}; */
        color: ${props => props.theme.colors.cobalt};
    }

`;

export const Panels = styled.div`
    background-color: #fff;
    flex-grow: 1;
`;
Panels.Pane = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    padding: 2rem;
    
    color: #333;

    h2 {
        color: #333;
    }

    ul {
        columns: 2;
    }
`;