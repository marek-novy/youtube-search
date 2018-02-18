import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as youtube from 'youtube-finder';

import { IAnyAction } from '../../types/ActionInterface';
import { HomepageActions } from '../homepage/HomepageActions';
import { SidebarActions } from '../sidebar/SidebarActions';
import { HeaderActions } from './AppHeaderActions';

export default function* appHeaderSaga() {
    yield takeLatest(HeaderActions.HEADER_SUBMIT_SEARCH, searchSubmit);
}

function* searchSubmit(action: IAnyAction) {
    try {
        const client = youtube.createClient({ key: process.env.REACT_APP_GAPI });

        const params = {
            part: 'snippet',
            q: action.payload.searchInput,
            maxResults: 16,
            type: 'video',
        };
        // Promisify
        const youtubeSearch = (param): any => {
            return new Promise((resolve, reject) => {
                client.search(params, (err, data) => {
                    if (err !== null) {
                        return reject(err);
                    }
                    resolve(data);
                });
            });
        };

        const snippetData = yield call(youtubeSearch, params);
        yield all([
            put({ type: SidebarActions.SIDEBAR_SEARCH_LOADED, payload: snippetData }),
            put({ type: HomepageActions.HOMEPAGE_PLAY_VIDEO, payload: { videoId: '' } }),
            put({ type: HeaderActions.HEADER_LOADED }),
        ]);
    } catch (e) {
        console.error(e);
    }
}
