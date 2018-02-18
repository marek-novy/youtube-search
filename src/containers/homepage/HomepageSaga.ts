import { YoutubeFetchVideoDetails, YoutubeLikeVideo } from 'api/youtube.api';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IAnyAction } from '../../types/ActionInterface';
import { HomepageActions } from '../homepage/HomepageActions';

export default function* homepageSaga() {
    yield takeLatest(HomepageActions.HOMEPAGE_PLAY_VIDEO, loadVideoDetails);
    yield takeLatest(HomepageActions.HOMEPAGE_VIDEO_LIKE, likeVideo);
}

function* loadVideoDetails(action: IAnyAction) {
    try {
        const { videoId } = action.payload;
        const response = yield call(YoutubeFetchVideoDetails, videoId);
        yield put({ type: HomepageActions.HOMEPAGE_DETAILS_LOADED, payload: response });
    } catch (e) {
        console.error(e);
    }
}

function* likeVideo(action: IAnyAction) {
    try {
        yield call(YoutubeLikeVideo, action.payload);
    } catch (e) {
        console.error(e);
    }
}
