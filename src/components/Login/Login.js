/* eslint-disable */
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {email, password, required} from "../../utils/helpers/validators";
import {Input} from "../../utils/helpers/formControls";
import Button from "../../generic/Button";
import './Login.scss'
import {LOGIN_CREATOR} from "../../redux/session/Auth/AuthConstants";
import {loader} from "../../utils/helpers/Loader";

const LoginForm = (props) => {
    return (
        <form className="login-form" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={"login"} component={Input}
                       validate={[email, required]}
                />
            </div>
            <div>
                <Field placeholder={'password'} name={"password"} component={Input}
                       validate={[password, required]}
                       type="password"/>
            </div>
            <div>
                {/*<button>Login</button>*/}
                <Button text="Login" funk={props.handleSubmit}/>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginv'})(LoginForm)

const Login = () => {
    const history = useHistory();
    const isAuth = localStorage.getItem("isAuth");
    const isLoading = useSelector(state => state.main.isLoading)
    isAuth && history.push('/people')
    let dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch({type: LOGIN_CREATOR, payload: {formData, history}})
    }
    return (
        <div className="loginFormWrapper">
            {isLoading ?
                loader() :
                <>
                    <Link to={'register'}>to register</Link>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </>
            }

        </div>
    );
};


export default Login;
