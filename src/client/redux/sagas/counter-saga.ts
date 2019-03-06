import { call, put, takeEvery, select, takeLeading, delay } from 'redux-saga/effects';

import {
    autoIncrementCounter,
    incrementCounter
} from '../actions/counter-actions'

export function* sagaAutoIncrement(action: { payload: {} }) {
    for (let i = 0; i < 10; i++) {
        yield put(incrementCounter());
        yield delay(500)
    }
}

export default function* root() {
    yield takeLeading<any>(autoIncrementCounter, sagaAutoIncrement);
}