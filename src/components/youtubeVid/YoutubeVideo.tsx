import * as React from 'react';
import YouTube from 'react-youtube';
import { Col, Row } from 'reactstrap';

interface YoutubeVideoProps {
    videoId: string;
}

export class YoutubeVideo extends React.PureComponent<YoutubeVideoProps> {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        const {videoId} = this.props;
        return (
            <Row>
                <Col>
                    <YouTube videoId={videoId} opts={opts}  />
                </Col>
            </Row>
        );
    }
}
