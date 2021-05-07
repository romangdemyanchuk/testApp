import {call, put} from "redux-saga/effects";
import {LOADING} from "../Layout/LayoutConstants";
import {login, register} from "../../utils/api";
import {redirect, setToStorage} from "../../utils/helpers/functions";
import {error, success} from "../../utils/helpers/infoMessages";

export function* registerWorker({payload:{formData, history}}) {
    try {
        yield put({type: LOADING, payload: true})
        yield call(register, {formData})
        yield call(login, {formData})
        setToStorage("isAuth", true)
        success('You successfully register and login')
        redirect('/people', history)
    }
    catch (e) { error(e.response.data.message) }
    finally { yield put({type: LOADING, payload: false}) }
}

export function* loginWorker({payload:{formData, history}}) {
    try {
        yield put({type: LOADING, payload: true})
        yield call(login, {formData})
        setToStorage("isAuth", true)
        success('You successfully login')
        redirect('/people', history)
    }
    catch (e) { error(e.response.data.message) }
    finally { yield put({type: LOADING, payload: false}) }
}
