import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';

import Loading from '../../blocks/Loading';

import Page from '../Page';

import {
    Section,
    Form,
    Card
} from '../styled';

import {
    ImagesList
} from './styled';


class GalleryPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            activeImage: null,
            loading: false
        }
    }
    async componentDidMount() {
        this.setLoadingState(true);
        try {
            const images = await this.fetchImages();

            this.setState({
                images
            });
        } catch (e) {
            console.log('error fetching images');
            this.setState({
                error: 'Error loading images'
            });
        } finally {
            this.setLoadingState(false);
        }
    }
 
    fetchImages = async () => {
        let {images} = this.state;

        try {
            const resp = await fetch("https://www.instagram.com/five_star_detail_restoration/?__a=1");

            if (resp.ok) {
                const images = await resp.json();
                // graphql.user.edge_owner_to_timeline_media.edges
    
                return images.graphql.user.edge_owner_to_timeline_media.edges.map(edge => edge.node);
            } else {
                throw new Error(resp.statusText);
            }
        } catch(e) {
            throw new Error('Error fetching images');
        }
        
    }

    setActiveImage = imageId => {
        this.setState({
            activeImage: imageId
        });
    }

    setLoadingState = state => {
        this.setState({
            loading: state
        });
    }

    render() {
        return (
            <Page title="Gallery">
                <Section>
                    <Section.Row>
                        <Section.Inner>
                            <Section.FlexRow justify="center">
                                {this.state.loading && <Loading />}
                                {this.state.images.length > 0 && 
                                    <ImagesList>
                                        {this.state.images.map(image => (
                                            <ImagesList.Card 
                                                src={image.thumbnail_src}
                                                onClick={e => this.setActiveImage(image.id)}
                                            />))}
                                    </ImagesList>
                                }
                            </Section.FlexRow>
                        </Section.Inner>
                    </Section.Row>
                </Section>
            </Page>
        )
    }
}

export default GalleryPage;