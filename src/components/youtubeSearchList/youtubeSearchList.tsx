import { HomepagePlayVideoPayload } from 'containers/homepage/HomepageActions';
import * as React from 'react';
import { Col, Media, Row } from 'reactstrap';

interface YoutubeSearchListProps {
    items: YoutubeItem[];
    handleClick: (snippetData: HomepagePlayVideoPayload) => void;
}

export const YoutubeSearchList = (props: YoutubeSearchListProps): JSX.Element => {
    const { items, handleClick } = props;

    return (
        <>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} className="sidebar__results">
                            <Media
                                onClick={e => {
                                    handleClick({ videoId: item.id.videoId, snippet: item.snippet });
                                }}
                            >
                                <Media top className="media-wrap">
                                    <Media
                                        object
                                        src={item.snippet.thumbnails.medium.url}
                                        alt={item.snippet.title}
                                        className="video-thumbnail"
                                    />
                                </Media>
                                <Media body>
                                    <Media heading>{item.snippet.title}</Media>
                                    <p>
                                        <a href={`https://youtube.com/channel/${item.snippet.chnnaleId}`}>
                                            {item.snippet.channelTitle}
                                        </a>
                                    </p>
                                </Media>
                            </Media>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};
