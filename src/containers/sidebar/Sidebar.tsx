/* tslint:disable */ 
import * as React from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';

import { getIsLoaded, getSidebarStore, getYoutubesnippets } from './SidebarReducer';

// tslint:disable-next-line:no-empty-interface
interface SidebarProps extends MapStateToProps {}
class SidebarRaw extends React.PureComponent<SidebarProps> {
    render() {
        const { isLoaded , youtubeSnippets} = this.props;
            console.log("snippets?",youtubeSnippets);
       
        return (
            <>
                <Row>
                    <Col>
                        <h3 className="text-uppercase"> Search results</h3>
                    </Col>
                </Row>
                {!isLoaded && (
                    <Row>
                        <Col>
                            <Alert color="info">No result yet! Try searchbar.</Alert>
                        </Col>
                    </Row>
                )}
               
            </>
        );
    }
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

export default connect(mapStateToProps)(SidebarRaw);
