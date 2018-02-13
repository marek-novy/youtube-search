// recommended reading https://formidable.com/blog/2017/composition-patterns-in-redux-saga/
// and beginner tutorial https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
import appHeaderSaga from 'containers/appHeader/AppHeaderSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all ([
      fork(appHeaderSaga),
    ]);
}
