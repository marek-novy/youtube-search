import { YoutubeSearchList } from 'components/youtubeSearchList/youtubeSearchList';
import * as React from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';

import { HomepagePlayVideo, HomepagePlayVideoPayload } from '../homepage/HomepageActions';
import { getIsLoaded, getSidebarStore, getYoutubesnippets } from './SidebarReducer';

/* tslint:disable */

// tslint:disable-next-line:no-empty-interface
interface SidebarProps extends MapStateToProps, IDispatchToProps {}
class SidebarRaw extends React.PureComponent<SidebarProps> {
    render() {
        const { isLoaded, youtubeSnippets } = this.props;
        console.log('snippets?', youtubeSnippets);

        return (
            <>
                <Row>
                    <Col className="border-bottom mb-3">
                        <h3 className="text-uppercase"> Search results</h3>
                    </Col>
                </Row>
                {!isLoaded ? (
                    <Row>
                        <Col>
                            <Alert color="info">No result yet! Try searchbar.</Alert>
                        </Col>
                    </Row>
                ) : (
                    /*Show search Results*/
                    <Row>
                        <Col>
                            <YoutubeSearchList items={youtubeSnippets.items} handleClick={this.handleClick} />
                        </Col>
                    </Row>
                )}
            </>
        );
    }

    private handleClick = (snippetData: HomepagePlayVideoPayload): void => {
        const { loadYoutubeVideo } = this.props;
        loadYoutubeVideo(snippetData);
    };
}

interface MapStateToProps {
    isLoaded: boolean;
    youtubeSnippets: any;
}

const mapStateToProps = (state): MapStateToProps => {
    const sidebarState = getSidebarStore(state);
    return {
        isLoaded: getIsLoaded(sidebarState),
        youtubeSnippets: getYoutubesnippets(sidebarState),
    };
};

interface IDispatchToProps {
    loadYoutubeVideo: (payload: HomepagePlayVideoPayload) => void;
}

const mapDispatchToProps = (dispatch): IDispatchToProps => {
    return {
        loadYoutubeVideo: snippetData => dispatch(HomepagePlayVideo(snippetData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRaw);
