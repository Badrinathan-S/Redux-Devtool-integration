import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from "./actions";
import axios from "axios";

export function* asyncIncrement() {
    try{
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts`);
        yield put({
            type: actions.INCREMENT_VALUE_SUCCESS,
            payload: response,
        })
    } catch (e) {
        yield put({
            type: actions.INCREMENT_VALUE_FAILED,
            payload: e,
        })
    }
}

export function* asyncDecrement() {
    try{
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts`);
        yield put({
            type: actions.DECREMENT_VALUE_SUCCESS,
            payload: response,
        })
    } catch (e) {
        yield put({
            type: actions.DECREMENT_VALUE_FAILED,
            payload: e,
        })
    }
}




export default function* rootSaga() {
    yield all ([
        takeEvery(actions.INCREMENT_VALUE, asyncIncrement),
        takeEvery(actions.DECREMENT_VALUE, asyncDecrement)
    ]);
}