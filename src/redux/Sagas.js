import {call, put, takeEvery} from 'redux-saga/effects'
import {
    GET_ITEMS_CREATOR,
    GET_MORE_ITEMS_CREATOR,
    ITEMS,
    LOAD_MORE_ITEMS_BUTTON_IS_DISABLED,
    LOADING,
    MORE_ITEMS
} from "./Layout/LayoutConstants";
import {getItemsInfo, login, register} from "../../utils/api";
import {error, success} from "../../utils/helpers/infoMessages";
import {redirect} from "../../utils/helpers/functions";
import {LOGIN_CREATOR, REGISTER_CREATOR} from "./Auth/AuthConstants";

export function* sagaWatcher() {
    yield takeEvery(GET_ITEMS_CREATOR, getItemsWorker)
    yield takeEvery(GET_MORE_ITEMS_CREATOR, getMoreItemsWorker)
    yield takeEvery(REGISTER_CREATOR, registerWorker)
    yield takeEvery(LOGIN_CREATOR, loginWorker)
}

function* getItemsWorker(data) {
    const {resource, page} = data.payload
    try {
        yield put({type: LOADING, payload: true})
        const items = yield call(getItemsInfo, {resource, page})
        yield put({type: ITEMS, payload: items.data.results})

    } catch (e) {
        error('Something is wrong')
    } finally {
        yield put({type: LOADING, payload: false})
    }
}

function* getMoreItemsWorker(data) {
    const {resource, page} = data.payload
    try {
        yield put({type: LOADING, payload: true})
        const items = yield call(getItemsInfo, {resource, page})
        if (!items.data.next)
            yield put({type: LOAD_MORE_ITEMS_BUTTON_IS_DISABLED, payload: true})
        yield put({type: MORE_ITEMS, payload: items.data.results})

    } catch (e) {
        error('Something is wrong')
    } finally {
        yield put({type: LOADING, payload: false})
    }
}

function* registerWorker(data) {
    const {formData, history} = data.payload
    try {
        yield put({type: LOADING, payload: true})
        yield call(register, {formData})
        yield call(login, {formData})
        localStorage.setItem("isAuth", true);
        success('You successfully register and login')
        redirect('/people', history)
    } catch (e) {
        error(e.response.data.message)
    } finally {
        yield put({type: LOADING, payload: false})
    }
}

function* loginWorker(data) {
    const {formData, history} = data.payload
    try {
        yield put({type: LOADING, payload: true})
        yield call(login, {formData})
        success('You successfully login')
        redirect('/people', history)
    } catch (e) {
        error(e.response.data.message)
    } finally {
        yield put({type: LOADING, payload: false})
    }
}
