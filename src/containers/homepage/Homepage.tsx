import { YoutubeVideo } from 'components/youtubeVid/YoutubeVideo';
import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import AppHeader from '../../containers/appHeader/AppHeader';
import Sidebar from '../sidebar/Sidebar';
import { getHomepageStore, getVideoId } from './HomepageReducer';

class HomepageRaw extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        const { videoId } = this.props;
        return (
            <>
                <AppHeader />
                <Container fluid>
                    <Row>
                        <Col xs="12" md={videoId ? 3 : 12}>
                            <Sidebar />
                        </Col>
                        <Col className={videoId ? '' : 'hidden'}>
                            <YoutubeVideo videoId={videoId}  />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

interface MapStateToProps {
    videoId: string;
}

const mapStateToProps = (state): MapStateToProps => {
    const homepageState = getHomepageStore(state);
    console.log(state);
    return {
        videoId: getVideoId(homepageState),
    };
};

export default connect(mapStateToProps)(HomepageRaw);
