import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {Form} from '../../../generic/Form';
import {getFromStorage} from '../../../utils/helpers/supportiveFunctions';
import {LOGIN_CREATOR} from '../../../redux/Auth/AuthConstants';
import {Loader} from '../../../generic/Loader';
import './Login.scss';


const LoginForm = (props) => <Form handleSubmit={props.handleSubmit} text="Login"/>;

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const history = useHistory();
    getFromStorage('isAuth') && history.push('/people');
    const isLoading = useSelector(state => state.main.isLoading);
    let dispatch = useDispatch();
    const onSubmit = (formData) => dispatch({type: LOGIN_CREATOR, payload: {formData, history}});
    return (
        <div className="loginFormWrapper">
            {isLoading ?
                Loader() :
                <>
                    <Link to={'register'}>to register</Link>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </>
            }

        </div>
    );
};


export default Login;
