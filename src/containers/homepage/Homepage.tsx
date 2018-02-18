import { YoutubeVideo } from 'components/youtubeVid/YoutubeVideo';
import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import AppHeader from '../../containers/appHeader/AppHeader';
import Sidebar from '../sidebar/Sidebar';
import { HomepageLikeVideo, HomepagePlayVideoPayload } from './HomepageActions';
import {
    getGoogleData,
    getHomepageStore,
    getIsLogged,
    getSnippet,
    getVideoDetail,
    getVideoId,
} from './HomepageReducer';

class HomepageRaw extends React.PureComponent<any, any> {
    handleClickLike = (videoId: string): void => {
        const { likeVideo, googleData } = this.props;

        likeVideo({ videoId, accessToken: googleData.accessToken  });
    };

    render(): React.ReactNode {
        const { videoId, snippet, videoDetail, isLogged } = this.props;
        return (
            <>
                <AppHeader isLogged={isLogged} />
                <Container fluid>
                    <Row>
                        <Col xs="12" md={videoId ? 3 : 12}>
                            <Sidebar />
                        </Col>
                        <Col className={videoId ? '' : 'hidden'}>
                            <YoutubeVideo
                                videoId={videoId}
                                snippet={snippet}
                                videoDetail={videoDetail}
                                likeHandler={this.handleClickLike}
                                isLogged={isLogged}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

interface MapStateToProps {
    videoId: string;
    snippet: any;
    videoDetail: any;
    isLogged: boolean;
    googleData: any;
}

const mapStateToProps = (state): MapStateToProps => {
    const homepageState = getHomepageStore(state);
    return {
        videoId: getVideoId(homepageState),
        snippet: getSnippet(homepageState),
        videoDetail: getVideoDetail(homepageState),
        isLogged: getIsLogged(homepageState),
        googleData: getGoogleData(homepageState),
    };
};

interface IDispatchToProps {
    likeVideo: (payload: HomepagePlayVideoPayload) => void;
}

const mapDispatchToProps = (dispatch): IDispatchToProps => {
    return {
        likeVideo: videoObject => dispatch(HomepageLikeVideo(videoObject)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageRaw);
