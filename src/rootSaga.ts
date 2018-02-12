// recommended reading https://formidable.com/blog/2017/composition-patterns-in-redux-saga/
// and beginner tutorial https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all ([
      // fork(questionnaireSaga),
    ]);
}
