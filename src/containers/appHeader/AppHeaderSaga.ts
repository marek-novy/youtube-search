import { google } from 'googleapis';
import { takeLatest } from 'redux-saga/effects';

import { IAnyAction } from '../../types/ActionInterface';
import { HeaderActions } from './AppHeaderActions';

export default function* appHeaderSaga() {
    yield takeLatest(HeaderActions.HEADER_SUBMIT_SEARCH, searchSubmit);
}

function* searchSubmit(action: IAnyAction) {
    try {
        const params = {
            key: process.env.REACT_APP_GAPI,
            part: 'snippet',
            q: action.payload.searchInput,
            maxResults: 5,
        };

        const youtube = google.youtube('v3');
        youtube.search.list(params, (a, b) => {
            return;
        });

        // yield put({ type: SidebarActions.SIDEBAR_SEARCH_LOADED, payload: snippetData });
        // yield put({ type: HeaderActions.HEADER_LOADED });
    } catch (e) {
        console.error(e);
    }
}
