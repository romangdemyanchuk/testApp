import {takeEvery} from 'redux-saga/effects'
import {GET_ITEMS_CREATOR, GET_MORE_ITEMS_CREATOR,} from "./Layout/LayoutConstants";
import {LOGIN_CREATOR, REGISTER_CREATOR} from "./Auth/AuthConstants";
import {loginWorker, registerWorker} from "./Auth/AuthWorkers";
import {getItemsWorker, getMoreItemsWorker} from "./Layout/LayoutWorkers";

export function* sagaWatcher() {
    yield takeEvery(GET_ITEMS_CREATOR, getItemsWorker)
    yield takeEvery(GET_MORE_ITEMS_CREATOR, getMoreItemsWorker)
    yield takeEvery(REGISTER_CREATOR, registerWorker)
    yield takeEvery(LOGIN_CREATOR, loginWorker)
}
