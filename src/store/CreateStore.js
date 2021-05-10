import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga'
import {sagaWatcher} from '../redux/Sagas';
import {reducer as formReducer} from 'redux-form'
import MainReducer from '../redux/MainReducer';

const saga = createSagaMiddleWare()

const allReducers = combineReducers({
    main: MainReducer,
    form: formReducer
});
const store = createStore(allReducers, applyMiddleware(saga));

saga.run(sagaWatcher)

export default store;
