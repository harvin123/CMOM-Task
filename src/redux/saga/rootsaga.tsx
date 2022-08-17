import {all }from 'redux-saga/effects';
import { coinDetailsSaga } from './coinDetailsSaga';
import { coinSaga } from './coinSaga';

export function* rootSaga(){
    yield all ([coinSaga(),coinDetailsSaga()])
}