import { fork, all } from 'redux-saga/effects';
import CounterSagas from './counter-saga';


export default function* rootSaga() {
    yield all([
        fork(CounterSagas)
    ]);
}