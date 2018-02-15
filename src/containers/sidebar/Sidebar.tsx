/* tslint:disable */

import * as React from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';

import { getIsLoaded, getSidebarStore, getYoutubesnippets } from './SidebarReducer';
import { YoutubeSearchList } from 'components/youtubeSearchList/youtubeSearchList';
import { SidebarVideoClick } from './SidebarActions';

// tslint:disable-next-line:no-empty-interface
interface SidebarProps extends MapStateToProps, IDispatchToProps {}
class SidebarRaw extends React.PureComponent<SidebarProps> {
    render() {
        const { isLoaded, youtubeSnippets } = this.props;
        console.log('snippets?', youtubeSnippets);

        return (
            <>
                <Row>
                    <Col>
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
                    /*Show search Results*/ <Row>
                        <Col>
                            <YoutubeSearchList items={youtubeSnippets.items} handleClick={this.handleClick} />
                        </Col>
                    </Row>
                )}
            </>
        );
    }

    private handleClick = (videoId: string): void => {
        const { loadYoutubeVideo } = this.props;
        loadYoutubeVideo(videoId);
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
    loadYoutubeVideo: (payload: string) => void;
}

const mapDispatchToProps = (dispatch): IDispatchToProps => {
    return {
        loadYoutubeVideo: videoId => dispatch(SidebarVideoClick(videoId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRaw);
