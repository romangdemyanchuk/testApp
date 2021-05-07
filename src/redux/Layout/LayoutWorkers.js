import {call, put} from "redux-saga/effects";
import {ITEMS, LOAD_MORE_ITEMS_BUTTON_IS_DISABLED, LOADING, MORE_ITEMS} from "./LayoutConstants";
import {getItemsInfo} from "../../utils/api";
import {error} from "../../utils/helpers/infoMessages";

export function* getItemsWorker({payload: {resource, page}}) {
    try {
        yield put({type: LOADING, payload: true})
        const items = yield call(getItemsInfo, {resource, page})
        yield put({type: ITEMS, payload: items.data.results})
    }
    catch (e) { error('Something is wrong') }
    finally { yield put({type: LOADING, payload: false}) }
}

export function* getMoreItemsWorker({payload: {resource, page}}) {
    try {
        yield put({type: LOADING, payload: true})
        const items = yield call(getItemsInfo, {resource, page})
        if (!items.data.next)
            yield put({type: LOAD_MORE_ITEMS_BUTTON_IS_DISABLED, payload: true})
        yield put({type: MORE_ITEMS, payload: items.data.results})

    }
    catch (e) { error('Something is wrong') }
    finally { yield put({type: LOADING, payload: false}) }
}
