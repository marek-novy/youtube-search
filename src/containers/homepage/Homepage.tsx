import { YoutubeVideo } from 'components/youtubeVid/YoutubeVideo';
import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import AppHeader from '../../containers/appHeader/AppHeader';
import Sidebar from '../sidebar/Sidebar';
import { getHomepageStore, getSnippet, getVideoDetail, getVideoId } from './HomepageReducer';

class HomepageRaw extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        const { videoId, snippet, videoDetail } = this.props;
        return (
            <>
                <AppHeader />
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
}

const mapStateToProps = (state): MapStateToProps => {
    const homepageState = getHomepageStore(state);
    console.log(state);
    return {
        videoId: getVideoId(homepageState),
        snippet: getSnippet(homepageState),
        videoDetail: getVideoDetail(homepageState),
    };
};

export default connect(mapStateToProps)(HomepageRaw);
