import React from 'react';

import {Icon} from './Loading-styled';

export default class Loading extends React.PureComponent {
    render() {
        return (
            <Icon>
                <Icon.Block></Icon.Block>
                <Icon.Block></Icon.Block>
                <Icon.Block></Icon.Block>
            </Icon>
        )
    }
}