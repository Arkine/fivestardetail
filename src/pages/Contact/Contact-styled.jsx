import styled from 'styled-components';
import {
    Section,
    Form
} from '../styled';

export const Panel = styled.div`
    padding: 1rem;
`;

Panel.Row = styled.div`
    margin-bottom: 1rem;

    svg {
        margin-right: 1rem;
    }
`;

export const ContactForm = styled(Form)`
    padding: 1rem;
`;