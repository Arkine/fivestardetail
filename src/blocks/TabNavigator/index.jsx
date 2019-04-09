import React from 'react';

import {
    Container,
    Tabs,
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
                    {this.props.tabs.map((tab, i) => (
                        <Panels.Pane 
                            key={`tabs-pane-${i}`}
                            active={i === this.state.activeTab}
                        >   
                            <h2>{tab.title}</h2>
                            {tab.description && 
                                <p>{tab.description}</p>
                            }
                            <ul>
                                {tab.services.map((service, i) => (
                                    <li key={`tabs-panel-${i}`}>{service.label}</li>
                                ))}
                            </ul>
                        </Panels.Pane>
                    ))}
                </Panels>
            </Container>
        );
    }
}