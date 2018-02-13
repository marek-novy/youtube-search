import * as React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import { getIsLoaded, getSidebarStore, getYoutubesnippets } from './SidebarReducer';

class SidebarRaw extends React.PureComponent {
    redner() {
        return <Row>sidebar</Row>;
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
