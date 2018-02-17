import * as React from 'react';
import YouTube from 'react-youtube';
import { Col, Row } from 'reactstrap';

interface YoutubeVideoProps {
    videoId: string;
    snippet: any; // should decalre types before
    videoDetail: any;
    [key: string]: any;
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
        const { videoId, snippet, videoDetail } = this.props;
        console.log('VIDEODETAIL =>>>>>>>', videoDetail);
        return (
            <>
                <Row>
                    <Col className=" pl-3">
                    <div className="embed-responsive embed-responsive-16by9">
                        <YouTube videoId={videoId} opts={opts}  className="embed-responsive-item" />
                    </div>
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col>
                        {snippet && (
                            <div className="video__details">
                                <h3>{snippet.title}</h3>
                                <p>{snippet.description}</p>
                            </div>
                        )}
                    </Col>
                    <Col xs="3" className="pt-1 statistics">
                        {(videoDetail && videoDetail.items.length !== 0) && (
                            <>
                                <em ><strong> Viewed:</strong> {videoDetail.items[0].statistics.viewCount}</em>
                                <em><strong> Liked:</strong> {videoDetail.items[0].statistics.likeCount}</em>
                                
                            </>
                        )}
                    </Col>
                </Row>
            </>
        );
    }
}
