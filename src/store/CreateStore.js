import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleWare from 'redux-saga'
import thunk from "redux-thunk";
import {sagaWatcher} from "../redux/session/Sagas";
import {reducer as formReducer} from 'redux-form'
import LayoutReducer from "../redux/session/Layout/LayoutReducer";

const saga = createSagaMiddleWare()


const allReducers = combineReducers({
    main: LayoutReducer,
    form: formReducer
});
const store = createStore(allReducers,
    compose(
        applyMiddleware(thunk, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
);

saga.run(sagaWatcher)

export default store;
