import React from 'react';

import {
    Container,
    Tabs,
    FeaturedImage,
    Panels
} from './styled';

export default class TabNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        }
    }

    setActiveTab = (index) => {
        this.setState({
            activeTab: index
        });
    }

    render() {
        console.log({child: this.props.children})
        return (
            <Container>
                <Tabs>
                    {this.props.tabs.map((tab, i) => (
                        <Tabs.Tab 
                            key={`tabs-tab-${i}`}
                            onClick={() => this.setActiveTab(i)}
                            active={i === this.state.activeTab}
                        >
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                </Tabs>
                <Panels>
                    {React.Children.map(this.props.children, (child, i) => (
                        <Panels.Pane 
                            key={`tab-navigator-pane-${i}`}
                            active={i === this.state.activeTab}
                        >   
                            {child}
                        </Panels.Pane>
                    ))}
                </Panels>
            </Container>
        );
    }
}