import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import { IAnyAction } from '../../types/ActionInterface';
import { HeaderActions } from './AppHeaderActions';
import { questionnaireTypes } from './QuestionnaireActions';

export default function* appHeaderSaga() {
    yield takeLatest(HeaderActions.HEADER_SUBMIT_SEARCH, searchSubmit);
}

function* searchSubmit(action: IAnyAction) {
    try {
        // MOCK looooong api call
        yield delay(5000);
        yield put({ type: HeaderActions.HEADER_SUBMIT_SEARCH });
    } catch (e) {
        console.error(e);
    }
}
