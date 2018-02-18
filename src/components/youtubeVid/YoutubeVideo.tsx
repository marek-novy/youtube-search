import * as React from 'react';
import YouTube from 'react-youtube';
import { Button, Col, Row } from 'reactstrap';

interface YoutubeVideoProps {
    videoId: string;
    snippet: any; // should decalre types before
    videoDetail: any;
    likeHandler: (videoId: string) => void;
    isLogged: boolean;
    [key: string]: any;
}

interface YoutubeVideoState {
    videoLiked: boolean;
}

export class YoutubeVideo extends React.PureComponent<YoutubeVideoProps, YoutubeVideoState> {
    constructor(props: YoutubeVideoProps) {
        super(props);

        this.state = {
            videoLiked: false,
        };
    }

    onClickLike = event => {
        const { videoId, likeHandler } = this.props;
        if (navigator.onLine) {
            likeHandler(videoId);
            this.setState({ videoLiked: true });
        }
    };

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        const { videoId, snippet, videoDetail, isLogged } = this.props;

        return (
            <>
                <Row>
                    <Col className=" pl-3">
                        <div className="embed-responsive embed-responsive-16by9">
                            <YouTube videoId={videoId} opts={opts} className="embed-responsive-item" />
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
                        {videoDetail &&
                            videoDetail.items.length !== 0 && (
                                <>
                                    <em className="text-nowrap"> 
                                        <strong> Viewed:</strong> {videoDetail.items[0].statistics.viewCount}
                                    </em>
                                    <em className="text-nowrap">
                                        <strong> Liked:</strong> {videoDetail.items[0].statistics.likeCount}
                                    </em>
                                </>
                            )}
                        <div>
                            {isLogged && (
                                <Button
                                    color={!this.state.videoLiked ? 'primary' : 'secondary'}
                                    className="transitions"
                                    disabled={this.state.videoLiked}
                                    onClick={this.onClickLike}
                                >
                                    {!this.state.videoLiked ? 'Like' : 'Liked'}
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}
