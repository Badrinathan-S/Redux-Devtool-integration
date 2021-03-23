import { all } from 'redux-saga/effects';
import counterSaga from './component-redux/saga';

export default function* rootSaga() {
    yield all([
        counterSaga(),
    ]);
}