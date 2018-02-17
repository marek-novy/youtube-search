import { YoutubeFetchVideoDetails } from 'api/youtube.api';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IAnyAction } from '../../types/ActionInterface';
import { HomepageActions } from '../homepage/HomepageActions';

export default function* homepageSaga() {
    yield takeLatest(HomepageActions.HOMEPAGE_PLAY_VIDEO, loadVideoDetails);
}

function* loadVideoDetails(action: IAnyAction) {
    try {
        const { videoId } = action.payload;
        console.log('pred');
        const response = yield call(YoutubeFetchVideoDetails, videoId);
        console.log(response);
        yield put({ type: HomepageActions.HOMEPAGE_DETAILS_LOADED, payload: response });
    } catch (e) {
        console.error(e);
    }
}
