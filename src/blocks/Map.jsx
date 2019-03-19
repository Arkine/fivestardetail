import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
    width: 100%;
`;

export default () => {
    return (
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.6880436881415!2d-121.20149918524496!3d38.679036867392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae136c7ea705f%3A0x6e64b48977781fd3!2s9477+Greenback+Ln%2C+Folsom%2C+CA+95630!5e0!3m2!1sen!2sus!4v1553008600330" height="450" frameBorder="0" allowfullscreen></Iframe>
    );
}